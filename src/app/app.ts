// app.component.ts - Version complète et corrigée
import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatOptionModule } from '@angular/material/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ARCHITECTURE_TEMPLATES, ArchitectureTemplate } from './core/constants/templates.constants';
import {
  COMPONENT_CATALOG,
  ComponentCategory,
  ComponentType,
  getComponentCategory,
  getComponentDescription,
  getComponentIcon,
} from './core/models/component-types.enum';
import {
  ExcalidrawGroup,
  ExcalidrawLibrary
} from './core/models/excalidraw-element.model';
import { FileExportService } from './core/services/file-export.service';
import { LibraryGeneratorService } from './core/services/library-generator.service';
import { StorageService } from './core/services/storage.service';
import { ExportDialogComponent } from './features/export/components/export-dialog/export-dialog.component';
import { ExcalidrawPreviewComponent } from './shared/components/excalidraw-preview/excalidraw-preview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    MatMenuModule,
    MatBadgeModule,
    MatTooltipModule,
    ExcalidrawPreviewComponent,
  ],
  template: `
    <div class="app-container">
      <!-- Toolbar principale -->
      <mat-toolbar color="primary">
        <span class="logo">🚀 Angular Architecture Kit</span>
        <span class="spacer"></span>

        <!-- Menu Templates -->
        <button
          mat-button
          [matMenuTriggerFor]="templatesMenu"
          matTooltip="Templates d'architecture"
        >
          <mat-icon>dashboard</mat-icon>
          Templates
        </button>
        <mat-menu #templatesMenu="matMenu">
          @for (template of architectureTemplates; track template.id) {
            <button mat-menu-item (click)="generateTemplate(template)">
              <mat-icon>{{ template.icon }}</mat-icon>
              <span>{{ template.name }}</span>
            </button>
          }
        </mat-menu>

        <!-- Bouton Import -->
        <button mat-icon-button matTooltip="Importer" (click)="importLibrary()">
          <mat-icon>upload</mat-icon>
        </button>
        <input
          type="file"
          #fileInput
          hidden
          accept=".json,.excalidrawlib"
          (change)="onFileSelected($event)"
        />

        <!-- Bouton Export -->
        <button
          mat-icon-button
          matTooltip="Exporter"
          (click)="openExportDialog()"
          [disabled]="!generatorService.currentLibrary()"
        >
          <mat-icon>download</mat-icon>
        </button>

        <!-- Bouton Générer -->
        <button
          mat-raised-button
          (click)="generateLibrary()"
          [disabled]="generatorService.isGenerating()"
        >
          <mat-icon>refresh</mat-icon>
          @if (generatorService.isGenerating()) {
            Génération...
          } @else {
            Générer
          }
        </button>

        <!-- Bouton Générer tout -->
        <button
          mat-raised-button
          (click)="generateFullLibrary()"
          [disabled]="generatorService.isGenerating()"
        >
          <mat-icon>auto_awesome</mat-icon> Générer tout
        </button>
      </mat-toolbar>

      <!-- Contenu principal -->
      <main class="content">
        @if (generatorService.isGenerating()) {
          <div class="loading-container">
            <mat-spinner></mat-spinner>
            <p>Génération de la bibliothèque...</p>
          </div>
        } @else {
          <mat-tab-group>
            <!-- Onglet Composants -->
            <mat-tab label="Composants">
              <div class="component-header">
                <mat-form-field appearance="outline" class="search-field">
                  <mat-label>Rechercher un composant</mat-label>
                  <input
                    matInput
                    [(ngModel)]="searchTerm"
                    placeholder="Ex: component, service, signal..."
                  />
                  <mat-icon matSuffix>search</mat-icon>
                </mat-form-field>

                <mat-form-field appearance="outline" class="category-field">
                  <mat-label>Catégorie</mat-label>
                  <mat-select
                    [(ngModel)]="selectedFilterCategory"
                    (selectionChange)="onFilterChange()"
                  >
                    <mat-option value="all">Toutes</mat-option>
                    @for (category of getCategories(); track category) {
                      <mat-option [value]="category">{{ category }}</mat-option>
                    }
                  </mat-select>
                </mat-form-field>
              </div>

              <div class="component-grid">
                @for (component of getFilteredComponents(); track component.type) {
                  <mat-card
                    class="component-card"
                    [class.selected]="isComponentSelected(component)"
                  >
                    <mat-card-header>
                      <mat-card-title>
                        <span class="icon">{{ component.icon }}</span>
                        {{ component.defaultName }}
                      </mat-card-title>
                      <mat-card-subtitle>{{ component.description }}</mat-card-subtitle>
                    </mat-card-header>

                    <mat-card-content>
                      <mat-chip-set>
                        <mat-chip [style.background-color]="getCategoryColor(component.category)">
                          {{ component.category }}
                        </mat-chip>
                      </mat-chip-set>
                    </mat-card-content>

                    <mat-card-actions>
                      <button mat-button (click)="addComponent(component)">
                        <mat-icon>add</mat-icon> Ajouter
                      </button>
                      <button mat-button (click)="previewComponent(component)">
                        <mat-icon>visibility</mat-icon> Aperçu
                      </button>
                      <button
                        mat-icon-button
                        (click)="addToFavorites(component)"
                        [matTooltip]="
                          isFavorite(component) ? 'Retirer des favoris' : 'Ajouter aux favoris'
                        "
                      >
                        <mat-icon [class.favorite]="isFavorite(component)">
                          {{ isFavorite(component) ? 'star' : 'star_border' }}
                        </mat-icon>
                      </button>
                    </mat-card-actions>
                  </mat-card>
                }
              </div>
            </mat-tab>

            <!-- Onglet Templates -->
            <mat-tab label="Templates">
              <div class="templates-grid">
                @for (template of architectureTemplates; track template.id) {
                  <mat-card class="template-card">
                    <mat-card-header>
                      <div class="template-icon">{{ template.icon }}</div>
                      <mat-card-title>{{ template.name }}</mat-card-title>
                      <mat-card-subtitle>{{ template.category }}</mat-card-subtitle>
                    </mat-card-header>

                    <mat-card-content>
                      <p>{{ template.description }}</p>

                      <div class="template-components">
                        <h4>Composants inclus :</h4>
                        <mat-chip-set>
                          @for (componentType of template.components; track componentType) {
                            <mat-chip
                              [style.background-color]="
                                getCategoryColor(getComponentCategory(componentType))
                              "
                            >
                              {{ getComponentIcon(componentType) }} {{ componentType }}
                            </mat-chip>
                          }
                        </mat-chip-set>
                      </div>
                    </mat-card-content>

                    <mat-card-actions>
                      <button
                        mat-raised-button
                        color="primary"
                        (click)="generateTemplate(template)"
                      >
                        <mat-icon>play_arrow</mat-icon> Générer
                      </button>
                      <button mat-button (click)="previewTemplate(template)">
                        <mat-icon>visibility</mat-icon> Aperçu
                      </button>
                    </mat-card-actions>
                  </mat-card>
                }
              </div>
            </mat-tab>

            <!-- Onglet Prévisualisation -->
            <mat-tab label="Prévisualisation">
              <div class="preview-tab">
                <div class="preview-controls">
                  <mat-form-field appearance="fill">
                    <mat-label>Type de prévisualisation</mat-label>
                    <mat-select
                      [(ngModel)]="previewMode"
                      (selectionChange)="onPreviewModeChange($event)"
                    >
                      <mat-option value="single">Élément unique</mat-option>
                      <mat-option value="multiple">Plusieurs éléments</mat-option>
                      <mat-option value="library">Bibliothèque complète</mat-option>
                    </mat-select>
                  </mat-form-field>

                  @if (previewMode === 'single') {
                    <mat-form-field appearance="fill">
                      <mat-label>Sélectionner un élément</mat-label>
                      <mat-select
                        [(ngModel)]="selectedPreviewComponent"
                        (selectionChange)="onPreviewComponentChange($event)"
                      >
                        @for (component of availableComponents; track component.type) {
                          <mat-option [value]="component.type">
                            {{ component.icon }} {{ component.defaultName }}
                          </mat-option>
                        }
                      </mat-select>
                    </mat-form-field>
                  }
                </div>

                <app-excalidraw-preview
                  [group]="previewGroup"
                  [library]="previewLibrary"
                  [groups]="previewGroups"
                ></app-excalidraw-preview>
              </div>
            </mat-tab>

            <!-- Onglet Bibliothèque -->
            <mat-tab label="Bibliothèque">
              <div class="library-info">
                <div class="library-header">
                  <h2>Bibliothèque actuelle</h2>
                  @if (generatorService.currentLibrary()) {
                    <button mat-raised-button color="warn" (click)="clearLibrary()">
                      <mat-icon>delete</mat-icon> Vider
                    </button>
                  }
                </div>

                @if (generatorService.currentLibrary(); as library) {
                  <div class="stats">
                    <mat-card>
                      <mat-card-content>
                        <h3>{{ generatorService.totalElements() }}</h3>
                        <p>Éléments totaux</p>
                      </mat-card-content>
                    </mat-card>

                    <mat-card>
                      <mat-card-content>
                        <h3>{{ generatorService.categories().length }}</h3>
                        <p>Catégories</p>
                      </mat-card-content>
                    </mat-card>

                    <mat-card>
                      <mat-card-content>
                        <h3>{{ favorites().length }}</h3>
                        <p>Favoris</p>
                      </mat-card-content>
                    </mat-card>
                  </div>

                  <div class="category-filters">
                    <h3>Filtrer par catégorie</h3>
                    <mat-chip-set>
                      <mat-chip
                        (click)="applyLibraryFilter('all')"
                        [highlighted]="selectedCategory() === 'all'"
                      >
                        Tous
                      </mat-chip>
                      @for (category of generatorService.categories(); track category) {
                        <mat-chip
                          (click)="applyLibraryFilter(category)"
                          [highlighted]="selectedCategory() === category"
                        >
                          {{ category }}
                        </mat-chip>
                      }
                    </mat-chip-set>
                  </div>

                  <div class="library-items">
                    @for (item of getFilteredItems(); track item.id) {
                      <mat-card class="library-item">
                        <mat-card-header>
                          <mat-card-title>{{ item.id }}</mat-card-title>
                          <mat-card-subtitle>
                            {{ item.elements.length }} éléments
                          </mat-card-subtitle>
                        </mat-card-header>
                        <mat-card-actions>
                          <button mat-icon-button (click)="removeItem(item.id)">
                            <mat-icon>delete</mat-icon>
                          </button>
                        </mat-card-actions>
                      </mat-card>
                    }
                  </div>
                } @else {
                  <p class="empty-state">
                    Aucune bibliothèque générée. Cliquez sur "Générer" pour commencer.
                  </p>
                }
              </div>
            </mat-tab>

            <!-- Onglet Export -->
            <mat-tab label="Export">
              <div class="export-options">
                <h2>Options d'export</h2>

                <mat-form-field appearance="fill" class="full-width">
                  <mat-label>Nom du fichier</mat-label>
                  <input matInput [(ngModel)]="exportFilename" />
                </mat-form-field>

                <mat-checkbox [(ngModel)]="includeAllCategories">
                  Inclure toutes les catégories
                </mat-checkbox>

                <div class="category-selector">
                  <h3>Catégories à exporter</h3>
                  @for (category of categories(); track category.name) {
                    <mat-checkbox [(ngModel)]="category.selected">
                      {{ category.name }}
                    </mat-checkbox>
                  }
                </div>

                <div class="export-actions">
                  <button mat-raised-button color="primary" (click)="openExportDialog()">
                    <mat-icon>download</mat-icon> Exporter en fichier
                  </button>

                  <button mat-raised-button (click)="exportJSON()">
                    <mat-icon>code</mat-icon> Exporter en JSON
                  </button>

                  <button mat-raised-button (click)="copyToClipboard()">
                    <mat-icon>content_copy</mat-icon> Copier dans le presse-papier
                  </button>
                </div>
              </div>
            </mat-tab>
          </mat-tab-group>
        }
      </main>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100vh;
      }

      .app-container {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .spacer {
        flex: 1;
      }

      .logo {
        font-size: 1.2rem;
        font-weight: 500;
        letter-spacing: 0.5px;
      }

      .content {
        flex: 1;
        overflow-y: auto;
        padding: 24px;
        background: #fafafa;
      }

      .loading-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 400px;
        gap: 16px;
      }

      .component-header {
        display: flex;
        gap: 16px;
        margin-bottom: 16px;

        .search-field {
          flex: 2;
        }

        .category-field {
          flex: 1;
        }
      }

      .component-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 16px;
        padding: 16px 0;
      }

      .component-card {
        transition:
          transform 0.2s,
          box-shadow 0.2s;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        &.selected {
          border: 2px solid #1976d2;
        }
      }

      .icon {
        font-size: 24px;
        margin-right: 8px;
      }

      .favorite {
        color: #fdd835;
      }

      .templates-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 24px;
        padding: 24px 0;
      }

      .template-card {
        transition:
          transform 0.2s,
          box-shadow 0.2s;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
      }

      .template-icon {
        font-size: 48px;
        margin: 16px;
        text-align: center;
      }

      .template-components {
        margin-top: 16px;

        h4 {
          margin-bottom: 8px;
          color: #666;
        }
      }

      .stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 16px;
        margin: 16px 0;

        mat-card-content {
          text-align: center;

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

      .category-filters {
        margin: 24px 0;
      }

      .library-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .library-items {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 16px;
        margin-top: 16px;
      }

      .empty-state {
        text-align: center;
        padding: 48px;
        color: #999;
        font-size: 1.1rem;
      }

      .export-options {
        max-width: 600px;
        margin: 0 auto;
        padding: 24px;
      }

      .full-width {
        width: 100%;
      }

      .category-selector {
        margin: 24px 0;

        mat-checkbox {
          display: block;
          margin: 8px 0;
        }
      }

      .export-actions {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 24px;
      }

      .preview-tab {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 24px;
        height: calc(100vh - 200px);
      }

      .preview-controls {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;

        mat-form-field {
          min-width: 200px;
        }
      }

      .preview-tab app-excalidraw-preview {
        flex: 1;
        min-height: 400px;
      }

      @media (max-width: 600px) {
        .content {
          padding: 16px;
        }

        .component-grid,
        .templates-grid {
          grid-template-columns: 1fr;
        }

        .component-header {
          flex-direction: column;
        }
      }
    `,
  ],
})
export class AppComponent {
  // Signals pour l'état local
  exportFilename = signal('angular-architecture-kit.excalidrawlib');
  includeAllCategories = signal(true);
  selectedCategory = signal('all');
  searchTerm = signal('');
  selectedFilterCategory = signal('all');

