// src/app/core/services/excalidraw-import.service.ts
import { Injectable } from '@angular/core';
import { ExcalidrawLibrary } from '../models/excalidraw-element.model';

@Injectable({
  providedIn: 'root',
})
export class ExcalidrawImportService {
  /**
   * Importe depuis le presse-papier d'Excalidraw
   */
  async importFromClipboard(): Promise<ExcalidrawLibrary | null> {
    try {
      const text = await navigator.clipboard.readText();
      const data = JSON.parse(text);

      if (data.type === 'excalidrawlib') {
        return data as ExcalidrawLibrary;
      }

      return null;
    } catch (error) {
      console.error('Erreur import:', error);
      return null;
    }
  }
}
