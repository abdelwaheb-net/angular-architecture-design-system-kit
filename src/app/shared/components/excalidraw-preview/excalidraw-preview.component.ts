// excalidraw-preview.component.ts - Version corrigée avec zoom
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
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
        <span class="preview-title">Prévisualisation</span>
        <div class="preview-actions">
          <button
            mat-icon-button
            matTooltip="Zoom avant"
            (click)="zoomIn()"
            [disabled]="!isBrowser"
          >
            <mat-icon>zoom_in</mat-icon>
          </button>
          <button
            mat-icon-button
            matTooltip="Zoom arrière"
            (click)="zoomOut()"
            [disabled]="!isBrowser"
          >
            <mat-icon>zoom_out</mat-icon>
          </button>
          <button
            mat-icon-button
            matTooltip="Réinitialiser"
            (click)="resetZoom()"
            [disabled]="!isBrowser"
          >
            <mat-icon>fit_screen</mat-icon>
          </button>
          <button
            mat-icon-button
            matTooltip="Exporter en PNG"
            (click)="exportPNG()"
            [disabled]="!isBrowser"
          >
            <mat-icon>image</mat-icon>
          </button>
        </div>
      </div>

      <div class="canvas-wrapper" #canvasWrapper>
        @if (isBrowser) {
          <canvas #previewCanvas></canvas>
        } @else {
          <div class="ssr-placeholder">
            <mat-icon>image</mat-icon>
            <p>Prévisualisation disponible uniquement dans le navigateur</p>
          </div>
        }
      </div>

      @if (!hasContent && isBrowser) {
        <div class="empty-preview">
          <mat-icon>image</mat-icon>
          <p>Aucun élément à prévisualiser</p>
        </div>
      }
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
      }

      .preview-toolbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 16px;
        background: #f5f5f5;
        border-bottom: 1px solid #e0e0e0;
      }

      .preview-title {
        font-weight: 500;
        color: #333;
      }

      .preview-actions {
        display: flex;
        gap: 4px;
      }

      .canvas-wrapper {
        width: 100%;
        height: calc(100% - 57px);
        position: relative;
        overflow: hidden;
      }

      canvas {
        width: 100%;
        height: 100%;
        display: block;
        transition: transform 0.2s ease;
      }

      .empty-preview,
      .ssr-placeholder {
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

  @Input() group: ExcalidrawGroup | null = null;
  @Input() library: ExcalidrawLibrary | null = null;
  @Input() groups: ExcalidrawGroup[] = [];

  hasContent = false;
  isBrowser: boolean;
  private zoomLevel = 1;
  private readonly zoomStep = 0.1;
  private readonly minZoom = 0.2;
  private readonly maxZoom = 3;

  constructor(
    private canvasRenderer: CanvasRendererService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser && this.canvasRef) {
      this.canvasRenderer.initializeCanvas(this.canvasRef);
      this.renderContent();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isBrowser && this.canvasRef) {
      this.renderContent();
    }
  }

  private renderContent(): void {
    if (!this.isBrowser) return;

    if (this.group) {
      this.canvasRenderer.renderGroup(this.group);
      this.hasContent = true;
    } else if (this.groups.length > 0) {
      this.canvasRenderer.renderLibrary(this.groups);
      this.hasContent = true;
    } else if (this.library) {
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
  }

  zoomIn(): void {
    if (!this.isBrowser) return;
    this.zoomLevel = Math.min(this.zoomLevel + this.zoomStep, this.maxZoom);
    this.applyZoom();
  }

  zoomOut(): void {
    if (!this.isBrowser) return;
    this.zoomLevel = Math.max(this.zoomLevel - this.zoomStep, this.minZoom);
    this.applyZoom();
  }

  resetZoom(): void {
    if (!this.isBrowser) return;
    this.zoomLevel = 1;
    this.applyZoom();
  }

  private applyZoom(): void {
    if (!this.isBrowser || !this.canvasRef) return;

    const canvas = this.canvasRef.nativeElement;
    canvas.style.transform = `scale(${this.zoomLevel})`;
    canvas.style.transformOrigin = 'center center';
    canvas.style.transition = 'transform 0.2s ease';
  }

  exportPNG(): void {
    if (!this.isBrowser) return;

    const dataUrl = this.canvasRenderer.exportToPNG();
    if (!dataUrl) return;

    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'preview.png';
    link.click();
  }
}
