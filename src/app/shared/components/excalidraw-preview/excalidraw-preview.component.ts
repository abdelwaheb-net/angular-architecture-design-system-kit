// excalidraw-preview.component.ts - Version avec Drag & Drop corrigé
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  PLATFORM_ID,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  ExcalidrawElement,
  ExcalidrawGroup,
  ExcalidrawLibrary,
} from '../../../core/models/excalidraw-element.model';
import { CanvasRendererService } from '../../../core/services/canvas-renderer.service';

@Component({
  selector: 'app-excalidraw-preview',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule],
  template: `
    <div class="preview-container">
      <div class="preview-toolbar">
        <span class="preview-title">
          @if (hasContent) {
            {{ previewTitle }}
          } @else {
            Prévisualisation
          }
        </span>
        <div class="preview-actions">
          <button
            mat-icon-button
            matTooltip="Zoom avant"
            (click)="zoomIn()"
            [disabled]="!isBrowser || !hasContent"
          >
            <mat-icon>zoom_in</mat-icon>
          </button>
          <button
            mat-icon-button
            matTooltip="Zoom arrière"
            (click)="zoomOut()"
            [disabled]="!isBrowser || !hasContent"
          >
            <mat-icon>zoom_out</mat-icon>
          </button>
          <button
            mat-icon-button
            matTooltip="Réinitialiser le zoom"
            (click)="resetZoom()"
            [disabled]="!isBrowser || !hasContent"
          >
            <mat-icon>fit_screen</mat-icon>
          </button>
          <button
            mat-icon-button
            matTooltip="Centrer"
            (click)="centerContent()"
            [disabled]="!isBrowser || !hasContent"
          >
            <mat-icon>center_focus_strong</mat-icon>
          </button>
          <button
            mat-icon-button
            matTooltip="Exporter en PNG"
            (click)="exportPNG()"
            [disabled]="!isBrowser || !hasContent"
          >
            <mat-icon>image</mat-icon>
          </button>
        </div>
      </div>

      <div class="canvas-scroll-container" #scrollContainer>
        <div class="canvas-wrapper" #canvasWrapper>
          @if (isBrowser) {
            <canvas
              #previewCanvas
              (mousedown)="onMouseDown($event)"
              (mousemove)="onMouseMove($event)"
              (mouseup)="onMouseUp()"
              (mouseleave)="onMouseUp()"
            ></canvas>
          }

          @if (!hasContent) {
            <div class="empty-preview">
              <mat-icon>image</mat-icon>
              <p>Sélectionnez un composant ou générez une bibliothèque</p>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
      }

      .preview-container {
        position: relative;
        height: 100%;
        background: #ffffff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
      }

      .preview-toolbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 16px;
        background: #f5f5f5;
        border-bottom: 1px solid #e0e0e0;
        flex-shrink: 0;
      }

      .preview-title {
        font-weight: 500;
        color: #333;
      }

      .preview-actions {
        display: flex;
        gap: 4px;
      }

      .canvas-scroll-container {
        flex: 1;
        overflow: auto;
        position: relative;
        background: #fafafa;
        min-height: 0;

        &::-webkit-scrollbar {
          width: 12px;
          height: 12px;
        }

        &::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 6px;
        }

        &::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 6px;

          &:hover {
            background: #a8a8a8;
          }
        }
      }

      .canvas-wrapper {
        min-width: 100%;
        min-height: 100%;
        position: relative;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 20px;
      }

      canvas {
        display: block;
        transition: transform 0.2s ease;
        cursor: grab;

        &:active {
          cursor: grabbing;
        }
      }

      .empty-preview {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: #999;
        pointer-events: none;

        mat-icon {
          font-size: 48px;
          width: 48px;
          height: 48px;
          margin-bottom: 16px;
        }

        p {
          margin: 0;
          font-size: 1.1rem;
        }
      }
    `,
  ],
})
export class ExcalidrawPreviewComponent implements AfterViewInit, OnChanges {
  @ViewChild('previewCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('canvasWrapper') canvasWrapper!: ElementRef<HTMLDivElement>;
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  @Input() group: ExcalidrawGroup | null = null;
  @Input() library: ExcalidrawLibrary | null = null;
  @Input() groups: ExcalidrawGroup[] = [];

  hasContent = false;
  previewTitle = 'Prévisualisation';
  isBrowser: boolean;
  private zoomLevel = 1;
  private readonly zoomStep = 0.1;
  private readonly minZoom = 0.2;
  private readonly maxZoom = 3;

  // Drag & Drop
  private isDragging = false;
  private dragStartX = 0;
  private dragStartY = 0;
  private elementStartX = 0;
  private elementStartY = 0;
  private selectedElement: ExcalidrawElement | null = null;

  constructor(
    private canvasRenderer: CanvasRendererService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser && this.canvasRef) {
      setTimeout(() => {
        this.canvasRenderer.initializeCanvas(this.canvasRef);
        this.renderContent();
        this.cdr.detectChanges();
      }, 300);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['group'] || changes['library'] || changes['groups']) {
      if (this.isBrowser && this.canvasRef) {
        setTimeout(() => {
          this.canvasRenderer.initializeCanvas(this.canvasRef);
          this.renderContent();
          this.cdr.detectChanges();
          this.cdr.markForCheck();
        }, 200);
      }
    }
  }