  // Favoris
  private readonly _favorites = signal<ComponentType[]>([]);
  readonly favorites = this._favorites.asReadonly();

  // Catalogue complet des composants
  availableComponents = COMPONENT_CATALOG;

  // Templates d'architecture
  architectureTemplates = ARCHITECTURE_TEMPLATES;

  // Catégories avec signals
  categories = signal([
    { name: 'Components', selected: true, color: '#DD0031' },
    { name: 'Services', selected: true, color: '#43A047' },
    { name: 'Routing', selected: true, color: '#2196F3' },
    { name: 'Signals', selected: true, color: '#7C4DFF' },
    { name: 'RxJS', selected: true, color: '#E91E63' },
    { name: 'State Management', selected: true, color: '#FB8C00' },
    { name: 'UI Kit', selected: true, color: '#00BCD4' },
    { name: 'Architecture', selected: true, color: '#607D8B' },
    { name: 'Ecosystem', selected: true, color: '#8BC34A' },
  ]);

  // Propriétés pour la prévisualisation
  previewMode = 'library';
  selectedPreviewComponent = ComponentType.STANDALONE_COMPONENT;
  previewGroup: ExcalidrawGroup | null = null;
  previewGroups: ExcalidrawGroup[] = [];
  previewLibrary: ExcalidrawLibrary | null = null;

