// library-generator.service.ts - Version complète
import { computed, Injectable, signal, Signal } from '@angular/core';
import { ANGULAR_COLORS, ColorCategory } from '../constants/colors.constants';
import {
  ComponentCategory,
  ComponentType,
  getComponentCategory,
} from '../models/component-types.enum';
import {
  ExcalidrawElement,
  ExcalidrawGroup,
  ExcalidrawLibrary,
  LibraryItem,
} from '../models/excalidraw-element.model';

@Injectable({
  providedIn: 'root',
})
export class LibraryGeneratorService {
  private readonly _currentLibrary = signal<ExcalidrawLibrary | null>(null);
  private readonly _selectedCategory = signal<string>('all');
  private readonly _isGenerating = signal<boolean>(false);
  private readonly _elementCounter = signal<number>(0);

  readonly currentLibrary: Signal<ExcalidrawLibrary | null> = this._currentLibrary.asReadonly();
  readonly selectedCategory: Signal<string> = this._selectedCategory.asReadonly();
  readonly isGenerating: Signal<boolean> = this._isGenerating.asReadonly();

  readonly totalElements = computed(() => {
    const library = this._currentLibrary();
    return library ? library.libraryItems.length : 0;
  });

  readonly categories = computed(() => {
    const library = this._currentLibrary();
    if (!library) return [];

    const uniqueCategories = new Set(
      library.libraryItems.map((item) => {
        const parts = item.id.split('-');
        return parts[0] || 'other';
      }),
    );
    return Array.from(uniqueCategories);
  });

  constructor() {}

  /**
   * Crée un élément Excalidraw avec toutes les propriétés requises
   */
  private createElement(
    type: ExcalidrawElement['type'],
    x: number,
    y: number,
    options: Partial<ExcalidrawElement> = {},
  ): ExcalidrawElement {
    const currentCounter = this._elementCounter();
    this._elementCounter.set(currentCounter + 1);

    return {
      id: `element-${currentCounter}-${Date.now()}`,
      type,
      x,
      y,
      width: options.width || 100,
      height: options.height || 50,
      angle: 0,
      strokeColor: options.strokeColor || '#000000',
      backgroundColor: options.backgroundColor || 'transparent',
      fillStyle: options.fillStyle || 'solid',
      strokeWidth: options.strokeWidth || 2,
      strokeStyle: options.strokeStyle || 'solid',
      roughness: options.roughness || 1,
      opacity: options.opacity || 100,
      groupIds: options.groupIds || [],
      roundness: options.roundness || null,
      boundElements: options.boundElements || null,
      updated: Date.now(),
      link: options.link || null,
      locked: options.locked || false,
      ...options,
    };
  }

  /**
   * Crée un rectangle Excalidraw
   */
  private createRectangle(
    x: number,
    y: number,
    width: number,
    height: number,
    colorCategory: ColorCategory,
    options: Partial<ExcalidrawElement> = {},
  ): ExcalidrawElement {
    const colorScheme = ANGULAR_COLORS[colorCategory];

    return this.createElement('rectangle', x, y, {
      width,
      height,
      strokeColor: colorScheme.primary,
      backgroundColor: colorScheme.light,
      fillStyle: 'solid',
      strokeWidth: 2,
      roughness: 1,
      roundness: { type: 3, value: 8 },
      ...options,
    });
  }

  /**
   * Crée un texte Excalidraw
   */
  private createText(
    x: number,
    y: number,
    text: string,
    options: Partial<ExcalidrawElement> = {},
  ): ExcalidrawElement {
    const fontSize = options.fontSize || 20;
    const approximateWidth = text.length * fontSize * 0.6;

    return this.createElement('text', x, y, {
      width: options.width || approximateWidth,
      height: options.height || fontSize * 1.5,
      text,
      fontSize,
      fontFamily: options.fontFamily || 1,
      textAlign: options.textAlign || 'left',
      verticalAlign: options.verticalAlign || 'top',
      strokeColor: options.strokeColor || '#000000',
      backgroundColor: 'transparent',
      fillStyle: 'solid',
      strokeWidth: 2,
      roughness: 1,
      opacity: 100,
      ...options,
    });
  }

