// pdf-export.service.ts - Service d'export PDF
import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ExcalidrawLibrary } from '../models/excalidraw-element.model';

@Injectable({
  providedIn: 'root',
})
export class PdfExportService {
  constructor() {}

  /**
   * Exporte un élément HTML en PDF
   */
  async exportElementToPDF(elementId: string, filename: string): Promise<void> {
    console.log('=== Export PDF ===');
    console.log('Element ID:', elementId);

    const element = document.getElementById(elementId);
    if (!element) {
      console.error('Élément non trouvé:', elementId);
      throw new Error('Élément non trouvé');
    }

    try {
      // Capturer l'élément en canvas
      const canvas = await html2canvas(element, {
        scale: 2,
        backgroundColor: '#ffffff',
        allowTaint: true,
        useCORS: true,
      });

      console.log('Canvas créé:', canvas.width, 'x', canvas.height);

      const imgData = canvas.toDataURL('image/png');

      // Créer le PDF
      const pdf = new jsPDF({
        orientation: canvas.width > canvas.height ? 'landscape' : 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height],
      });

      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save(filename);

      console.log('✅ PDF exporté:', filename);
    } catch (error) {
      console.error("❌ Erreur lors de l'export PDF:", error);
      throw error;
    }
  }

  /**
   * Exporte le canvas de prévisualisation en PDF
   */
  async exportCanvasToPDF(canvasId: string, filename: string): Promise<void> {
    console.log('=== Export Canvas PDF ===');

    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) {
      console.error('Canvas non trouvé:', canvasId);
      throw new Error('Canvas non trouvé');
    }

    try {
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF({
        orientation: canvas.width > canvas.height ? 'landscape' : 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height],
      });

      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save(filename);

      console.log('✅ PDF exporté:', filename);
    } catch (error) {
      console.error("❌ Erreur lors de l'export PDF:", error);
      throw error;
    }
  }

  /**
   * Génère un PDF avec plusieurs pages pour une bibliothèque complète
   */
  async exportLibraryToPDF(library: ExcalidrawLibrary, filename: string): Promise<void> {
    console.log('=== Export Bibliothèque PDF ===');
    console.log('Items:', library.libraryItems.length);

    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: 'a4',
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    library.libraryItems.forEach((item, index) => {
      if (index > 0) {
        pdf.addPage();
      }

      // Titre de la page
      pdf.setFontSize(16);
      pdf.text(`Composant: ${item.id}`, 20, 20);

      // Détails
      pdf.setFontSize(10);
      pdf.text(`Éléments: ${item.elements.length}`, 20, 30);
      pdf.text(`Créé le: ${new Date(item.created).toLocaleDateString()}`, 20, 40);

      // Dessiner les éléments (version simplifiée)
      item.elements.forEach((element, elementIndex) => {
        const y = 60 + elementIndex * 30;

        pdf.setFontSize(8);

        switch (element.type) {
          case 'rectangle':
            pdf.rect(element.x / 2, y, (element.width || 100) / 2, (element.height || 50) / 2);
            break;
          case 'text':
            pdf.text(element.text || '', element.x / 2, y);
            break;
          case 'ellipse':
            pdf.ellipse(
              element.x / 2 + (element.width || 100) / 4,
              y + (element.height || 50) / 4,
              (element.width || 100) / 4,
              (element.height || 50) / 4,
            );
            break;
        }
      });
    });

    pdf.save(filename);
    console.log('✅ PDF bibliothèque exporté:', filename);
  }
}