  constructor(
    public generatorService: LibraryGeneratorService,
    private fileExportService: FileExportService,
    private storageService: StorageService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {
    // Effet pour logger les changements
    effect(() => {
      const library = generatorService.currentLibrary();
      if (library) {
        console.log('Bibliothèque mise à jour:', library.libraryItems.length, 'éléments');
        this.previewLibrary = library;
        this.updatePreview();

        // Sauvegarde automatique
        this.storageService.saveLibrary(library);
      }
    });

    // Charger la bibliothèque sauvegardée au démarrage
    this.loadSavedLibrary();
  }

  getCategoryColor(category: string): string {
    const cat = this.categories().find((c) => c.name === category);
    return cat ? cat.color : '#607D8B';
  }

  generateLibrary() {
    this.generatorService.generateLibrary();
    this.showSnackBar('Bibliothèque générée avec succès');
  }

  generateFullLibrary() {
    this.generatorService.generateFullLibrary();
    this.showSnackBar('Bibliothèque complète générée');
  }

  generateTemplate(template: ArchitectureTemplate) {
    try {
      const library = this.generatorService.generateArchitectureTemplate(template.id);
      this.showSnackBar(`Template "${template.name}" généré`);
    } catch (error) {
      console.error('Erreur lors de la génération du template:', error);
      this.showSnackBar('Erreur lors de la génération du template', 'error');
    }
  }

  previewTemplate(template: ArchitectureTemplate) {
    console.log('Prévisualisation du template:', template);
    try {
      const library = this.generatorService.generateArchitectureTemplate(template.id);
      this.previewLibrary = library;
      this.previewMode = 'library';
      this.updatePreview();
    } catch (error) {
      console.error('Erreur lors de la prévisualisation du template:', error);
      this.showSnackBar('Erreur lors de la prévisualisation', 'error');
    }
  }

  exportLibrary() {
    this.generatorService.downloadLibrary(this.exportFilename());
  }

  openExportDialog() {
    const library = this.generatorService.currentLibrary();
    if (!library) {
      this.showSnackBar('Aucune bibliothèque à exporter', 'warning');
      return;
    }

    const dialogRef = this.dialog.open(ExportDialogComponent, {
      width: '500px',
      data: library,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Export effectué:', result);
        this.showSnackBar(`Exporté en ${result.format.toUpperCase()}`);
      }
    });
  }

