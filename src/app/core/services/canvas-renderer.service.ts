// canvas-renderer.service.ts - Version complètement corrigée
import { isPlatformBrowser } from '@angular/common';
import { ElementRef, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ExcalidrawElement, ExcalidrawGroup } from '../models/excalidraw-element.model';

@Injectable({
  providedIn: 'root',
})
export class CanvasRendererService {
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private offsetX = 0;
  private offsetY = 0;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  /**
   * Initialise le canvas avec des dimensions explicites
   */
  initializeCanvas(canvasRef: ElementRef<HTMLCanvasElement>): void {
    if (!this.isBrowser) {
      console.warn('Canvas non disponible côté serveur');
      return;
    }

    this.canvas = canvasRef.nativeElement;

    // Forcer des dimensions explicites
    const parent = this.canvas.parentElement;
    if (parent) {
      const rect = parent.getBoundingClientRect();
      console.log('Dimensions du parent:', rect.width, 'x', rect.height);

      this.canvas.width = rect.width || 800;
      this.canvas.height = rect.height || 600;

      // Aussi définir les styles CSS
      this.canvas.style.width = `${this.canvas.width}px`;
      this.canvas.style.height = `${this.canvas.height}px`;
    } else {
      // Dimensions par défaut
      this.canvas.width = 800;
      this.canvas.height = 600;
      this.canvas.style.width = '800px';
      this.canvas.style.height = '600px';
    }

    const context = this.canvas.getContext('2d');
    if (!context) {
      console.error("Impossible d'obtenir le contexte 2D");
      return;
    }

    this.ctx = context;
    console.log('Canvas initialisé avec dimensions:', this.canvas.width, 'x', this.canvas.height);
  }

  /**
   * Rend un groupe Excalidraw
   */
  renderGroup(group: ExcalidrawGroup): void {
    if (!this.isBrowser || !this.ctx || !this.canvas) {
      console.error('Canvas non initialisé pour le rendu');
      return;
    }

    console.log('Rendu du groupe:', group.name);

    // Nettoyer le canvas
    this.clearCanvas();

    // Dessiner un fond blanc
    this.ctx.fillStyle = '#ffffff';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Calculer les dimensions du groupe
    const bounds = this.calculateBounds(group.elements);
    console.log('Bounds du groupe:', bounds);

    // Calculer l'échelle pour que tout soit visible
    const scaleX = (this.canvas.width - 100) / bounds.width;
    const scaleY = (this.canvas.height - 100) / bounds.height;
    const scale = Math.min(scaleX, scaleY, 2); // Ne pas zoomer plus de 2x

    console.log('Échelle de rendu:', scale);

    // Centrer le groupe avec l'échelle
    this.offsetX = (this.canvas.width - bounds.width * scale) / 2 - bounds.minX * scale;
    this.offsetY = (this.canvas.height - bounds.height * scale) / 2 - bounds.minY * scale;

    // Dessiner chaque élément avec l'échelle
    group.elements.forEach((element) => {
      this.drawElement(element, scale);
    });

    console.log('Rendu terminé');
  }

  /**
   * Rend une bibliothèque complète
   */
  renderLibrary(groups: ExcalidrawGroup[]): void {
    if (!this.isBrowser || !this.ctx || !this.canvas) return;

    this.clearCanvas();

    const spacing = 50;
    let currentY = 20;
    const currentX = 20;
    const maxWidth = this.canvas.width - 40;

    groups.forEach((group) => {
      const bounds = this.calculateBounds(group.elements);
      const scale = Math.min(1, maxWidth / bounds.width);

      this.offsetX = currentX - bounds.minX * scale;
      this.offsetY = currentY - bounds.minY * scale;

      group.elements.forEach((element) => {
        this.drawElement(element, scale);
      });

      this.drawLabel(group.name, currentX, currentY - 10);

      currentY += bounds.height * scale + spacing;
    });
  }