  /**
   * Trouve un élément à une position donnée
   */
  findElementAtPosition(x: number, y: number): ExcalidrawElement | null {
    console.log("Recherche d'élément à la position:", x, y);

    const allElements = this.getAllElements();

    // Chercher de l'arrière vers l'avant (dernier élément dessiné en premier)
    for (let i = allElements.length - 1; i >= 0; i--) {
      const element = allElements[i];

      if (this.isPointInElement(x, y, element)) {
        console.log('✅ Élément trouvé:', element.type, 'à', element.x, element.y);
        return element;
      }
    }

    console.log('❌ Aucun élément trouvé');
    return null;
  }

  /**
   * Récupère tous les éléments affichés
   */
  private getAllElements(): ExcalidrawElement[] {
    if (this.group) {
      return this.group.elements;
    } else if (this.groups.length > 0) {
      return this.groups.flatMap((g) => g.elements);
    } else if (this.library) {
      return this.library.libraryItems.flatMap((item) => item.elements);
    }
    return [];
  }

  /**
   * Vérifie si un point est dans un élément
   */
  private isPointInElement(x: number, y: number, element: ExcalidrawElement): boolean {
    const elementX = element.x;
    const elementY = element.y;
    const elementWidth = element.width || 0;
    const elementHeight = element.height || 0;

    return (
      x >= elementX &&
      x <= elementX + elementWidth &&
      y >= elementY &&
      y <= elementY + elementHeight
    );
  }

  /**
   * Gestionnaire de mouse down pour le drag
   */
  onMouseDown(event: MouseEvent): void {
    if (!this.isBrowser || !this.hasContent) return;

    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    console.log('Mouse down à:', x, y);

    const element = this.findElementAtPosition(x, y);
    if (element) {
      this.isDragging = true;
      this.selectedElement = element;
      this.dragStartX = x;
      this.dragStartY = y;
      this.elementStartX = element.x;
      this.elementStartY = element.y;
      console.log('✅ Début du drag sur:', element.type);
    }
  }

  /**
   * Gestionnaire de mouse move pour le drag
   */
  /*onMouseMove(event: MouseEvent): void {
    if (!this.isDragging || !this.selectedElement) return;

    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const dx = x - this.dragStartX;
    const dy = y - this.dragStartY;

    this.selectedElement.x = this.elementStartX + dx;
    this.selectedElement.y = this.elementStartY + dy;

    // Redessiner le canvas
    this.renderContent();
  }*/

  /**
   * Gestionnaire de mouse up pour arrêter le drag
   */
  onMouseUp(): void {
    if (this.isDragging) {
      console.log('✅ Fin du drag');
      console.log('Position finale:', this.selectedElement?.x, this.selectedElement?.y);
    }

    this.isDragging = false;
    this.selectedElement = null;
  }

