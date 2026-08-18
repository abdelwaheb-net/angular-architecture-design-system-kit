// src/app/core/services/svg-export.service.ts
import { Injectable } from '@angular/core';
import { ExcalidrawElement, ExcalidrawGroup } from '../models/excalidraw-element.model';

@Injectable({
  providedIn: 'root',
})
export class SvgExportService {
  /**
   * Exporte un groupe en SVG
   */
  exportGroupToSVG(group: ExcalidrawGroup): string {
    const elements = group.elements;
    const bounds = this.calculateBounds(elements);

    let svg = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    svg += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${bounds.minX} ${bounds.minY} ${bounds.width} ${bounds.height}" width="${bounds.width}" height="${bounds.height}">\n`;

    elements.forEach((element) => {
      svg += this.elementToSVG(element);
    });

    svg += `</svg>`;

    return svg;
  }

  private elementToSVG(element: ExcalidrawElement): string {
    switch (element.type) {
      case 'rectangle':
        return this.rectangleToSVG(element);
      case 'text':
        return this.textToSVG(element);
      case 'ellipse':
        return this.ellipseToSVG(element);
      case 'diamond':
        return this.diamondToSVG(element);
      case 'arrow':
        return this.arrowToSVG(element);
      default:
        return '';
    }
  }

  private rectangleToSVG(element: ExcalidrawElement): string {
    const x = element.x;
    const y = element.y;
    const width = element.width || 0;
    const height = element.height || 0;
    const rx = element.roundness?.value || 0;

    return `  <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${rx}" fill="${element.backgroundColor}" stroke="${element.strokeColor}" stroke-width="${element.strokeWidth}"/>\n`;
  }

  private textToSVG(element: ExcalidrawElement): string {
    const x = element.x;
    const y = element.y;
    const fontSize = element.fontSize || 20;
    const text = this.escapeXML(element.text || '');

    return `  <text x="${x}" y="${y + fontSize}" font-size="${fontSize}" fill="${element.strokeColor}">${text}</text>\n`;
  }

  private ellipseToSVG(element: ExcalidrawElement): string {
    const cx = element.x + (element.width || 0) / 2;
    const cy = element.y + (element.height || 0) / 2;
    const rx = (element.width || 0) / 2;
    const ry = (element.height || 0) / 2;

    return `  <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${element.backgroundColor}" stroke="${element.strokeColor}" stroke-width="${element.strokeWidth}"/>\n`;
  }

  private diamondToSVG(element: ExcalidrawElement): string {
    const x = element.x;
    const y = element.y;
    const width = element.width || 0;
    const height = element.height || 0;

    const points = `${x + width / 2},${y} ${x + width},${y + height / 2} ${x + width / 2},${y + height} ${x},${y + height / 2}`;

    return `  <polygon points="${points}" fill="${element.backgroundColor}" stroke="${element.strokeColor}" stroke-width="${element.strokeWidth}"/>\n`;
  }

  private arrowToSVG(element: ExcalidrawElement): string {
    if (!element.points || element.points.length < 2) return '';

    const x = element.x;
    const y = element.y;
    let path = `M ${x} ${y}`;

    element.points.forEach((point) => {
      path += ` L ${x + point[0]} ${y + point[1]}`;
    });

    return `  <path d="${path}" stroke="${element.strokeColor}" stroke-width="${element.strokeWidth}" fill="none"/>\n`;
  }

  private escapeXML(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }

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
}