  /**
   * Crée un groupe Excalidraw
   */
  private createGroup(name: string, elements: ExcalidrawElement[]): ExcalidrawGroup {
    const groupId = `group-${name.toLowerCase().replace(/\s+/g, '-')}`;

    const groupedElements = elements.map((el) => ({
      ...el,
      groupIds: [groupId],
    }));

    return {
      name,
      elements: groupedElements,
      boundElements: null,
    };
  }

  /**
   * Génère un composant Standalone Angular
   */
  generateStandaloneComponent(): ExcalidrawGroup {
    const elements: ExcalidrawElement[] = [];
    const width = 250;
    const height = 180;
    const padding = 20;

    elements.push(this.createRectangle(0, 0, width, height, 'components'));
    elements.push(
      this.createText(padding, 10, 'Standalone Component', {
        fontSize: 20,
        strokeColor: ANGULAR_COLORS.components.dark,
      }),
    );
    elements.push(
      this.createText(width - 50, 10, '📦', {
        fontSize: 24,
      }),
    );

    elements.push(
      this.createRectangle(padding, 50, width - padding * 2, 30, 'components', {
        backgroundColor: '#E8F5E9',
        strokeColor: '#4CAF50',
        roundness: { type: 3, value: 4 },
        strokeWidth: 1,
      }),
    );

    elements.push(
      this.createText(padding + 10, 55, 'standalone: true', {
        fontSize: 14,
        strokeColor: '#2E7D32',
      }),
    );

    const sections = [
      { label: 'template.html', y: 90 },
      { label: 'styles.scss', y: 115 },
      { label: 'component.ts', y: 140 },
    ];

    sections.forEach((section) => {
      elements.push(
        this.createText(padding, section.y, section.label, {
          fontSize: 12,
          strokeColor: '#555555',
        }),
      );
    });

    return this.createGroup('Standalone Component', elements);
  }

  /**
   * Génère un composant Signal
   */
  generateSignalComponent(): ExcalidrawGroup {
    const elements: ExcalidrawElement[] = [];
    const width = 250;
    const height = 150;
    const padding = 20;

    elements.push(this.createRectangle(0, 0, width, height, 'signals'));
    elements.push(
      this.createText(padding, 10, 'Signal Component', {
        fontSize: 20,
        strokeColor: ANGULAR_COLORS.signals.dark,
      }),
    );
    elements.push(
      this.createText(width - 50, 10, '⚡', {
        fontSize: 24,
      }),
    );

    const signals = [
      { name: 'count: signal<number>', y: 50 },
      { name: 'user: signal<User>', y: 75 },
      { name: 'loading: signal<boolean>', y: 100 },
    ];

    signals.forEach((sig) => {
      elements.push(
        this.createText(padding, sig.y, sig.name, {
          fontSize: 14,
          strokeColor: ANGULAR_COLORS.signals.dark,
        }),
      );
    });

    return this.createGroup('Signal Component', elements);
  }

  /**
   * Génère un Smart Component
   */
  generateSmartComponent(): ExcalidrawGroup {
    const elements: ExcalidrawElement[] = [];
    const width = 250;
    const height = 150;
    const padding = 20;

    elements.push(
      this.createRectangle(0, 0, width, height, 'components', {
        strokeWidth: 3,
        backgroundColor: '#FFF0F0',
      }),
    );

    elements.push(
      this.createText(padding, 10, 'Smart Component', {
        fontSize: 20,
        strokeColor: ANGULAR_COLORS.components.dark,
      }),
    );
    elements.push(
      this.createText(width - 50, 10, '🧠', {
        fontSize: 24,
      }),
    );

    elements.push(
      this.createText(padding, 50, '@Input() data', {
        fontSize: 14,
        strokeColor: '#1565C0',
      }),
    );
    elements.push(
      this.createText(padding, 80, 'UserService', {
        fontSize: 14,
        strokeColor: '#2E7D32',
      }),
    );

    return this.createGroup('Smart Component', elements);
  }

