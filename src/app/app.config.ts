// app.config.ts - Version corrigée
import { provideHttpClient, withFetch } from '@angular/common/http'; // Ajouter withFetch
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    provideHttpClient(withFetch()), // Ajouter withFetch ici
  ],
};
