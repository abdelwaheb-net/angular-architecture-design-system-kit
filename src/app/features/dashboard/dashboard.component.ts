// src/app/features/dashboard/dashboard.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { LibraryGeneratorService } from '../../core/services/library-generator.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  template: `
    <div class="dashboard">
      <h2>📊 Tableau de bord</h2>

      <div class="dashboard-grid">
        <!-- Carte de statistiques -->
        <mat-card class="dashboard-card" (click)="goToStatistics()">
          <mat-icon>bar_chart</mat-icon>
          <h3>Statistiques</h3>
          <p>Visualisez vos données</p>
        </mat-card>

        <!-- Carte de génération -->
        <mat-card class="dashboard-card" (click)="goToComponents()">
          <mat-icon>widgets</mat-icon>
          <h3>Composants</h3>
          <p>Générez des composants</p>
        </mat-card>

        <!-- Carte de templates -->
        <mat-card class="dashboard-card" (click)="goToTemplates()">
          <mat-icon>dashboard</mat-icon>
          <h3>Templates</h3>
          <p>Architectures prédéfinies</p>
        </mat-card>

        <!-- Carte d'export -->
        <mat-card class="dashboard-card" (click)="goToExport()">
          <mat-icon>download</mat-icon>
          <h3>Export</h3>
          <p>Multi-formats</p>
        </mat-card>
      </div>
    </div>
  `,
})
export class DashboardComponent {
  constructor(public generatorService: LibraryGeneratorService) {}

  goToStatistics() {
    /* Navigation */
  }
  goToComponents() {
    /* Navigation */
  }
  goToTemplates() {
    /* Navigation */
  }
  goToExport() {
    /* Navigation */
  }
}