  /**
   * Génère un Presentational Component
   */
  generatePresentationalComponent(): ExcalidrawGroup {
    const elements: ExcalidrawElement[] = [];
    const width = 250;
    const height = 150;
    const padding = 20;

    elements.push(
      this.createRectangle(0, 0, width, height, 'components', {
        strokeColor: '#78909C',
        backgroundColor: '#FAFAFA',
        strokeStyle: 'dashed',
      }),
    );

    elements.push(
      this.createText(padding, 10, 'Presentational', {
        fontSize: 20,
        strokeColor: '#546E7A',
      }),
    );
    elements.push(
      this.createText(width - 50, 10, '🎨', {
        fontSize: 24,
      }),
    );

    elements.push(
      this.createText(padding, 50, 'Pure UI Component', {
        fontSize: 16,
        strokeColor: '#78909C',
      }),
    );
    elements.push(
      this.createText(padding, 80, '@Input() data', {
        fontSize: 14,
        strokeColor: '#546E7A',
      }),
    );

    return this.createGroup('Presentational Component', elements);
  }

  /**
   * Génère un Service Angular
   */
  generateService(): ExcalidrawGroup {
    const elements: ExcalidrawElement[] = [];
    const width = 200;
    const height = 100;
    const padding = 20;

    elements.push(this.createRectangle(0, 0, width, height, 'services'));
    elements.push(
      this.createText(padding, 10, 'Angular Service', {
        fontSize: 18,
        strokeColor: ANGULAR_COLORS.services.dark,
      }),
    );
    elements.push(
      this.createText(width - 45, 10, '🔧', {
        fontSize: 20,
      }),
    );

    elements.push(
      this.createRectangle(padding, 50, width - padding * 2, 25, 'services', {
        backgroundColor: '#E8F5E9',
        strokeColor: '#4CAF50',
        roundness: { type: 3, value: 4 },
        strokeWidth: 1,
      }),
    );

    elements.push(
      this.createText(padding + 10, 53, '@Injectable()', {
        fontSize: 12,
        strokeColor: '#2E7D32',
      }),
    );

    return this.createGroup('Angular Service', elements);
  }

  /**
   * Génère la bibliothèque de base
   */
  generateLibrary(): ExcalidrawLibrary {
    this._isGenerating.set(true);

    try {
      const libraryItems: LibraryItem[] = [
        {
          id: 'components-standalone',
          status: 'published',
          elements: this.generateStandaloneComponent().elements,
          created: Date.now(),
        },
        {
          id: 'components-smart',
          status: 'published',
          elements: this.generateSmartComponent().elements,
          created: Date.now(),
        },
        {
          id: 'components-presentational',
          status: 'published',
          elements: this.generatePresentationalComponent().elements,
          created: Date.now(),
        },
        {
          id: 'signals-component',
          status: 'published',
          elements: this.generateSignalComponent().elements,
          created: Date.now(),
        },
        {
          id: 'services-injectable',
          status: 'published',
          elements: this.generateService().elements,
          created: Date.now(),
        },
      ];

      const library: ExcalidrawLibrary = {
        type: 'excalidrawlib',
        version: 2,
        source: 'https://github.com/votre-repo/angular-architecture-kit',
        libraryItems,
      };

      this._currentLibrary.set(library);
      console.log('✅ Bibliothèque générée avec succès');

      return library;
    } catch (error) {
      console.error('❌ Erreur lors de la génération:', error);
      throw error;
    } finally {
      this._isGenerating.set(false);
    }
  }

  /**
   * Génère la bibliothèque complète avec toutes les catégories
   */
  generateFullLibrary(): ExcalidrawLibrary {
    this._isGenerating.set(true);

    try {
      const libraryItems: LibraryItem[] = [];

      Object.values(ComponentCategory).forEach((category) => {
        try {
          const groups = this.generateByCategory(category);

          groups.forEach((group) => {
            libraryItems.push({
              id: `${category.toLowerCase()}-${group.name.toLowerCase().replace(/\s+/g, '-')}`,
              status: 'published',
              elements: group.elements,
              created: Date.now(),
            });
          });
        } catch (error) {
          console.warn(`Impossible de générer la catégorie ${category}:`, error);
        }
      });

      const library: ExcalidrawLibrary = {
        type: 'excalidrawlib',
        version: 2,
        source: 'https://github.com/votre-repo/angular-architecture-kit',
        libraryItems,
      };

      this._currentLibrary.set(library);
      console.log(`✅ Bibliothèque complète générée: ${libraryItems.length} éléments`);

      return library;
    } catch (error) {
      console.error('❌ Erreur lors de la génération complète:', error);
      throw error;
    } finally {
      this._isGenerating.set(false);
    }
  }

