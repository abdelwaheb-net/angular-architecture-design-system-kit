// share.service.ts - Service de partage en ligne
import { Injectable } from '@angular/core';
import { ExcalidrawLibrary } from '../models/excalidraw-element.model';

@Injectable({
  providedIn: 'root',
})
export class ShareService {
  constructor() {}

  /**
   * Génère un lien de partage encodé en base64
   */
  generateShareLink(library: ExcalidrawLibrary): string {
    const json = JSON.stringify(library);
    const encoded = btoa(encodeURIComponent(json));
    const baseUrl = window.location.origin + window.location.pathname;
    return `${baseUrl}?share=${encoded}`;
  }

  /**
   * Génère un lien court (simulation)
   */
  generateShortLink(library: ExcalidrawLibrary): string {
    // Simuler un lien court avec un hash
    const json = JSON.stringify(library);
    const hash = this.generateHash(json);
    return `https://share.angular-kit.com/${hash}`;
  }

  /**
   * Décode un lien de partage
   */
  decodeShareLink(encoded: string): ExcalidrawLibrary | null {
    try {
      const json = decodeURIComponent(atob(encoded));
      const library = JSON.parse(json) as ExcalidrawLibrary;

      // Valider la structure
      if (library.type !== 'excalidrawlib' || !Array.isArray(library.libraryItems)) {
        throw new Error('Format de bibliothèque invalide');
      }

      return library;
    } catch (error) {
      console.error('❌ Erreur de décodage:', error);
      return null;
    }
  }

  /**
   * Charge une bibliothèque depuis l'URL
   */
  loadFromUrl(): ExcalidrawLibrary | null {
    const urlParams = new URLSearchParams(window.location.search);
    const shareParam = urlParams.get('share');

    if (!shareParam) {
      return null;
    }

    return this.decodeShareLink(shareParam);
  }

  /**
   * Copie le lien dans le presse-papier
   */
  async copyShareLink(library: ExcalidrawLibrary): Promise<string> {
    const link = this.generateShareLink(library);

    try {
      await navigator.clipboard.writeText(link);
      console.log('✅ Lien copié dans le presse-papier');
      return link;
    } catch (error) {
      console.error('❌ Erreur lors de la copie:', error);

      // Fallback pour les navigateurs sans API clipboard
      const textarea = document.createElement('textarea');
      textarea.value = link;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);

      return link;
    }
  }

  /**
   * Partage via l'API Web Share (si disponible)
   */
  async shareViaWebShare(library: ExcalidrawLibrary): Promise<boolean> {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Angular Architecture Kit',
          text: 'Ma bibliothèque de composants Angular',
          url: this.generateShareLink(library),
        });
        console.log('✅ Partage réussi');
        return true;
      } catch (error) {
        console.error('❌ Erreur de partage:', error);
        return false;
      }
    } else {
      console.warn('⚠️ Web Share API non supportée');
      return false;
    }
  }

  /**
   * Partage par email
   */
  shareByEmail(library: ExcalidrawLibrary): void {
    const subject = encodeURIComponent('Angular Architecture Kit - Bibliothèque');
    const body = encodeURIComponent(
      `Voici ma bibliothèque de composants Angular :\n\n${this.generateShareLink(library)}`,
    );

    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }

  /**
   * Partage sur Twitter
   */
  shareOnTwitter(library: ExcalidrawLibrary): void {
    const text = encodeURIComponent('Ma bibliothèque Angular Architecture Kit');
    const url = encodeURIComponent(this.generateShareLink(library));

    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      '_blank',
      'width=600,height=400',
    );
  }

  /**
   * Partage sur LinkedIn
   */
  shareOnLinkedIn(library: ExcalidrawLibrary): void {
    const url = encodeURIComponent(this.generateShareLink(library));

    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      '_blank',
      'width=600,height=400',
    );
  }

  /**
   * Génère un hash simple pour les liens courts
   */
  private generateHash(input: string): string {
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
      const char = input.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convertir en 32bit integer
    }

    // Convertir en base64
    return Math.abs(hash).toString(36);
  }

  /**
   * Sauvegarde dans le stockage cloud (simulation)
   */
  saveToCloud(library: ExcalidrawLibrary): Promise<string> {
    return new Promise((resolve) => {
      // Simuler un délai réseau
      setTimeout(() => {
        const id = this.generateHash(JSON.stringify(library));
        const shareUrl = `https://cloud.angular-kit.com/${id}`;

        console.log('✅ Bibliothèque sauvegardée dans le cloud');
        resolve(shareUrl);
      }, 1500);
    });
  }
}
