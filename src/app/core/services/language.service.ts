// language.service.ts - Service personnalisé
import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

export type Language = 'en' | 'fr';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly _currentLanguage = signal<Language>('en');
  private readonly _translations = signal<any>({});

  readonly currentLanguage = this._currentLanguage.asReadonly();
  readonly translations = this._translations.asReadonly();

  constructor(private http: HttpClient) {
    console.log('=== LanguageService initialisé ===');
    const savedLanguage = localStorage.getItem('language') as Language;
    this.loadTranslations(savedLanguage || 'en');
  }

  private loadTranslations(language: Language): void {
    console.log(`🌍 Chargement des traductions: ${language}`);

    this.http.get(`assets/i18n/${language}.json`).subscribe({
      next: (translations) => {
        this._translations.set(translations);
        this._currentLanguage.set(language);
        localStorage.setItem('language', language);
        console.log(`✅ Traductions chargées: ${language}`);
      },
      error: (error) => {
        console.error(`❌ Erreur de chargement:`, error);
        if (language !== 'en') {
          this.loadTranslations('en');
        }
      },
    });
  }

  setLanguage(language: Language): void {
    this.loadTranslations(language);
  }

  toggleLanguage(): void {
    const newLanguage = this._currentLanguage() === 'en' ? 'fr' : 'en';
    this.setLanguage(newLanguage);
  }

  translate(key: string): string {
    const translations = this._translations();
    const keys = key.split('.');
    let value: any = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  }

  translateWithParams(key: string, params: Record<string, string>): string {
    let translated = this.translate(key);
    Object.keys(params).forEach((param) => {
      translated = translated.replace(`{{${param}}}`, params[param]);
    });
    return translated;
  }
}