  /**
   * Dessine un élément avec échelle
   */
  private drawElement(element: ExcalidrawElement, scale: number = 1): void {
    if (!this.ctx) return;

    const ctx = this.ctx;
    const x = element.x * scale + this.offsetX;
    const y = element.y * scale + this.offsetY;

    ctx.save();
    ctx.strokeStyle = element.strokeColor;
    ctx.lineWidth = (element.strokeWidth || 2) * scale;
    ctx.globalAlpha = (element.opacity || 100) / 100;

    if (element.strokeStyle === 'dashed') {
      ctx.setLineDash([5 * scale, 5 * scale]);
    } else if (element.strokeStyle === 'dotted') {
      ctx.setLineDash([2 * scale, 2 * scale]);
    }

    switch (element.type) {
      case 'rectangle':
        this.drawRectangle(x, y, element, scale);
        break;
      case 'ellipse':
        this.drawEllipse(x, y, element, scale);
        break;
      case 'diamond':
        this.drawDiamond(x, y, element, scale);
        break;
      case 'text':
        this.drawText(x, y, element, scale);
        break;
      case 'arrow':
        this.drawArrow(x, y, element, scale);
        break;
      case 'line':
        this.drawLine(x, y, element, scale);
        break;
    }

    ctx.restore();
  }

  /**
   * Dessine un rectangle
   */
  private drawRectangle(x: number, y: number, element: ExcalidrawElement, scale: number): void {
    if (!this.ctx || !element.width || !element.height) return;

    const ctx = this.ctx;
    const width = element.width * scale;
    const height = element.height * scale;
    const radius = (element.roundness?.value || 0) * scale;

    ctx.beginPath();

    if (radius > 0) {
      this.roundRect(ctx, x, y, width, height, radius);
    } else {
      ctx.rect(x, y, width, height);
    }

    if (element.backgroundColor) {
      ctx.fillStyle = element.backgroundColor;
      ctx.fill();
    }

    ctx.stroke();
  }

  /**
   * Dessine un rectangle arrondi
   */
  private roundRect(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
  ): void {
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
  }

  /**
   * Dessine une ellipse
   */
  private drawEllipse(x: number, y: number, element: ExcalidrawElement, scale: number): void {
    if (!this.ctx || !element.width || !element.height) return;

    const ctx = this.ctx;
    const width = element.width * scale;
    const height = element.height * scale;

    ctx.beginPath();
    ctx.ellipse(x + width / 2, y + height / 2, width / 2, height / 2, 0, 0, Math.PI * 2);

    if (element.backgroundColor) {
      ctx.fillStyle = element.backgroundColor;
      ctx.fill();
    }

    ctx.stroke();
  }

  /**
   * Dessine un diamant
   */
  private drawDiamond(x: number, y: number, element: ExcalidrawElement, scale: number): void {
    if (!this.ctx || !element.width || !element.height) return;

    const ctx = this.ctx;
    const width = element.width * scale;
    const height = element.height * scale;

    ctx.beginPath();
    ctx.moveTo(x + width / 2, y);
    ctx.lineTo(x + width, y + height / 2);
    ctx.lineTo(x + width / 2, y + height);
    ctx.lineTo(x, y + height / 2);
    ctx.closePath();

    if (element.backgroundColor) {
      ctx.fillStyle = element.backgroundColor;
      ctx.fill();
    }

    ctx.stroke();
  }

  /**
   * Dessine du texte
   */
  private drawText(x: number, y: number, element: ExcalidrawElement, scale: number): void {
    if (!this.ctx || !element.text) return;

    const ctx = this.ctx;
    const fontSize = (element.fontSize || 14) * scale;
    ctx.font = `${fontSize}px "Virgil", "Segoe UI", sans-serif`;
    ctx.fillStyle = element.strokeColor;
    ctx.textBaseline = 'top';
    ctx.fillText(element.text, x, y);
  }

