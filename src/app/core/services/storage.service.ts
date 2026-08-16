// storage.service.ts
import { Injectable } from '@angular/core';
import { ExcalidrawLibrary } from '../models/excalidraw-element.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly STORAGE_KEY = 'angular-architecture-kit-library';

  constructor() {}

  /**
   * Sauvegarde la bibliothèque dans localStorage
   */
  saveLibrary(library: ExcalidrawLibrary): void {
    try {
      const json = JSON.stringify(library);
      localStorage.setItem(this.STORAGE_KEY, json);
      console.log('✅ Bibliothèque sauvegardée localement');
    } catch (error) {
      console.error('❌ Erreur lors de la sauvegarde:', error);
    }
  }

  /**
   * Charge la bibliothèque depuis localStorage
   */
  loadLibrary(): ExcalidrawLibrary | null {
    try {
      const json = localStorage.getItem(this.STORAGE_KEY);
      if (!json) return null;

      const library = JSON.parse(json) as ExcalidrawLibrary;
      console.log('✅ Bibliothèque chargée depuis le stockage local');
      return library;
    } catch (error) {
      console.error('❌ Erreur lors du chargement:', error);
      return null;
    }
  }

  /**
   * Supprime la bibliothèque du localStorage
   */
  clearLibrary(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    console.log('🗑️ Bibliothèque supprimée du stockage local');
  }

  /**
   * Vérifie si une bibliothèque existe
   */
  hasSavedLibrary(): boolean {
    return localStorage.getItem(this.STORAGE_KEY) !== null;
  }

}
