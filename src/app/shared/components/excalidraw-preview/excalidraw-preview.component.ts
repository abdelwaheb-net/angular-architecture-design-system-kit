// excalidraw-preview.component.ts - Version avec scroll
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
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
import { ExcalidrawGroup, ExcalidrawLibrary } from '../../../core/models/excalidraw-element.model';
import { CanvasRendererService } from '../../../core/services/canvas-renderer.service';

@Component({
  selector: 'app-excalidraw-preview',
  standalone: true,
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
            <canvas #previewCanvas></canvas>
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
        overflow: auto; /* Permettre le défilement horizontal et vertical */
        position: relative;
        background: #fafafa;
        min-height: 0;

        /* Personnaliser la barre de défilement */
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

        &::-webkit-scrollbar-corner {
          background: #f1f1f1;
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
  private isDragging = false;
  private dragStartX = 0;
  private dragStartY = 0;
  private scrollLeft = 0;
  private scrollTop = 0;

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
        this.initializeCanvas();
        this.renderContent();
        this.cdr.detectChanges();
      }, 300);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['group'] || changes['library'] || changes['groups']) {
      console.log('Inputs changés:', {
        group: this.group ? this.group.name : 'null',
        library: this.library ? this.library.libraryItems.length + ' items' : 'null',
        groups: this.groups.length + ' groups',
      });

      if (this.isBrowser && this.canvasRef) {
        setTimeout(() => {
          this.initializeCanvas();
          this.renderContent();
          this.cdr.detectChanges();
        }, 200);
      }
    }
  }

  private initializeCanvas(): void {
    if (!this.isBrowser || !this.canvasRef) return;

    const canvas = this.canvasRef.nativeElement;
    const container = this.scrollContainer?.nativeElement;

    // Définir une taille minimale pour le canvas
    const minWidth = 800;
    const minHeight = 600;

    canvas.width = Math.max(minWidth, container?.clientWidth || minWidth);
    canvas.height = Math.max(minHeight, container?.clientHeight || minHeight);
    canvas.style.width = canvas.width + 'px';
    canvas.style.height = canvas.height + 'px';

    this.canvasRenderer.initializeCanvas(this.canvasRef);
    console.log('Canvas initialisé:', canvas.width, 'x', canvas.height);
  }

  private renderContent(): void {
    if (!this.isBrowser || !this.canvasRef) {
      console.warn('Canvas non disponible');
      return;
    }

    console.log('=== Rendu du contenu ===');

    if (this.group) {
      console.log('Rendu du groupe:', this.group.name);
      this.canvasRenderer.renderGroup(this.group);
      this.previewTitle = this.group.name;
      this.hasContent = true;
    } else if (this.groups && this.groups.length > 0) {
      console.log('Rendu de', this.groups.length, 'groupes');
      this.canvasRenderer.renderLibrary(this.groups);
      this.previewTitle = `${this.groups.length} composants`;
      this.hasContent = true;
    } else if (this.library && this.library.libraryItems.length > 0) {
      console.log('Rendu de la bibliothèque:', this.library.libraryItems.length, 'items');
      const groups = this.library.libraryItems.map((item) => ({
        name: item.id,
        elements: item.elements,
        boundElements: null,
      }));
      this.canvasRenderer.renderLibrary(groups);
      this.previewTitle = `Bibliothèque (${this.library.libraryItems.length} éléments)`;
      this.hasContent = true;
    } else {
      console.log('Aucun contenu à rendre');
      this.hasContent = false;
      this.previewTitle = 'Prévisualisation';
    }

    // Centrer le contenu après le rendu
    setTimeout(() => {
      this.centerContent();
    }, 100);
  }

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

    // Calculer le centre
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

    // Ajuster la taille du wrapper pour le zoom
    if (this.canvasWrapper) {
      const wrapper = this.canvasWrapper.nativeElement;
      wrapper.style.width = canvas.width * this.zoomLevel + 'px';
      wrapper.style.height = canvas.height * this.zoomLevel + 'px';
    }
  }

  // Support du drag pour déplacer le canvas
  startDrag(event: MouseEvent): void {
    if (!this.scrollContainer) return;

    this.isDragging = true;
    this.dragStartX = event.clientX;
    this.dragStartY = event.clientY;
    this.scrollLeft = this.scrollContainer.nativeElement.scrollLeft;
    this.scrollTop = this.scrollContainer.nativeElement.scrollTop;

    event.preventDefault();
  }

  onDrag(event: MouseEvent): void {
    if (!this.isDragging || !this.scrollContainer) return;

    const deltaX = event.clientX - this.dragStartX;
    const deltaY = event.clientY - this.dragStartY;

    this.scrollContainer.nativeElement.scrollLeft = this.scrollLeft - deltaX;
    this.scrollContainer.nativeElement.scrollTop = this.scrollTop - deltaY;
  }

  endDrag(): void {
    this.isDragging = false;
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
}
