// src/app/core/services/canvas-advanced.service.ts
import { isPlatformBrowser } from '@angular/common';
import { ElementRef, Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CanvasAdvancedService {
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private isBrowser: boolean;

  // Transformations
  private scale = 1;
  private offsetX = 0;
  private offsetY = 0;

  // État du drag
  private isDragging = false;
  private lastX = 0;
  private lastY = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  /**
   * Initialise le canvas avec gestion du pan et zoom
   */
  initializeCanvas(canvasRef: ElementRef<HTMLCanvasElement>): void {
    if (!this.isBrowser) return;

    this.canvas = canvasRef.nativeElement;
    this.ctx = this.canvas.getContext('2d')!;

    // Ajouter les écouteurs d'événements
    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    // Zoom avec la molette
    this.canvas.addEventListener('wheel', (e: WheelEvent) => {
      e.preventDefault();
      const zoomIntensity = 0.1;
      const delta = e.deltaY > 0 ? -zoomIntensity : zoomIntensity;
      this.zoomAt(e.offsetX, e.offsetY, delta);
    });

    // Pan avec le drag
    this.canvas.addEventListener('mousedown', (e: MouseEvent) => {
      this.isDragging = true;
      this.lastX = e.clientX;
      this.lastY = e.clientY;
    });

    window.addEventListener('mousemove', (e: MouseEvent) => {
      if (!this.isDragging) return;

      const dx = e.clientX - this.lastX;
      const dy = e.clientY - this.lastY;

      this.offsetX += dx;
      this.offsetY += dy;

      this.lastX = e.clientX;
      this.lastY = e.clientY;

      this.render();
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });
  }

  private zoomAt(x: number, y: number, delta: number): void {
    const newScale = Math.max(0.1, Math.min(5, this.scale + delta));

    // Zoom vers le point de la souris
    this.offsetX = x - (x - this.offsetX) * (newScale / this.scale);
    this.offsetY = y - (y - this.offsetY) * (newScale / this.scale);

    this.scale = newScale;
    this.render();
  }

  private render(): void {
    // Méthode de rendu avec transformations
  }
}
