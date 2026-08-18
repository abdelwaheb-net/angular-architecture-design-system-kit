// main.ts - Version corrigée
import { provideZoneChangeDetection, isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app';
import { provideServiceWorker } from '@angular/service-worker'; // Corriger l'import

bootstrapApplication(AppComponent, {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideAnimations(), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          })],
}).catch((err) => console.error(err));
