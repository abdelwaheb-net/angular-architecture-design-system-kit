// theme.service.ts - Version corrigée
import { Injectable, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly _theme = signal<ThemeMode>('light');
  readonly theme = this._theme.asReadonly();

  constructor() {
    // Charger le thème sauvegardé
    const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
    if (savedTheme === 'light' || savedTheme === 'dark') {
      this._theme.set(savedTheme);
    }

    // Appliquer le thème initial
    this.applyTheme();

    console.log('Thème initialisé:', this._theme());
  }

  toggleTheme(): void {
    const newTheme = this._theme() === 'light' ? 'dark' : 'light';
    console.log('Basculement du thème:', this._theme(), '->', newTheme);

    this._theme.set(newTheme);
    localStorage.setItem('theme', newTheme);
    this.applyTheme();
  }

  private applyTheme(): void {
    const theme = this._theme();
    console.log('Application du thème:', theme);

    // Supprimer les classes existantes
    document.body.classList.remove('light-theme', 'dark-theme');

    // Ajouter la nouvelle classe
    document.body.classList.add(`${theme}-theme`);

    // Appliquer les styles CSS
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#1e1e1e';
      document.body.style.color = '#ffffff';

      // Appliquer aux éléments Material
      document.documentElement.style.setProperty('--mat-app-background-color', '#1e1e1e');
      document.documentElement.style.setProperty('--mat-app-text-color', '#ffffff');
    } else {
      document.body.style.backgroundColor = '#fafafa';
      document.body.style.color = '#333333';

      document.documentElement.style.setProperty('--mat-app-background-color', '#fafafa');
      document.documentElement.style.setProperty('--mat-app-text-color', '#333333');
    }
  }
}
