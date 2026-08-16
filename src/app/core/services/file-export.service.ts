// file-export.service.ts
import { Injectable } from '@angular/core';
import { ExcalidrawLibrary } from '../models/excalidraw-element.model';

@Injectable({
  providedIn: 'root',
})
export class FileExportService {
  constructor() {}

  /**
   * Exporte la bibliothèque en fichier JSON
   */
  exportToJSON(library: ExcalidrawLibrary, filename: string): void {
    const json = JSON.stringify(library, null, 2);
    this.downloadFile(json, filename, 'application/json');
  }

  /**
   * Exporte en format texte
   */
  exportToText(library: ExcalidrawLibrary, filename: string): void {
    const text = this.convertLibraryToText(library);
    this.downloadFile(text, filename, 'text/plain');
  }

  /**
   * Exporte en CSV (pour analyse)
   */
  exportToCSV(library: ExcalidrawLibrary, filename: string): void {
    const csv = this.convertLibraryToCSV(library);
    this.downloadFile(csv, filename, 'text/csv');
  }

  /**
   * Importe depuis un fichier JSON
   */
  importFromJSON(file: File): Promise<ExcalidrawLibrary> {
    return this.readFile(file).then((content) => {
      const library = JSON.parse(content) as ExcalidrawLibrary;
      this.validateLibrary(library);
      return library;
    });
  }

  /**
   * Lit un fichier
   */
  private readFile(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target?.result as string);
      reader.onerror = (e) => reject(e);
      reader.readAsText(file);
    });
  }

  /**
   * Valide la structure d'une bibliothèque
   */
  private validateLibrary(library: ExcalidrawLibrary): void {
    if (!library || typeof library !== 'object') {
      throw new Error('Bibliothèque invalide');
    }
    if (library.type !== 'excalidrawlib') {
      throw new Error('Type de bibliothèque invalide');
    }
    if (!Array.isArray(library.libraryItems)) {
      throw new Error('Items de bibliothèque invalides');
    }
  }

  /**
   * Télécharge un fichier
   */
  private downloadFile(content: string, filename: string, contentType: string): void {
    const blob = new Blob([content], { type: contentType });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  /**
   * Convertit la bibliothèque en texte lisible
   */
  private convertLibraryToText(library: ExcalidrawLibrary): string {
    let text = 'Angular Architecture Kit - Bibliothèque\n';
    text += '=====================================\n\n';

    library.libraryItems.forEach((item, index) => {
      text += `${index + 1}. ${item.id}\n`;
      text += `   Éléments: ${item.elements.length}\n`;
      text += `   Créé le: ${new Date(item.created).toLocaleDateString()}\n\n`;
    });

    return text;
  }

  /**
   * Convertit la bibliothèque en CSV
   */
  private convertLibraryToCSV(library: ExcalidrawLibrary): string {
    let csv = 'ID,Éléments,Statut,Date de création\n';

    library.libraryItems.forEach((item) => {
      csv += `${item.id},${item.elements.length},${item.status},${new Date(item.created).toISOString()}\n`;
    });

    return csv;
  }
}