  importLibrary() {
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      this.fileExportService
        .importFromJSON(file)
        .then((library) => {
          this.generatorService['_currentLibrary'].set(library);
          this.showSnackBar(`Bibliothèque importée: ${library.libraryItems.length} éléments`);
        })
        .catch((error) => {
          console.error("Erreur lors de l'import:", error);
          this.showSnackBar("Erreur lors de l'import du fichier", 'error');
        });
    }
  }

  applyLibraryFilter(category: string) {
    this.selectedCategory.set(category);
    this.generatorService.filterByCategory(category);
  }

  onFilterChange(): void {
    this.applyLibraryFilter(this.selectedFilterCategory());
  }

  getFilteredComponents() {
    const search = this.searchTerm().toLowerCase();
    const category = this.selectedFilterCategory();

    return this.availableComponents.filter((component) => {
      const matchesSearch =
        !search ||
        component.defaultName.toLowerCase().includes(search) ||
        component.description.toLowerCase().includes(search);

      const matchesCategory = category === 'all' || component.category === category;

      return matchesSearch && matchesCategory;
    });
  }

  getCategories(): string[] {
    const uniqueCategories = new Set(this.availableComponents.map((c) => c.category));
    return Array.from(uniqueCategories);
  }

  getFilteredItems() {
    const library = this.generatorService.currentLibrary();
    if (!library) return [];

    const category = this.selectedCategory();
    if (category === 'all') {
      return library.libraryItems;
    }

    return library.libraryItems.filter((item) => item.id.startsWith(category.toLowerCase()));
  }

  addComponent(component: any) {
    console.log('=== Ajout du composant ===');
    console.log('Composant:', component);

    /*try {
      const group = this.generatorService.generateComponentByType(component.type);
      console.log('Composant généré:', group);
      this.showSnackBar(`Composant ajouté: ${component.defaultName}`);
    } catch (error) {
      console.error("Erreur lors de l'ajout:", error);
      this.showSnackBar("Erreur lors de l'ajout du composant", 'error');
    }*/
    try {
      // Utiliser la nouvelle méthode pour ajouter à la bibliothèque
      this.generatorService.addComponentToLibrary(component.type);

      // Mettre à jour la prévisualisation
      this.previewLibrary = this.generatorService.currentLibrary();

      // Afficher une notification
      this.showSnackBar(`✅ ${component.defaultName} ajouté à la bibliothèque`);

      // Log pour vérifier
      const library = this.generatorService.currentLibrary();
      console.log(
        'Bibliothèque après ajout:',
        library ? library.libraryItems.length : 0,
        'éléments',
      );
    } catch (error) {
      console.error("❌ Erreur lors de l'ajout:", error);
      this.showSnackBar("❌ Erreur lors de l'ajout du composant", 'error');
    }
  }

  /*previewComponent(component: any) {
    console.log('Prévisualisation:', component);
    try {
      const group = this.generatorService.generateComponentByType(component.type);
      this.previewGroup = group;
      this.previewMode = 'single';
      this.selectedPreviewComponent = component.type;
      this.updatePreview();
      this.showSnackBar(`Aperçu: ${component.defaultName}`);
    } catch (error) {
      console.error('Erreur de prévisualisation:', error);
      this.showSnackBar('Erreur lors de la prévisualisation', 'error');
    }
  }*/

  // Dans AppComponent, remplacer la méthode previewComponent

  previewComponent(component: any) {
    console.log('=== Prévisualisation du composant ===');
    console.log('Composant:', component);

    try {
      // Générer le groupe
      const group = this.generatorService.generateComponentByType(component.type);
      console.log('Groupe généré:', group.name, 'avec', group.elements.length, 'éléments');

      // Mettre à jour l'état de prévisualisation
      this.previewGroup = group;
      this.previewMode = 'single';
      this.selectedPreviewComponent = component.type;

      // Forcer la mise à jour
      this.updatePreview();

      // Afficher une notification
      this.showSnackBar(`👁️ Aperçu: ${component.defaultName}`);
    } catch (error) {
      console.error('❌ Erreur de prévisualisation:', error);
      this.showSnackBar('❌ Impossible de prévisualiser ce composant', 'error');
    }
  }

  // Améliorer la méthode updatePreview
  updatePreview(): void {
    console.log('=== Mise à jour de la prévisualisation ===');
    console.log('Mode:', this.previewMode);

    if (!this.generatorService.currentLibrary() && this.previewMode === 'library') {
      console.warn('Pas de bibliothèque générée pour le mode library');
    }

    switch (this.previewMode) {
      case 'single':
        try {
          const group = this.generatorService.generateComponentByType(
            this.selectedPreviewComponent,
          );
          this.previewGroup = group;
          this.previewGroups = [];
          console.log('✅ PreviewGroup mis à jour:', group.name);
        } catch (error) {
          console.warn('⚠️ Impossible de générer la prévisualisation:', error);
          this.previewGroup = null;
        }
        break;

      case 'multiple':
        try {
          const groups = this.generatorService
            .generateByCategory(ComponentCategory.COMPONENTS)
            .slice(0, 3);
          this.previewGroups = groups;
          this.previewGroup = null;
          console.log('✅ PreviewGroups mis à jour:', groups.length, 'groupes');
        } catch (error) {
          console.warn('⚠️ Impossible de générer les groupes:', error);
          this.previewGroups = [];
        }
        break;

      case 'library':
        const library = this.generatorService.currentLibrary();
        this.previewLibrary = library;
        this.previewGroup = null;
        this.previewGroups = [];
        console.log(
          '✅ PreviewLibrary mise à jour:',
          library ? library.libraryItems.length : 0,
          'items',
        );
        break;
    }
  }

  removeItem(itemId: string) {
    console.log('Suppression:', itemId);
    this.showSnackBar('Élément supprimé');
  }

  clearLibrary() {
    if (confirm('Voulez-vous vraiment vider la bibliothèque ?')) {
      this.storageService.clearLibrary();
      this.generatorService['_currentLibrary'].set(null);
      this.showSnackBar('Bibliothèque vidée');
    }
  }

  exportJSON() {
    const json = this.generatorService.exportLibrary();
    console.log('JSON exporté:', json);
    this.showSnackBar('JSON exporté dans la console');
  }

  copyToClipboard() {
    const json = this.generatorService.exportLibrary();
    navigator.clipboard.writeText(json).then(() => {
      this.showSnackBar('Copié dans le presse-papier');
    });
  }
  /*
  updatePreview(): void {
    if (!this.generatorService.currentLibrary()) return;

    switch (this.previewMode) {
      case 'single':
        try {
          this.previewGroup = this.generatorService.generateComponentByType(
            this.selectedPreviewComponent,
          );
          this.previewGroups = [];
        } catch (error) {
          console.warn('Impossible de générer la prévisualisation:', error);
          this.previewGroup = null;
        }
        break;

      case 'multiple':
        this.previewGroups = this.generatorService
          .generateByCategory(ComponentCategory.COMPONENTS)
          .slice(0, 3);
        this.previewGroup = null;
        break;

      case 'library':
        this.previewLibrary = this.generatorService.currentLibrary();
        this.previewGroup = null;
        this.previewGroups = [];
        break;
    }
  }*/

  onPreviewModeChange(event: any): void {
    this.previewMode = event.value || event;
    this.updatePreview();
  }

  onPreviewComponentChange(event: any): void {
    this.selectedPreviewComponent = event.value || event;
    this.updatePreview();
  }

  addToFavorites(component: any) {
    const current = this._favorites();
    const index = current.indexOf(component.type);

    if (index > -1) {
      this._favorites.set(current.filter((f) => f !== component.type));
      this.showSnackBar(`Retiré des favoris: ${component.defaultName}`);
    } else {
      this._favorites.set([...current, component.type]);
      this.showSnackBar(`Ajouté aux favoris: ${component.defaultName}`);
    }
  }

  isFavorite(component: any): boolean {
    return this._favorites().includes(component.type);
  }

  isComponentSelected(component: any): boolean {
    return this.selectedPreviewComponent === component.type;
  }

  getComponentCategory(type: ComponentType): ComponentCategory {
    return getComponentCategory(type);
  }

  getComponentIcon(type: ComponentType): string {
    return getComponentIcon(type);
  }

  getComponentDescription(type: ComponentType): string {
    return getComponentDescription(type);
  }

  private loadSavedLibrary(): void {
    const savedLibrary = this.storageService.loadLibrary();
    if (savedLibrary) {
      this.generatorService['_currentLibrary'].set(savedLibrary);
      console.log('📚 Bibliothèque chargée depuis le stockage local');
    }
  }

  private showSnackBar(message: string, type: 'success' | 'error' | 'warning' = 'success'): void {
    this.snackBar.open(message, 'Fermer', {
      duration: 3000,
      panelClass: `snackbar-${type}`,
    });
  }
}
export { AppComponent as App };

