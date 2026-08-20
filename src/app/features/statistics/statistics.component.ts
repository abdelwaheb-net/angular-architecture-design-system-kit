// statistics.component.ts - Version corrigée
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { LibraryGeneratorService } from '../../core/services/library-generator.service';
import { TranslatePipe } from "../../shared/pipes/translate.pipe";

// Interface pour les statistiques de catégorie
interface CategoryStat {
  name: string;
  count: number;
  percentage: number;
  color: string;
}

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, TranslatePipe],
  template: `
    <div class="statistics-container">
      <h2>{{ 'STATISTICS.TITLE' | t }}</h2>

      @if (hasLibrary()) {
        <div class="stats-grid">
          <mat-card class="stat-card">
            <mat-card-content>
              <mat-icon>widgets</mat-icon>
              <h3>{{ totalComponents() }}</h3>
              <p>{{ 'STATISTICS.TOTAL_COMPONENTS' | t }}</p>
            </mat-card-content>
          </mat-card>

          <mat-card class="stat-card">
            <mat-card-content>
              <mat-icon>category</mat-icon>
              <h3>{{ totalCategories() }}</h3>
              <p>Catégories</p>
            </mat-card-content>
          </mat-card>

          <mat-card class="stat-card">
            <mat-card-content>
              <mat-icon>graphic_eq</mat-icon>
              <h3>{{ totalElements() }}</h3>
              <p>Éléments graphiques</p>
            </mat-card-content>
          </mat-card>
        </div>

        <h3>{{ 'STATISTICS.BY_CATEGORY' | t }}</h3>
        <div class="category-stats">
          @for (category of getCategoryStats(); track category.name) {
            <mat-card class="category-stat-card">
              <mat-card-content>
                <div class="category-header">
                  <h4>{{ category.name }}</h4>
                  <span class="badge">{{ category.count }}</span>
                </div>

                <div class="progress-bar">
                  <div
                    class="progress-fill"
                    [style.width.%]="category.percentage"
                    [style.background-color]="category.color"
                  ></div>
                </div>

                <p class="percentage">{{ category.percentage.toFixed(1) }}%</p>
              </mat-card-content>
            </mat-card>
          }
        </div>
      } @else {
        <div class="empty-statistics">
          <mat-icon>bar_chart</mat-icon>
          <p>{{ 'STATISTICS.NO_DATA' | t }}</p>
          <p>{{ 'STATISTICS.NO_DATA_DESC' | t }}</p>
        </div>
      }
    </div>
  `,
  styles: [
    `
      .statistics-container {
        padding: 24px;
        max-width: 900px;
        margin: 0 auto;
      }

      h2 {
        color: #333;
        margin-bottom: 24px;
      }

      h3 {
        color: #555;
        margin: 24px 0 16px;
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 16px;
        margin-bottom: 32px;
      }

      .stat-card {
        mat-card-content {
          text-align: center;
          padding: 24px;

          mat-icon {
            font-size: 36px;
            width: 36px;
            height: 36px;
            color: #1976d2;
            margin-bottom: 8px;
          }

          h3 {
            font-size: 2rem;
            margin: 8px 0;
            color: #1976d2;
          }

          p {
            color: #666;
            margin: 0;
          }
        }
      }

      .category-stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 16px;
      }

      .category-stat-card {
        mat-card-content {
          padding: 16px;
        }
      }

      .category-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;

        h4 {
          margin: 0;
          color: #333;
        }

        .badge {
          background: #1976d2;
          color: white;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 500;
        }
      }

      .progress-bar {
        height: 8px;
        background: #f0f0f0;
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 8px;
      }

      .progress-fill {
        height: 100%;
        border-radius: 4px;
        transition: width 0.3s ease;
      }

      .percentage {
        text-align: right;
        color: #666;
        font-size: 0.9rem;
        margin: 0;
      }

      .empty-statistics {
        text-align: center;
        padding: 48px;
        color: #999;

        mat-icon {
          font-size: 48px;
          width: 48px;
          height: 48px;
          margin-bottom: 16px;
        }

        p {
          margin: 8px 0;
          font-size: 1.1rem;
        }
      }
    `,
  ],
})
export class StatisticsComponent {
  constructor(public generatorService: LibraryGeneratorService) {}

  hasLibrary(): boolean {
    const library = this.generatorService.currentLibrary();
    return library !== null && library.libraryItems.length > 0;
  }

  totalComponents(): number {
    const library = this.generatorService.currentLibrary();
    return library ? library.libraryItems.length : 0;
  }

  totalCategories(): number {
    return this.generatorService.categories().length;
  }

  totalElements(): number {
    const library = this.generatorService.currentLibrary();
    if (!library) return 0;
    return library.libraryItems.reduce((sum, item) => sum + item.elements.length, 0);
  }

  getCategoryStats(): CategoryStat[] {
    const library = this.generatorService.currentLibrary();
    if (!library) return [];

    const categoryMap = new Map<string, { count: number; color: string }>();

    // Définir les couleurs par catégorie
    const categoryColors: Record<string, string> = {
      Components: '#DD0031',
      Services: '#43A047',
      Routing: '#2196F3',
      Signals: '#7C4DFF',
      RxJS: '#E91E63',
      'State Management': '#FB8C00',
      'UI Kit': '#00BCD4',
      Architecture: '#607D8B',
      Ecosystem: '#8BC34A',
    };

    // Compter les composants par catégorie
    library.libraryItems.forEach((item) => {
      const category = this.extractCategory(item.id);
      const existing = categoryMap.get(category);

      if (existing) {
        existing.count++;
      } else {
        categoryMap.set(category, {
          count: 1,
          color: categoryColors[category] || '#607D8B',
        });
      }
    });

    // Convertir en tableau de CategoryStat
    const stats: CategoryStat[] = [];
    const total = this.totalComponents();

    categoryMap.forEach((value, name) => {
      stats.push({
        name,
        count: value.count,
        percentage: total > 0 ? (value.count / total) * 100 : 0,
        color: value.color,
      });
    });

    // Trier par nombre décroissant
    stats.sort((a, b) => b.count - a.count);

    console.log('Statistiques par catégorie:', stats);
    return stats;
  }

  /**
   * Extrait la catégorie d'un ID d'item
   * Ex: "components-standalone" -> "Components"
   */
  private extractCategory(itemId: string): string {
    const parts = itemId.split('-');
    const categoryPart = parts[0] || 'other';

    // Convertir en nom lisible
    const categoryMap: Record<string, string> = {
      components: 'Components',
      services: 'Services',
      routing: 'Routing',
      signals: 'Signals',
      rxjs: 'RxJS',
      state: 'State Management',
      ui: 'UI Kit',
      architecture: 'Architecture',
      ecosystem: 'Ecosystem',
    };

    return categoryMap[categoryPart.toLowerCase()] || categoryPart;
  }
}
