// keyboard-shortcuts.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KeyboardShortcutsService {
  private shortcuts = new Subject<string>();
  shortcuts$ = this.shortcuts.asObservable();

  constructor() {
    this.setupListener();
  }

  private setupListener(): void {
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      // Ctrl/Cmd + G : Générer
      if ((event.ctrlKey || event.metaKey) && event.key === 'g') {
        event.preventDefault();
        this.shortcuts.next('generate');
      }

      // Ctrl/Cmd + E : Exporter
      if ((event.ctrlKey || event.metaKey) && event.key === 'e') {
        event.preventDefault();
        this.shortcuts.next('export');
      }

      // Ctrl/Cmd + S : Sauvegarder
      if ((event.ctrlKey || event.metaKey) && event.key === 's') {
        event.preventDefault();
        this.shortcuts.next('save');
      }
      // Ctrl + P : Exporter en PDF
      if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        event.preventDefault();
        this.shortcuts.next('export-pdf');
      }
      // Ctrl + P : Exporter en PDF
      if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        event.preventDefault();
        this.shortcuts.next('export-pdf');
      }

      // Ajouter dans setupListener()
      // Ctrl + Shift + C : Copier le lien de partage
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'c') {
        event.preventDefault();
        this.shortcuts.next('share-link');
      }
    });
  }
}
