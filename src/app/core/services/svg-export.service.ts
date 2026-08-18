// src/app/core/services/svg-export.service.ts
import { Injectable } from '@angular/core';
import { ExcalidrawElement, ExcalidrawGroup, ExcalidrawLibrary } from '../models/excalidraw-element.model';

@Injectable({
  providedIn: 'root',
})
export class SvgExportService {
  /**
   * Exporte un groupe en SVG
   */
  private convertGroupToSVG(elements: any[], offsetX: number, offsetY: number): string {
    let svg = '';

    elements.forEach((element) => {
      const x = element.x + offsetX;
      const y = element.y + offsetY;

      switch (element.type) {
        case 'rectangle':
          svg += `<rect x="${x}" y="${y}" width="${element.width}" height="${element.height}"
                        fill="${element.backgroundColor}" stroke="${element.strokeColor}"
                        stroke-width="${element.strokeWidth}" rx="8"/>`;
          break;
        case 'text':
          svg += `<text x="${x}" y="${y + element.fontSize}" font-size="${element.fontSize}"
                        fill="${element.strokeColor}">${element.text}</text>`;
          break;
        case 'ellipse':
          svg += `<ellipse cx="${x + element.width / 2}" cy="${y + element.height / 2}"
                           rx="${element.width / 2}" ry="${element.height / 2}"
                           fill="${element.backgroundColor}" stroke="${element.strokeColor}"/>`;
          break;
      }
    });

    return svg;
  }
  /**
   * Exporte un groupe en SVG
   */
  exportGroupToSVG(group: ExcalidrawGroup): string {
    const elements = group.elements;
    const bounds = this.calculateBounds(elements);

    let svg = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    svg += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${bounds.minX} ${bounds.minY} ${bounds.width} ${bounds.height}" width="${bounds.width}" height="${bounds.height}">\n`;

    // Ajouter un fond blanc
    svg += `  <rect x="${bounds.minX}" y="${bounds.minY}" width="${bounds.width}" height="${bounds.height}" fill="white"/>\n`;

    elements.forEach((element) => {
      svg += this.elementToSVG(element);
    });

    svg += `</svg>`;

    return svg;
  }

  /**
   * Exporte une bibliothèque complète en SVG
   */
  exportLibraryToSVG(library: ExcalidrawLibrary): string {
    const spacing = 50;
    const padding = 20;
    let currentX = padding;
    let currentY = padding;
    let maxHeight = 0;

    // Calculer les positions pour chaque élément
    const positionedElements: { element: ExcalidrawElement; x: number; y: number }[] = [];

    library.libraryItems.forEach((item, index) => {
      const bounds = this.calculateBounds(item.elements);

      // Vérifier si on doit passer à la ligne
      if (currentX + bounds.width > 800) {
        currentX = padding;
        currentY += maxHeight + spacing;
        maxHeight = 0;
      }

      item.elements.forEach((element) => {
        positionedElements.push({
          element,
          x: element.x + currentX - bounds.minX,
          y: element.y + currentY - bounds.minY,
        });
      });

      currentX += bounds.width + spacing;
      maxHeight = Math.max(maxHeight, bounds.height);
    });

    // Calculer les dimensions totales
    const totalWidth = Math.max(800, currentX + padding);
    const totalHeight = currentY + maxHeight + padding;

    let svg = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    svg += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalWidth} ${totalHeight}" width="${totalWidth}" height="${totalHeight}">\n`;

    // Fond blanc
    svg += `  <rect x="0" y="0" width="${totalWidth}" height="${totalHeight}" fill="white"/>\n`;

    // Dessiner chaque élément
    positionedElements.forEach(({ element, x, y }) => {
      const elementCopy = { ...element, x, y };
      svg += this.elementToSVG(elementCopy);
    });

    svg += `</svg>`;