  /**
   * Dessine une flèche
   */
  private drawArrow(x: number, y: number, element: ExcalidrawElement, scale: number): void {
    if (!this.ctx || !element.points) return;

    const ctx = this.ctx;
    ctx.beginPath();
    ctx.moveTo(x, y);

    element.points.forEach((point) => {
      ctx.lineTo(x + point[0] * scale, y + point[1] * scale);
    });

    ctx.stroke();

    // Dessiner la pointe de flèche
    const lastPoint = element.points[element.points.length - 1];
    const prevPoint = element.points[element.points.length - 2] || [0, 0];
    const angle = Math.atan2(
      (lastPoint[1] - prevPoint[1]) * scale,
      (lastPoint[0] - prevPoint[0]) * scale,
    );

    const arrowSize = 10 * scale;
    ctx.beginPath();
    ctx.moveTo(x + lastPoint[0] * scale, y + lastPoint[1] * scale);
    ctx.lineTo(
      x + lastPoint[0] * scale - arrowSize * Math.cos(angle - Math.PI / 6),
      y + lastPoint[1] * scale - arrowSize * Math.sin(angle - Math.PI / 6),
    );
    ctx.lineTo(
      x + lastPoint[0] * scale - arrowSize * Math.cos(angle + Math.PI / 6),
      y + lastPoint[1] * scale - arrowSize * Math.sin(angle + Math.PI / 6),
    );
    ctx.closePath();
    ctx.fillStyle = element.strokeColor;
    ctx.fill();
  }

  /**
   * Dessine une ligne
   */
  private drawLine(x: number, y: number, element: ExcalidrawElement, scale: number): void {
    if (!this.ctx || !element.points) return;

    const ctx = this.ctx;
    ctx.beginPath();
    ctx.moveTo(x, y);

    element.points.forEach((point) => {
      ctx.lineTo(x + point[0] * scale, y + point[1] * scale);
    });

    ctx.stroke();
  }

  /**
   * Dessine une grille de fond
   */
  private drawGrid(): void {
    if (!this.ctx || !this.canvas) return;

    const ctx = this.ctx;
    const gridSize = 20;

    ctx.save();
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 0.5;

    for (let x = 0; x < this.canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, this.canvas.height);
      ctx.stroke();
    }

    for (let y = 0; y < this.canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(this.canvas.width, y);
      ctx.stroke();
    }

    ctx.restore();
  }

  /**
   * Dessine un label
   */
  private drawLabel(text: string, x: number, y: number): void {
    if (!this.ctx) return;

    const ctx = this.ctx;
    ctx.save();
    ctx.font = 'bold 16px "Virgil", "Segoe UI", sans-serif';
    ctx.fillStyle = '#333';
    ctx.textBaseline = 'bottom';
    ctx.fillText(text, x, y);
    ctx.restore();
  }

  /**
   * Calcule les limites d'un groupe d'éléments
   */
  private calculateBounds(elements: ExcalidrawElement[]): {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
    width: number;
    height: number;
  } {
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    elements.forEach((element) => {
      const elementWidth = element.width || 0;
      const elementHeight = element.height || 0;

      minX = Math.min(minX, element.x);
      minY = Math.min(minY, element.y);
      maxX = Math.max(maxX, element.x + elementWidth);
      maxY = Math.max(maxY, element.y + elementHeight);
    });

    return {
      minX,
      minY,
      maxX,
      maxY,
      width: maxX - minX,
      height: maxY - minY,
    };
  }

  /**
   * Efface le canvas
   */
  clearCanvas(): void {
    if (!this.ctx || !this.canvas) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Fond blanc
    this.ctx.fillStyle = '#ffffff';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  /**
   * Exporte le canvas en PNG
   */
  exportToPNG(): string {
    if (!this.isBrowser || !this.canvas) return '';
    return this.canvas.toDataURL('image/png');
  }
}
