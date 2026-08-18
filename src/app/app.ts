// app.component.ts - Version avec initialisation correcte
import { CommonModule } from '@angular/common';
import { Component, effect, OnInit, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatOptionModule } from '@angular/material/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ARCHITECTURE_TEMPLATES, ArchitectureTemplate } from './core/constants/templates.constants';
import {
  COMPONENT_CATALOG,
  ComponentMetadata,
  ComponentType
} from './core/models/component-types.enum';
import { ExcalidrawGroup, ExcalidrawLibrary } from './core/models/excalidraw-element.model';
import { FileExportService } from './core/services/file-export.service';
import { KeyboardShortcutsService } from './core/services/keyboard-shortcuts.service';
import { LibraryGeneratorService } from './core/services/library-generator.service';
import { StorageService } from './core/services/storage.service';
import { ThemeService } from './core/services/theme.service';
import { DocsComponent } from './features/docs/docs.component';
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
    MatExpansionModule,
    ExcalidrawPreviewComponent,
    DocsComponent,
  ],
  template: `
    <div class="app-container">
      <!-- Toolbar -->
      <mat-toolbar color="primary">
        <span class="logo">🚀 Angular Architecture Kit</span>
        <span class="spacer"></span>

        <button mat-icon-button matTooltip="Documentation" (click)="openDocs()">
          <mat-icon>help</mat-icon>
        </button>

        <button mat-icon-button matTooltip="Éditeur" (click)="openElementEditor()">
          <mat-icon>edit</mat-icon>
        </button>

        <button mat-icon-button matTooltip="Thème" (click)="toggleTheme()">
          <mat-icon>{{ themeService.theme() === 'dark' ? 'light_mode' : 'dark_mode' }}</mat-icon>
        </button>

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

        <button
          mat-raised-button
          (click)="exportLibrary()"
          [disabled]="!generatorService.currentLibrary()"
        >
          <mat-icon>download</mat-icon> Exporter
        </button>
      </mat-toolbar>

      <!-- Contenu principal -->
      <main class="content">
        <mat-tab-group #tabGroup>
          <!-- Onglet Composants -->
          <mat-tab label="Composants">
            <div class="tab-content">
              <h2>📦 Composants disponibles</h2>

              <div class="component-header">
                <mat-form-field appearance="outline" class="search-field">
                  <mat-label>Rechercher</mat-label>
                  <input
                    matInput
                    [(ngModel)]="searchTerm"
                    placeholder="Rechercher un composant..."
                  />
                  <mat-icon matSuffix>search</mat-icon>
                </mat-form-field>

                <mat-form-field appearance="outline" class="category-field">
                  <mat-label>Catégorie</mat-label>
                  <mat-select [(ngModel)]="selectedFilterCategory">
                    <mat-option value="all">Toutes les catégories</mat-option>
                    <mat-option value="Components">Components</mat-option>
                    <mat-option value="Services">Services</mat-option>
                    <mat-option value="Routing">Routing</mat-option>
                    <mat-option value="Signals">Signals</mat-option>
                    <mat-option value="State Management">State Management</mat-option>
                    <mat-option value="Ecosystem">Ecosystem</mat-option>
                  </mat-select>
                </mat-form-field>
              </div>

              <div class="component-grid">
                @for (component of getFilteredComponents(); track component.type) {
                  <mat-card class="component-card">
                    <mat-card-header>
                      <mat-card-title>
                        <span class="component-icon">{{ component.icon }}</span>
                        {{ component.defaultName }}
                      </mat-card-title>
                      <mat-card-subtitle>{{ component.description }}</mat-card-subtitle>
                    </mat-card-header>

                    <mat-card-content>
                      <mat-chip>{{ component.category }}</mat-chip>
                    </mat-card-content>

                    <mat-card-actions>
                      <button mat-raised-button color="primary" (click)="addComponent(component)">
                        <mat-icon>add</mat-icon> Ajouter
                      </button>
                      <button mat-button (click)="previewComponent(component)">
                        <mat-icon>visibility</mat-icon> Aperçu
                      </button>
                    </mat-card-actions>
                  </mat-card>
                }
              </div>
            </div>
          </mat-tab>

          <!-- Onglet Templates -->
          <mat-tab label="Templates">
            <div class="tab-content">
              <h2>🏗️ Templates d'architecture</h2>

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
                    </mat-card-content>

                    <mat-card-actions>
                      <button
                        mat-raised-button
                        color="primary"
                        (click)="generateTemplate(template)"
                      >
                        <mat-icon>play_arrow</mat-icon> Générer
                      </button>
                    </mat-card-actions>
                  </mat-card>
                }
              </div>
            </div>
          </mat-tab>

          <!-- Onglet Prévisualisation -->
          <mat-tab label="Prévisualisation">
            <div class="tab-content">
              <h2>👁️ Prévisualisation</h2>

              <div class="preview-controls">
                <mat-form-field appearance="fill">
                  <mat-label>Type</mat-label>
                  <mat-select
                    [(ngModel)]="previewMode"
                    (ngModelChange)="onPreviewModeChange($event)"
                  >
                    <mat-option value="single">Élément unique</mat-option>
                    <mat-option value="library">Bibliothèque complète</mat-option>
                  </mat-select>
                </mat-form-field>

                @if (previewMode === 'single') {
                  <mat-form-field appearance="fill">
                    <mat-label>Composant</mat-label>
                    <mat-select
                      [(ngModel)]="selectedPreviewComponent"
                      (ngModelChange)="onPreviewComponentChange($event)"
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
            <div class="tab-content">
              <div class="library-header">
                <h2>📚 Bibliothèque</h2>

                @if (generatorService.currentLibrary()) {
                  <button mat-raised-button color="warn" (click)="clearLibrary()">
                    <mat-icon>delete</mat-icon> Vider la bibliothèque
                  </button>
                }
              </div>

              @if (generatorService.currentLibrary(); as library) {
                <div class="library-stats">
                  <mat-card>
                    <mat-card-content>
                      <h3>{{ library.libraryItems.length }}</h3>
                      <p>Éléments totaux</p>
                    </mat-card-content>
                  </mat-card>
                </div>

                <p>Nombre d'éléments: {{ library.libraryItems.length }}</p>

                <div class="library-items">
                  @for (item of library.libraryItems; track item.id) {
                    <mat-card class="library-item">
                      <mat-card-header>
                        <mat-card-title>{{ formatItemName(item.id) }}</mat-card-title>
                        <mat-card-subtitle>{{ item.elements.length }} éléments</mat-card-subtitle>
                      </mat-card-header>
                      <mat-card-actions>
                        <button mat-icon-button (click)="previewLibraryItem(item)">
                          <mat-icon>visibility</mat-icon>
                        </button>
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
            <div class="tab-content">
              <h2>💾 Export</h2>

              <mat-form-field appearance="fill" class="full-width">
                <mat-label>Nom du fichier</mat-label>
                <input matInput [(ngModel)]="exportFilename" />
              </mat-form-field>

              <div class="export-actions">
                <button mat-raised-button color="primary" (click)="exportLibrary()">
                  <mat-icon>download</mat-icon> Télécharger .excalidrawlib
                </button>

                <button mat-raised-button (click)="copyToClipboard()">
                  <mat-icon>content_copy</mat-icon> Copier JSON
                </button>
              </div>
            </div>
          </mat-tab>

          <!-- Onglet Documentation -->
          <mat-tab label="Documentation">
            <app-docs></app-docs>
          </mat-tab>
        </mat-tab-group>
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
      }

      .content {
        flex: 1;
        overflow-y: auto;
        padding: 24px;
        background: #fafafa;
      }

      .tab-content {
        padding: 24px;
        min-height: 400px;
      }

      h2 {
        margin-top: 0;
        color: #333;
      }

      .component-header {
        display: flex;
        gap: 16px;
        margin-bottom: 24px;

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
      }

      .component-card {
        transition:
          transform 0.2s,
          box-shadow 0.2s;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
      }

      .component-icon {
        font-size: 24px;
        margin-right: 8px;
      }

      .templates-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 24px;
      }

      .template-icon {
        font-size: 48px;
        margin: 16px;
        text-align: center;
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

      .full-width {
        width: 100%;
      }

      .export-actions {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 24px;
      }

      .preview-controls {
        display: flex;
        gap: 16px;
        margin-bottom: 16px;

        mat-form-field {
          min-width: 200px;
        }
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  @ViewChild('tabGroup') tabGroup!: MatTabGroup;

  // État
  exportFilename = 'angular-architecture-kit.excalidrawlib';
  searchTerm = '';
  selectedFilterCategory = 'all';
  previewMode = 'library';
  selectedPreviewComponent = ComponentType.STANDALONE_COMPONENT;

  // Données
  availableComponents: ComponentMetadata[] = COMPONENT_CATALOG;
  architectureTemplates: ArchitectureTemplate[] = ARCHITECTURE_TEMPLATES;

  // Prévisualisation
  previewGroup: ExcalidrawGroup | null = null;
  previewGroups: ExcalidrawGroup[] = [];
  previewLibrary: ExcalidrawLibrary | null = null;

  // Favoris
  favorites = signal<ComponentType[]>([]);

  constructor(
    public generatorService: LibraryGeneratorService,
    private fileExportService: FileExportService,
    private storageService: StorageService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    public themeService: ThemeService,
    private keyboardShortcuts: KeyboardShortcutsService,
  ) {
    console.log('=== AppComponent initialisé ===');
    console.log('Composants:', this.availableComponents.length);
    console.log('Templates:', this.architectureTemplates.length);

   effect(() => {
     const library = this.generatorService.currentLibrary();
     if (library) {
       console.log('📚 Bibliothèque mise à jour:', library.libraryItems.length, 'items');
       this.previewLibrary = library;
     }
   });
  }

  ngOnInit(): void {
    console.log('=== ngOnInit ===');
    console.log('availableComponents:', this.availableComponents);
    console.log('architectureTemplates:', this.architectureTemplates);

    // Charger la bibliothèque sauvegardée
    const savedLibrary = this.storageService.loadLibrary();
    if (savedLibrary) {
      this.generatorService['_currentLibrary'].set(savedLibrary);
    }
  }

  getFilteredComponents(): ComponentMetadata[] {
    const search = this.searchTerm.toLowerCase().trim();
    const category = this.selectedFilterCategory;

    const filtered = this.availableComponents.filter((component) => {
      const matchesSearch =
        !search ||
        component.defaultName.toLowerCase().includes(search) ||
        component.description.toLowerCase().includes(search);

      const matchesCategory = category === 'all' || component.category === category;

      return matchesSearch && matchesCategory;
    });

    console.log(`Filtrage: ${filtered.length}/${this.availableComponents.length} composants`);
    return filtered;
  }

  generateLibrary(): void {
    console.log('Génération de la bibliothèque...');
    this.generatorService.generateLibrary();
    this.showSnackBar('✅ Bibliothèque générée');
  }

  generateFullLibrary(): void {
    console.log('Génération complète...');
    this.generatorService.generateFullLibrary();
    this.showSnackBar('✅ Bibliothèque complète générée');
  }

  generateTemplate(template: ArchitectureTemplate): void {
    console.log('Génération du template:', template.name);
    try {
      this.generatorService.generateArchitectureTemplate(template.id);
      this.showSnackBar(`✅ Template "${template.name}" généré`);
    } catch (error) {
      console.error('Erreur template:', error);
      this.showSnackBar('❌ Erreur lors de la génération', 'error');
    }
  }

  addComponent(component: ComponentMetadata): void {
    console.log('Ajout du composant:', component.defaultName);
    try {
      this.generatorService.addComponentToLibrary(component.type);
      this.showSnackBar(`✅ ${component.defaultName} ajouté`);
    } catch (error) {
      console.error('Erreur ajout:', error);
      this.showSnackBar("❌ Erreur lors de l'ajout", 'error');
    }
  }

  previewComponent(component: ComponentMetadata): void {
    console.log('Prévisualisation:', component.defaultName);
    try {
      this.previewGroup = this.generatorService.generateComponentByType(component.type);
      this.previewMode = 'single';
      this.selectedPreviewComponent = component.type;
      this.showSnackBar(`👁️ Aperçu: ${component.defaultName}`);
    } catch (error) {
      console.error('Erreur prévisualisation:', error);
      this.showSnackBar('❌ Erreur de prévisualisation', 'error');
    }
  }

  exportLibrary(): void {
    console.log('Export de la bibliothèque...');
    this.generatorService.downloadLibrary(this.exportFilename);
    this.showSnackBar('✅ Bibliothèque exportée');
  }

  copyToClipboard(): void {
    const json = this.generatorService.exportLibrary();
    navigator.clipboard.writeText(json).then(() => {
      this.showSnackBar('✅ Copié dans le presse-papier');
    });
  }

  openDocs(): void {
    console.log('Ouverture documentation');
    if (this.tabGroup) {
      this.tabGroup.selectedIndex = 5;
    }
  }

  toggleTheme(): void {
    console.log('Basculement thème');
    this.themeService.toggleTheme();
    this.showSnackBar(`🌓 Thème: ${this.themeService.theme()}`);
  }

  openElementEditor(): void {
    console.log('Ouverture éditeur');
    import('./shared/components/element-editor/element-editor.component').then((module) => {
      const dialogRef = this.dialog.open(module.ElementEditorComponent, {
        width: '400px',
        data: {
          elementName: 'Nouveau composant',
          elementColor: '#DD0031',
          fontSize: 20,
        },
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          console.log('Résultat édition:', result);
          this.showSnackBar('✅ Élément modifié');
        }
      });
    });
  }

  isFavorite(component: ComponentMetadata): boolean {
    return this.favorites().includes(component.type);
  }

  addToFavorites(component: ComponentMetadata): void {
    const current = this.favorites();
    const index = current.indexOf(component.type);

    if (index > -1) {
      this.favorites.set(current.filter((f) => f !== component.type));
    } else {
      this.favorites.set([...current, component.type]);
    }
  }

  getCategoryColor(category: string): string {
    const colors: Record<string, string> = {
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
    return colors[category] || '#607D8B';
  }

  private showSnackBar(message: string, type: 'success' | 'error' = 'success'): void {
    this.snackBar.open(message, 'Fermer', {
      duration: 3000,
      panelClass: `snackbar-${type}`,
    });
  }
  // Dans la classe AppComponent

  onPreviewModeChange(mode: string): void {
    console.log('=== Changement de mode ===');
    console.log('Nouveau mode:', mode);

    this.previewMode = mode;
    this.updatePreview();
  }

  onPreviewComponentChange(type: ComponentType): void {
    console.log('=== Changement de composant ===');
    console.log('Nouveau type:', type);

    this.selectedPreviewComponent = type;
    this.updatePreview();
  }

  updatePreview(): void {
    console.log('=== Mise à jour de la prévisualisation ===');
    console.log('Mode:', this.previewMode);
    console.log('Composant sélectionné:', this.selectedPreviewComponent);

    if (this.previewMode === 'single') {
      try {
        const group = this.generatorService.generateComponentByType(this.selectedPreviewComponent);
        this.previewGroup = group;
        this.previewGroups = [];
        this.previewLibrary = null;
        console.log('✅ Groupe généré:', group.name);
      } catch (error) {
        console.error('❌ Erreur génération:', error);
        this.previewGroup = null;
      }
    } else if (this.previewMode === 'library') {
      const library = this.generatorService.currentLibrary();
      this.previewLibrary = library;
      this.previewGroup = null;
      this.previewGroups = [];
      console.log('✅ Bibliothèque:', library ? library.libraryItems.length : 0, 'items');
    }
  }

  // Dans la classe AppComponent

  clearLibrary(): void {
    console.log('=== Vider la bibliothèque ===');

    if (confirm('Voulez-vous vraiment vider la bibliothèque ?')) {
      this.storageService.clearLibrary();
      this.generatorService['_currentLibrary'].set(null);
      this.previewLibrary = null;
      this.previewGroup = null;
      this.previewGroups = [];
      this.showSnackBar('🗑️ Bibliothèque vidée');
    }
  }

  removeItem(itemId: string): void {
    console.log('=== Suppression ===');
    console.log('Item:', itemId);

    this.generatorService.removeComponentFromLibrary(itemId);
    this.showSnackBar('🗑️ Élément supprimé');
  }

  previewLibraryItem(item: any): void {
    console.log('=== Prévisualisation item ===');
    console.log('Item:', item);

    const group: ExcalidrawGroup = {
      name: this.formatItemName(item.id),
      elements: item.elements,
      boundElements: null,
    };

    this.previewGroup = group;
    this.previewMode = 'single';
    this.showSnackBar(`👁️ Aperçu: ${this.formatItemName(item.id)}`);
  }

  formatItemName(id: string): string {
    return id
      .split('-')
      .slice(1)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
export { AppComponent as App };

