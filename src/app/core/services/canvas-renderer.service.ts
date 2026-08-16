// canvas-renderer.service.ts - Version compatible SSR
import { isPlatformBrowser } from '@angular/common';
import { ElementRef, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ExcalidrawElement, ExcalidrawGroup } from '../models/excalidraw-element.model';

@Injectable({
  providedIn: 'root',
})
export class CanvasRendererService {
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private scale = 1;
  private offsetX = 0;
  private offsetY = 0;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  /**
   * Initialise le canvas
   */
  initializeCanvas(canvasRef: ElementRef<HTMLCanvasElement>): void {
    // Vérifier si on est dans un navigateur
    if (!this.isBrowser) {
      console.warn('Canvas non disponible côté serveur');
      return;
    }

    this.canvas = canvasRef.nativeElement;
    const context = this.canvas.getContext('2d');

    if (!context) {
      console.error("Impossible d'obtenir le contexte 2D du canvas");
      return;
    }

    this.ctx = context;
    this.resizeCanvas();
  }

  /**
   * Redimensionne le canvas
   */
  private resizeCanvas(): void {
    if (!this.isBrowser || !this.canvas) return;

    const rect = this.canvas.parentElement?.getBoundingClientRect();
    if (rect) {
      this.canvas.width = rect.width;
      this.canvas.height = rect.height;
    }
  }

  /**
   * Rend un groupe Excalidraw
   */
  renderGroup(group: ExcalidrawGroup): void {
    if (!this.isBrowser || !this.ctx) return;

    this.clearCanvas();
    this.drawGrid();

    const elements = group.elements;
    const bounds = this.calculateBounds(elements);

    // Centrer le groupe
    this.offsetX = (this.canvas.width - bounds.width) / 2 - bounds.minX;
    this.offsetY = (this.canvas.height - bounds.height) / 2 - bounds.minY;

    // Dessiner chaque élément
    elements.forEach((element) => {
      this.drawElement(element);
    });
  }

  /**
   * Rend une bibliothèque complète
   */
  renderLibrary(groups: ExcalidrawGroup[]): void {
    if (!this.isBrowser || !this.ctx) return;

    this.clearCanvas();
    this.drawGrid();

    const spacing = 50;
    let currentY = 50;
    let currentX = 50;
    const maxWidth = this.canvas.width - 100;

    groups.forEach((group) => {
      const bounds = this.calculateBounds(group.elements);

      // Vérifier si on doit passer à la ligne
      if (currentX + bounds.width > maxWidth) {
        currentX = 50;
        currentY += bounds.height + spacing;
      }

      this.offsetX = currentX - bounds.minX;
      this.offsetY = currentY - bounds.minY;

      // Dessiner le groupe
      group.elements.forEach((element) => {
        this.drawElement(element);
      });

      // Dessiner le nom du groupe
      this.drawLabel(group.name, currentX, currentY - 20);

      currentX += bounds.width + spacing;
    });
  }

  /**
   * Dessine un élément Excalidraw
   */
  private drawElement(element: ExcalidrawElement): void {
    if (!this.isBrowser || !this.ctx) return;

    const ctx = this.ctx;
    const x = element.x + this.offsetX;
    const y = element.y + this.offsetY;

    ctx.save();
    ctx.strokeStyle = element.strokeColor;
    ctx.lineWidth = element.strokeWidth;
    ctx.globalAlpha = (element.opacity || 100) / 100;

    if (element.strokeStyle === 'dashed') {
      ctx.setLineDash([5, 5]);
    } else if (element.strokeStyle === 'dotted') {
      ctx.setLineDash([2, 2]);
    }

    switch (element.type) {
      case 'rectangle':
        this.drawRectangle(x, y, element);
        break;
      case 'ellipse':
        this.drawEllipse(x, y, element);
        break;
      case 'diamond':
        this.drawDiamond(x, y, element);
        break;
      case 'text':
        this.drawText(x, y, element);
        break;
      case 'arrow':
        this.drawArrow(x, y, element);
        break;
      case 'line':
        this.drawLine(x, y, element);
        break;
    }

    ctx.restore();
  }