  /**
   * Génère un template d'architecture complète
   */
  generateArchitectureTemplate(templateName: string): ExcalidrawLibrary {
    this._isGenerating.set(true);

    try {
      const templates: Record<string, () => ExcalidrawGroup[]> = {
        ecommerce: () => [
          this.generateStandaloneComponent(),
          this.generateSmartComponent(),
          this.generateService(),
        ],
        dashboard: () => [
          this.generateStandaloneComponent(),
          this.generateSignalComponent(),
          this.generateService(),
        ],
        'micro-frontend': () => [this.generateStandaloneComponent(), this.generateService()],
        'reactive-forms': () => [this.generateStandaloneComponent(), this.generateService()],
        'real-time': () => [this.generateSignalComponent(), this.generateService()],
      };

      const generateTemplate = templates[templateName];
      if (!generateTemplate) {
        throw new Error(`Template inconnu: ${templateName}`);
      }

      const groups = generateTemplate();
      const libraryItems: LibraryItem[] = groups.map((group, index) => ({
        id: `${templateName}-${index}-${group.name.toLowerCase().replace(/\s+/g, '-')}`,
        status: 'published',
        elements: group.elements,
        created: Date.now(),
      }));

      const library: ExcalidrawLibrary = {
        type: 'excalidrawlib',
        version: 2,
        source: 'https://github.com/votre-repo/angular-architecture-kit',
        libraryItems,
      };

      this._currentLibrary.set(library);
      console.log(`✅ Template "${templateName}" généré avec ${libraryItems.length} éléments`);

      return library;
    } catch (error) {
      console.error('❌ Erreur lors de la génération du template:', error);
      throw error;
    } finally {
      this._isGenerating.set(false);
    }
  }

  /**
   * Génère un composant basé sur son type
   */
  generateComponentByType(type: ComponentType): ExcalidrawGroup {
    switch (type) {
      case ComponentType.STANDALONE_COMPONENT:
        return this.generateStandaloneComponent();
      case ComponentType.SMART_COMPONENT:
        return this.generateSmartComponent();
      case ComponentType.PRESENTATIONAL_COMPONENT:
        return this.generatePresentationalComponent();
      case ComponentType.SIGNAL_COMPONENT:
        return this.generateSignalComponent();
      case ComponentType.INJECTABLE_SERVICE:
        return this.generateService();
      default:
        throw new Error(`Type de composant non supporté: ${type}`);
    }
  }

  /**
   * Génère tous les composants d'une catégorie
   */
  generateByCategory(category: ComponentCategory): ExcalidrawGroup[] {
    const components: ExcalidrawGroup[] = [];

    const typesInCategory = Object.values(ComponentType).filter(
      (type) => getComponentCategory(type) === category,
    );

    typesInCategory.forEach((type) => {
      try {
        components.push(this.generateComponentByType(type));
      } catch (error) {
        console.warn(`Impossible de générer ${type}:`, error);
      }
    });

    return components;
  }

  /**
   * Filtre les éléments par catégorie
   */
  filterByCategory(category: string): void {
    this._selectedCategory.set(category);
  }

  /**
   * Exporte la bibliothèque
   */
  exportLibrary(): string {
    const library = this._currentLibrary();
    if (!library) {
      console.warn('⚠️ Aucune bibliothèque à exporter');
      return '';
    }

    try {
      return JSON.stringify(library, null, 2);
    } catch (error) {
      console.error("❌ Erreur lors de l'export:", error);
      return '';
    }
  }

  /**
   * Télécharge la bibliothèque
   */
  downloadLibrary(filename: string): void {
    const json = this.exportLibrary();
    if (!json) return;

    try {
      const blob = new Blob([json], { type: 'application/json' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      console.log('✅ Bibliothèque téléchargée:', filename);
    } catch (error) {
      console.error('❌ Erreur lors du téléchargement:', error);
    }
  }
}