  /*private renderContent(): void {
    if (!this.isBrowser || !this.canvasRef) {
      console.warn('Canvas non disponible');
      return;
    }

    if (this.group) {
      this.canvasRenderer.renderGroup(this.group);
      this.previewTitle = this.group.name;
      this.hasContent = true;
    } else if (this.groups && this.groups.length > 0) {
      this.canvasRenderer.renderLibrary(this.groups);
      this.previewTitle = `${this.groups.length} composants`;
      this.hasContent = true;
    } else if (this.library && this.library.libraryItems.length > 0) {
      const groups = this.library.libraryItems.map((item) => ({
        name: item.id,
        elements: item.elements,
        boundElements: null,
      }));
      this.canvasRenderer.renderLibrary(groups);
      this.previewTitle = `Bibliothèque (${this.library.libraryItems.length} éléments)`;
      this.hasContent = true;
    } else {
      this.hasContent = false;
      this.previewTitle = 'Prévisualisation';
    }
  }*/

  zoomIn(): void {
    if (!this.isBrowser || !this.hasContent) return;
    this.zoomLevel = Math.min(this.zoomLevel + this.zoomStep, this.maxZoom);
    this.applyZoom();
  }

  zoomOut(): void {
    if (!this.isBrowser || !this.hasContent) return;
    this.zoomLevel = Math.max(this.zoomLevel - this.zoomStep, this.minZoom);
    this.applyZoom();
  }

  resetZoom(): void {
    if (!this.isBrowser || !this.hasContent) return;
    this.zoomLevel = 1;
    this.applyZoom();
    this.centerContent();
  }

  centerContent(): void {
    if (!this.scrollContainer || !this.canvasWrapper) return;

    const container = this.scrollContainer.nativeElement;
    const wrapper = this.canvasWrapper.nativeElement;

    const scrollLeft = (wrapper.scrollWidth - container.clientWidth) / 2;
    const scrollTop = (wrapper.scrollHeight - container.clientHeight) / 2;

    container.scrollTo({
      left: Math.max(0, scrollLeft),
      top: Math.max(0, scrollTop),
      behavior: 'smooth',
    });
  }

  private applyZoom(): void {
    if (!this.isBrowser || !this.canvasRef) return;

    const canvas = this.canvasRef.nativeElement;
    canvas.style.transform = `scale(${this.zoomLevel})`;
    canvas.style.transformOrigin = 'top left';
    canvas.style.transition = 'transform 0.2s ease';

    if (this.canvasWrapper) {
      const wrapper = this.canvasWrapper.nativeElement;
      wrapper.style.width = canvas.width * this.zoomLevel + 'px';
      wrapper.style.height = canvas.height * this.zoomLevel + 'px';
    }
  }

  exportPNG(): void {
    if (!this.isBrowser || !this.hasContent) return;

    const dataUrl = this.canvasRenderer.exportToPNG();
    if (!dataUrl) return;

    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'preview.png';
    link.click();
  }
  private renderContent(): void {
    requestAnimationFrame(() => {
      if (this.group) {
        this.canvasRenderer.renderGroup(this.group);
        this.hasContent = true;
      } else if (this.groups && this.groups.length > 0) {
        this.canvasRenderer.renderLibrary(this.groups);
        this.hasContent = true;
      } else if (this.library && this.library.libraryItems.length > 0) {
        const groups = this.library.libraryItems.map((item) => ({
          name: item.id,
          elements: item.elements,
          boundElements: null,
        }));
        this.canvasRenderer.renderLibrary(groups);
        this.hasContent = true;
      } else {
        this.hasContent = false;
      }
    });
  }

  // Débounce pour les événements de drag - Version corrigée
  private debounceTimer: any;
  onMouseMove(event: MouseEvent): void {
    if (!this.isDragging || !this.selectedElement) return;

    // Stocker les valeurs avant le setTimeout
    const element = this.selectedElement;
    const dx = event.clientX - this.dragStartX;
    const dy = event.clientY - this.dragStartY;
    const newX = this.elementStartX + dx;
    const newY = this.elementStartY + dy;

    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      // Vérifier que l'élément existe toujours
      if (element) {
        element.x = newX;
        element.y = newY;
        this.renderContent();
      }
    }, 16); // ~60 FPS
  }
}
