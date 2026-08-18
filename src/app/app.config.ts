// app.config.ts - Version corrigée
import { provideHttpClient, withFetch } from '@angular/common/http'; // Ajouter withFetch
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    provideHttpClient(withFetch()), // Ajouter withFetch ici
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
};