  /**
   * Dessine un rectangle
   */
  private drawRectangle(x: number, y: number, element: ExcalidrawElement): void {
    if (!this.isBrowser || !this.ctx || !element.width || !element.height) return;

    const ctx = this.ctx;
    const radius = element.roundness?.value || 0;

    ctx.beginPath();

    if (radius > 0) {
      this.roundRect(ctx, x, y, element.width, element.height, radius);
    } else {
      ctx.rect(x, y, element.width, element.height);
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
  private drawEllipse(x: number, y: number, element: ExcalidrawElement): void {
    if (!this.isBrowser || !this.ctx || !element.width || !element.height) return;

    const ctx = this.ctx;
    ctx.beginPath();
    ctx.ellipse(
      x + element.width / 2,
      y + element.height / 2,
      element.width / 2,
      element.height / 2,
      0,
      0,
      Math.PI * 2,
    );

    if (element.backgroundColor) {
      ctx.fillStyle = element.backgroundColor;
      ctx.fill();
    }

    ctx.stroke();
  }

  /**
   * Dessine un diamant
   */
  private drawDiamond(x: number, y: number, element: ExcalidrawElement): void {
    if (!this.isBrowser || !this.ctx || !element.width || !element.height) return;

    const ctx = this.ctx;
    ctx.beginPath();
    ctx.moveTo(x + element.width / 2, y);
    ctx.lineTo(x + element.width, y + element.height / 2);
    ctx.lineTo(x + element.width / 2, y + element.height);
    ctx.lineTo(x, y + element.height / 2);
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
  private drawText(x: number, y: number, element: ExcalidrawElement): void {
    if (!this.isBrowser || !this.ctx || !element.text) return;

    const ctx = this.ctx;
    ctx.font = `${element.fontSize || 14}px "Virgil", "Segoe UI", sans-serif`;
    ctx.fillStyle = element.strokeColor;
    ctx.textBaseline = 'top';
    ctx.fillText(element.text, x, y);
  }

  /**
   * Dessine une flèche
   */
  private drawArrow(x: number, y: number, element: ExcalidrawElement): void {
    if (!this.isBrowser || !this.ctx || !element.points) return;

    const ctx = this.ctx;
    ctx.beginPath();
    ctx.moveTo(x, y);

    element.points.forEach((point) => {
      ctx.lineTo(x + point[0], y + point[1]);
    });

    ctx.stroke();

    // Dessiner la pointe de flèche
    const lastPoint = element.points[element.points.length - 1];
    const prevPoint = element.points[element.points.length - 2] || [x, y];
    const angle = Math.atan2(
      y + lastPoint[1] - (y + prevPoint[1]),
      x + lastPoint[0] - (x + prevPoint[0]),
    );

    const arrowSize = 10;
    ctx.beginPath();
    ctx.moveTo(x + lastPoint[0], y + lastPoint[1]);
    ctx.lineTo(
      x + lastPoint[0] - arrowSize * Math.cos(angle - Math.PI / 6),
      y + lastPoint[1] - arrowSize * Math.sin(angle - Math.PI / 6),
    );
    ctx.lineTo(
      x + lastPoint[0] - arrowSize * Math.cos(angle + Math.PI / 6),
      y + lastPoint[1] - arrowSize * Math.sin(angle + Math.PI / 6),
    );
    ctx.closePath();
    ctx.fillStyle = element.strokeColor;
    ctx.fill();
  }

  /**
   * Dessine une ligne
   */
  private drawLine(x: number, y: number, element: ExcalidrawElement): void {
    if (!this.isBrowser || !this.ctx || !element.points) return;

    const ctx = this.ctx;
    ctx.beginPath();
    ctx.moveTo(x, y);

    element.points.forEach((point) => {
      ctx.lineTo(x + point[0], y + point[1]);
    });

    ctx.stroke();
  }

  /**
   * Dessine une grille de fond
   */
  private drawGrid(): void {
    if (!this.isBrowser || !this.ctx) return;

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
    if (!this.isBrowser || !this.ctx) return;

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
      minX = Math.min(minX, element.x);
      minY = Math.min(minY, element.y);
      maxX = Math.max(maxX, element.x + (element.width || 0));
      maxY = Math.max(maxY, element.y + (element.height || 0));
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
    if (!this.isBrowser || !this.ctx || !this.canvas) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
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

  /**
   * Exporte le canvas en SVG
   */
  exportToSVG(): string {
    if (!this.isBrowser || !this.canvas) return '';

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', this.canvas.width.toString());
    svg.setAttribute('height', this.canvas.height.toString());

    // Ici, vous pouvez implémenter l'export SVG complet
    return new XMLSerializer().serializeToString(svg);
  }
}
