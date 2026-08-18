// keyboard-shortcuts.service.ts - Version corrigée
import { Injectable, NgZone } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KeyboardShortcutsService {
  private shortcuts = new Subject<string>();
  shortcuts$: Observable<string> = this.shortcuts.asObservable();

  constructor(private ngZone: NgZone) {
    console.log('=== KeyboardShortcutsService initialisé ===');
    this.setupListener();
  }

  private setupListener(): void {
    // Utiliser NgZone pour s'assurer que les événements sont détectés
    this.ngZone.runOutsideAngular(() => {
      document.addEventListener('keydown', (event: KeyboardEvent) => {
        // Revenir dans la zone Angular pour émettre l'événement
        this.ngZone.run(() => {
          this.handleKeyDown(event);
        });
      });
    });

    console.log('✅ Écouteur de raccourcis clavier configuré');
  }

  private handleKeyDown(event: KeyboardEvent): void {
    const key = event.key.toLowerCase();
    const ctrl = event.ctrlKey || event.metaKey;
    const shift = event.shiftKey;
    const alt = event.altKey;

    // Ignorer si on tape dans un champ de saisie
    if (this.isTypingInInput(event)) {
      return;
    }

    console.log(
      `⌨️ Touche pressée: ${ctrl ? 'Ctrl+' : ''}${shift ? 'Shift+' : ''}${alt ? 'Alt+' : ''}${key}`,
    );

    // Ctrl/Cmd + G : Générer
    if (ctrl && !shift && key === 'g') {
      event.preventDefault();
      console.log('→ Déclenchement: generate');
      this.shortcuts.next('generate');
      return;
    }

    // Ctrl/Cmd + E : Exporter
    if (ctrl && !shift && key === 'e') {
      event.preventDefault();
      console.log('→ Déclenchement: export');
      this.shortcuts.next('export');
      return;
    }

    // Ctrl/Cmd + S : Sauvegarder
    if (ctrl && !shift && key === 's') {
      event.preventDefault();
      console.log('→ Déclenchement: save');
      this.shortcuts.next('save');
      return;
    }

    // Ctrl/Cmd + P : Exporter en PDF
    if (ctrl && !shift && key === 'p') {
      event.preventDefault();
      console.log('→ Déclenchement: export-pdf');
      this.shortcuts.next('export-pdf');
      return;
    }

    // Ctrl/Cmd + Shift + S : Exporter en SVG
    if (ctrl && shift && key === 's') {
      event.preventDefault();
      console.log('→ Déclenchement: export-svg');
      this.shortcuts.next('export-svg');
      return;
    }

    // Ctrl/Cmd + Shift + C : Copier le lien
    if (ctrl && shift && key === 'c') {
      event.preventDefault();
      console.log('→ Déclenchement: share-link');
      this.shortcuts.next('share-link');
      return;
    }

    // F1 : Documentation
    if (!ctrl && !shift && key === 'f1') {
      event.preventDefault();
      console.log('→ Déclenchement: docs');
      this.shortcuts.next('docs');
      return;
    }
  }

  /**
   * Vérifie si l'utilisateur tape dans un champ de saisie
   */
  private isTypingInInput(event: KeyboardEvent): boolean {
    const target = event.target as HTMLElement;
    const tagName = target.tagName?.toLowerCase();

    const isInput =
      tagName === 'input' ||
      tagName === 'textarea' ||
      tagName === 'select' ||
      target.isContentEditable;

    if (isInput) {
      console.log('⏭️ Ignoré: saisie dans un champ');
    }

    return isInput;
  }
}