    return svg;
  }

  /**
   * Convertit un élément en SVG
   */
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
      case 'line':
        return this.lineToSVG(element);
      default:
        return '';
    }
  }

  /**
   * Convertit un rectangle en SVG
   */
  private rectangleToSVG(element: ExcalidrawElement): string {
    const x = element.x;
    const y = element.y;
    const width = element.width || 0;
    const height = element.height || 0;
    const rx = element.roundness?.value || 0;
    const fill = element.backgroundColor || 'transparent';
    const stroke = element.strokeColor;
    const strokeWidth = element.strokeWidth || 2;
    const strokeDasharray =
      element.strokeStyle === 'dashed' ? '5,5' : element.strokeStyle === 'dotted' ? '2,2' : '';

    return `  <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}"${strokeDasharray ? ` stroke-dasharray="${strokeDasharray}"` : ''}/>\n`;
  }

  /**
   * Convertit un texte en SVG
   */
  private textToSVG(element: ExcalidrawElement): string {
    const x = element.x;
    const y = element.y;
    const fontSize = element.fontSize || 20;
    const text = this.escapeXML(element.text || '');
    const fill = element.strokeColor;
    const textAnchor =
      element.textAlign === 'center' ? 'middle' : element.textAlign === 'right' ? 'end' : 'start';

    return `  <text x="${x}" y="${y + fontSize}" font-size="${fontSize}" fill="${fill}" text-anchor="${textAnchor}" font-family="Virgil, sans-serif">${text}</text>\n`;
  }

  /**
   * Convertit une ellipse en SVG
   */
  private ellipseToSVG(element: ExcalidrawElement): string {
    const cx = element.x + (element.width || 0) / 2;
    const cy = element.y + (element.height || 0) / 2;
    const rx = (element.width || 0) / 2;
    const ry = (element.height || 0) / 2;
    const fill = element.backgroundColor || 'transparent';
    const stroke = element.strokeColor;
    const strokeWidth = element.strokeWidth || 2;

    return `  <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}"/>\n`;
  }

  /**
   * Convertit un diamant en SVG
   */
  private diamondToSVG(element: ExcalidrawElement): string {
    const x = element.x;
    const y = element.y;
    const width = element.width || 0;
    const height = element.height || 0;
    const fill = element.backgroundColor || 'transparent';
    const stroke = element.strokeColor;
    const strokeWidth = element.strokeWidth || 2;

    const points = `${x + width / 2},${y} ${x + width},${y + height / 2} ${x + width / 2},${y + height} ${x},${y + height / 2}`;

    return `  <polygon points="${points}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}"/>\n`;
  }

  /**
   * Convertit une flèche en SVG
   */
  private arrowToSVG(element: ExcalidrawElement): string {
    if (!element.points || element.points.length < 2) return '';

    const x = element.x;
    const y = element.y;
    const stroke = element.strokeColor;
    const strokeWidth = element.strokeWidth || 2;

    let path = `M ${x} ${y}`;

    element.points.forEach((point) => {
      path += ` L ${x + point[0]} ${y + point[1]}`;
    });

    // Ajouter la pointe de flèche
    const lastPoint = element.points[element.points.length - 1];
    const prevPoint = element.points[element.points.length - 2] || [0, 0];
    const angle = Math.atan2(lastPoint[1] - prevPoint[1], lastPoint[0] - prevPoint[0]);

    const arrowSize = 10;
    const arrowX = x + lastPoint[0];
    const arrowY = y + lastPoint[1];

    const arrowPath = ` M ${arrowX} ${arrowY} L ${arrowX - arrowSize * Math.cos(angle - Math.PI / 6)} ${arrowY - arrowSize * Math.sin(angle - Math.PI / 6)} L ${arrowX - arrowSize * Math.cos(angle + Math.PI / 6)} ${arrowY - arrowSize * Math.sin(angle + Math.PI / 6)} Z`;

    return `  <path d="${path}" stroke="${stroke}" stroke-width="${strokeWidth}" fill="none"/>\n  <path d="${arrowPath}" fill="${stroke}"/>\n`;
  }

  /**
   * Convertit une ligne en SVG
   */
  private lineToSVG(element: ExcalidrawElement): string {
    if (!element.points || element.points.length < 2) return '';

    const x = element.x;
    const y = element.y;
    const stroke = element.strokeColor;
    const strokeWidth = element.strokeWidth || 2;

    let path = `M ${x} ${y}`;

    element.points.forEach((point) => {
      path += ` L ${x + point[0]} ${y + point[1]}`;
    });

    return `  <path d="${path}" stroke="${stroke}" stroke-width="${strokeWidth}" fill="none"/>\n`;
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
   * Échappe les caractères XML
   */
  private escapeXML(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }

  /**
   * Télécharge le SVG
   */
  downloadSVG(svgContent: string, filename: string): void {
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }
}
