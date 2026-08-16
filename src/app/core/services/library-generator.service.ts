// library-generator.service.ts - Version complète et corrigée
import { computed, Injectable, signal, Signal } from '@angular/core';
import { ANGULAR_COLORS, ColorCategory } from '../constants/colors.constants';
import {
  COMPONENT_DIMENSIONS,
  FONT_SIZES,
  getDimensions
} from '../constants/dimensions.constants';
import {
  ComponentCategory,
  ComponentType,
  getComponentCategory
} from '../models/component-types.enum';
import {
  CreateElementProps,
  ExcalidrawElement,
  ExcalidrawGroup,
  ExcalidrawLibrary,
  LibraryItem,
} from '../models/excalidraw-element.model';

@Injectable({
  providedIn: 'root',
})
export class LibraryGeneratorService {
  // State avec Signals
  private readonly _currentLibrary = signal<ExcalidrawLibrary | null>(null);
  private readonly _selectedCategory = signal<string>('all');
  private readonly _isGenerating = signal<boolean>(false);
  private readonly _elementCounter = signal<number>(0);

  // Computed signals
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
   * Crée un élément Excalidraw avec ID unique
   */
  private createBaseElement(props: CreateElementProps): ExcalidrawElement {
    const currentCounter = this._elementCounter();
    this._elementCounter.set(currentCounter + 1);

    return {
      id: props.id || `element-${currentCounter}-${Date.now()}`,
      type: props.type,
      x: props.x ?? 0,
      y: props.y ?? 0,
      width: props.width,
      height: props.height,
      text: props.text,
      fontSize: props.fontSize,
      fontFamily: props.fontFamily,
      strokeColor: props.strokeColor || '#0F0F11',
      backgroundColor: props.backgroundColor,
      fillStyle: props.fillStyle || 'solid',
      strokeWidth: props.strokeWidth || 2,
      strokeStyle: props.strokeStyle,
      roughness: props.roughness || 1,
      opacity: props.opacity || 100,
      points: props.points,
      groupIds: props.groupIds,
      roundness: props.roundness || { type: 3, value: 8 },
    };
  }

  /**
   * Crée un rectangle avec le style Angular
   */
  private createStyledRectangle(
    x: number,
    y: number,
    width: number,
    height: number,
    colorCategory: ColorCategory,
    options: Partial<CreateElementProps> = {},
  ): ExcalidrawElement {
    const colorScheme = ANGULAR_COLORS[colorCategory];

    return this.createBaseElement({
      type: 'rectangle',
      x,
      y,
      width,
      height,
      strokeColor: colorScheme.primary,
      backgroundColor: colorScheme.light,
      fillStyle: 'solid',
      strokeWidth: 2,
      roundness: { type: 3, value: 8 },
      ...options,
    });
  }

  /**
   * Crée un groupe Excalidraw
   */
  private createGroup(name: string, elements: ExcalidrawElement[]): ExcalidrawGroup {
    const groupId = `group-${name.toLowerCase().replace(/\s+/g, '-')}`;
    return {
      name,
      elements: elements.map((el) => ({
        ...el,
        groupIds: [groupId],
      })),
      boundElements: null,
    };
  }

  /**
   * Génère un composant Standalone Angular moderne
   */
  generateStandaloneComponent(): ExcalidrawGroup {
    const elements: ExcalidrawElement[] = [];
    const dimensions = getDimensions('standard');
    const { width, height, padding } = dimensions;

    // Rectangle principal
    elements.push(this.createStyledRectangle(0, 0, width, height, 'components'));

    // Titre
    elements.push(
      this.createBaseElement({
        type: 'text',
        x: padding,
        y: 10,
        text: 'Standalone Component',
        fontSize: FONT_SIZES.title,
        fontFamily: 1,
        strokeColor: ANGULAR_COLORS.components.dark,
      }),
    );

    // Icône
    elements.push(
      this.createBaseElement({
        type: 'text',
        x: width - 40,
        y: 10,
        text: '📦',
        fontSize: 24,
        fontFamily: 1,
      }),
    );

    // Badge standalone
    elements.push(
      this.createStyledRectangle(padding, 40, width - padding * 2, 30, 'components', {
        backgroundColor: '#E8F5E9',
        strokeColor: '#4CAF50',
        roundness: { type: 3, value: 4 },
        strokeWidth: 1,
      }),
    );

    elements.push(
      this.createBaseElement({
        type: 'text',
        x: padding + 10,
        y: 48,
        text: 'standalone: true',
        fontSize: FONT_SIZES.label,
        strokeColor: '#2E7D32',
      }),
    );

    // Sections modernes
    const sections = [
      { label: '📄 template.html', y: 80 },
      { label: '🎨 styles.scss', y: 100 },
      { label: '⚡ component.ts', y: 120 },
    ];

    sections.forEach((section) => {
      elements.push(
        this.createBaseElement({
          type: 'text',
          x: padding,
          y: section.y,
          text: section.label,
          fontSize: FONT_SIZES.small,
          strokeColor: '#555',
        }),
      );
    });

    return this.createGroup('Standalone Component', elements);
  }

  /**
   * Génère un composant avec Signals
   */
  generateSignalComponent(): ExcalidrawGroup {
    const elements: ExcalidrawElement[] = [];
    const { width, height, padding } = COMPONENT_DIMENSIONS['standard'];

    // Rectangle avec style signals
    elements.push(this.createStyledRectangle(0, 0, width, height, 'signals'));

    // Titre
    elements.push(
      this.createBaseElement({
        type: 'text',
        x: padding,
        y: 10,
        text: 'Signal Component',
        fontSize: FONT_SIZES.title,
        strokeColor: ANGULAR_COLORS.signals.dark,
      }),
    );

    // Icône signal
    elements.push(
      this.createBaseElement({
        type: 'text',
        x: width - 45,
        y: 10,
        text: '⚡',
        fontSize: 24,
      }),
    );

    // Déclarations de signals
    const signalDeclarations = [
      { name: 'count', type: 'signal<number>', y: 45 },
      { name: 'user', type: 'signal<User | null>', y: 70 },
      { name: 'isLoading', type: 'signal<boolean>', y: 95 },
    ];

    signalDeclarations.forEach((decl) => {
      elements.push(
        this.createBaseElement({
          type: 'text',
          x: padding,
          y: decl.y,
          text: `${decl.name}: ${decl.type}`,
          fontSize: FONT_SIZES.body,
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
    const { width, height, padding } = COMPONENT_DIMENSIONS['standard'];

    // Rectangle avec bordure épaisse
    elements.push(
      this.createStyledRectangle(0, 0, width, height, 'components', {
        strokeWidth: 3,
        backgroundColor: '#FFF0F0',
      }),
    );

    // Titre
    elements.push(
      this.createBaseElement({
        type: 'text',
        x: padding,
        y: 10,
        text: 'Smart Component',
        fontSize: FONT_SIZES.title,
        strokeColor: ANGULAR_COLORS.components.dark,
      }),
    );

    // Icône cerveau
    elements.push(
      this.createBaseElement({
        type: 'text',
        x: width - 45,
        y: 10,
        text: '🧠',
        fontSize: 24,
      }),
    );

    // Inputs
    elements.push(
      this.createBaseElement({
        type: 'text',
        x: padding,
        y: 45,
        text: 'Inputs:',
        fontSize: FONT_SIZES.label,
        strokeColor: '#1565C0',
      }),
    );

    elements.push(
      this.createBaseElement({
        type: 'text',
        x: padding + 70,
        y: 45,
        text: '@Input() data',
        fontSize: FONT_SIZES.body,
        strokeColor: '#333',
      }),
    );

    // Services
    elements.push(
      this.createBaseElement({
        type: 'text',
        x: padding,
        y: 75,
        text: 'Services:',
        fontSize: FONT_SIZES.label,
        strokeColor: '#2E7D32',
      }),
    );

    elements.push(
      this.createBaseElement({
        type: 'text',
        x: padding + 70,
        y: 75,
        text: 'UserService, AuthService',
        fontSize: FONT_SIZES.body,
        strokeColor: '#333',
      }),
    );

    return this.createGroup('Smart Component', elements);
  }

  /**
   * Génère un composant Presentational
   */
  generatePresentationalComponent(): ExcalidrawGroup {
    const elements: ExcalidrawElement[] = [];
    const dimensions = getDimensions('standard');
    const { width, height, padding } = dimensions;

    // Rectangle avec bordure pointillée
    elements.push(
      this.createStyledRectangle(0, 0, width, height, 'components', {
        strokeColor: '#78909C',
        strokeWidth: 2,
        backgroundColor: '#FAFAFA',
        strokeStyle: 'dashed',
      }),
    );

    // Titre
    elements.push(
      this.createBaseElement({
        type: 'text',
        x: padding,
        y: 10,
        text: 'Presentational',
        fontSize: FONT_SIZES.title,
        strokeColor: '#546E7A',
      }),
    );

    // Icône palette
    elements.push(
      this.createBaseElement({
        type: 'text',
        x: width - 45,
        y: 10,
        text: '🎨',
        fontSize: 24,
      }),
    );

    // Description
    elements.push(
      this.createBaseElement({
        type: 'text',
        x: padding,
        y: 45,
        text: 'Pure UI Component',
        fontSize: FONT_SIZES.subtitle,
        strokeColor: '#78909C',
      }),
    );

    // Inputs/Outputs
    elements.push(
      this.createBaseElement({
        type: 'text',
        x: padding,
        y: 75,
        text: '@Input() data',
        fontSize: FONT_SIZES.body,
        strokeColor: '#546E7A',
      }),
    );

    elements.push(
      this.createBaseElement({
        type: 'text',
        x: padding,
        y: 95,
        text: '@Output() event',
        fontSize: FONT_SIZES.body,
        strokeColor: '#546E7A',
      }),
    );

    return this.createGroup('Presentational Component', elements);
  }

  /**
   * Génère un composant basé sur son type
   */
  // Modifier generateComponentByType pour inclure les nouveaux types
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
      case ComponentType.SIGNAL:
        return this.generateSignal();
      case ComponentType.SUBJECT:
        return this.generateSubject();
      case ComponentType.ROUTE_NODE:
        return this.generateRoute();
      case ComponentType.NGRX_STORE:
        return this.generateNgRxStore();
      default:
        throw new Error(`Type de composant non supporté: ${type}`);
    }
  }

  /**
   * Génère tous les composants d'une catégorie
   */
  generateByCategory(category: ComponentCategory): ExcalidrawGroup[] {
    const components: ExcalidrawGroup[] = [];

    // Filtrer les types par catégorie
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
   * Génère la bibliothèque de base (composants principaux)
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

      // Générer pour chaque catégorie
      Object.values(ComponentCategory).forEach((category) => {
        const groups = this.generateByCategory(category);

        groups.forEach((group) => {
          libraryItems.push({
            id: `${category.toLowerCase()}-${group.name.toLowerCase().replace(/\s+/g, '-')}`,
            status: 'published',
            elements: group.elements,
            created: Date.now(),
          });
        });
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

  // Ajouter ces méthodes dans LibraryGeneratorService

  /**
   * Génère un Service Angular
   */
  generateService(): ExcalidrawGroup {
    const elements: ExcalidrawElement[] = [];
    const { width, height, padding } = COMPONENT_DIMENSIONS['service'];

    // Rectangle principal avec style service
    elements.push(this.createStyledRectangle(0, 0, width, height, 'services'));

    // Titre
    elements.push(
      this.createBaseElement({
        type: 'text',
        x: padding,
        y: 10,
        text: 'Angular Service',
        fontSize: FONT_SIZES.title,
        strokeColor: ANGULAR_COLORS.services.dark,
      }),
    );

    // Icône
    elements.push(
      this.createBaseElement({
        type: 'text',
        x: width - 40,
        y: 10,
        text: '🔧',
        fontSize: 24,
      }),
    );

    // Badge injectable
    elements.push(
      this.createStyledRectangle(padding, 40, width - padding * 2, 25, 'services', {
        backgroundColor: '#E8F5E9',
        strokeColor: '#4CAF50',
        roundness: { type: 3, value: 4 },
        strokeWidth: 1,
      }),
    );

    elements.push(
      this.createBaseElement({
        type: 'text',
        x: padding + 10,
        y: 45,
        text: '@Injectable()',
        fontSize: FONT_SIZES.small,
        strokeColor: '#2E7D32',
      }),
    );

    return this.createGroup('Angular Service', elements);
  }

  /**
   * Génère un Signal
   */
  generateSignal(): ExcalidrawGroup {
    const elements: ExcalidrawElement[] = [];
    const { width, height, padding } = COMPONENT_DIMENSIONS['signal'];

    // Ellipse pour le signal
    elements.push(
      this.createBaseElement({
        type: 'ellipse',
        x: 0,
        y: 0,
        width,
        height,
        strokeColor: ANGULAR_COLORS.signals.primary,
        backgroundColor: ANGULAR_COLORS.signals.light,
        fillStyle: 'solid',
        strokeWidth: 2,
      }),
    );

    // Icône éclair
    elements.push(
      this.createBaseElement({
        type: 'text',
        x: width / 2 - 15,
        y: height / 2 - 15,
        text: '⚡',
        fontSize: 20,
      }),
    );

    // Label
    elements.push(
      this.createBaseElement({
        type: 'text',
        x: width / 2 - 20,
        y: height / 2 + 5,
        text: 'signal()',
        fontSize: FONT_SIZES.small,
        strokeColor: ANGULAR_COLORS.signals.dark,
      }),
    );

    return this.createGroup('Signal', elements);
  }

  /**
   * Génère un Subject RxJS
   */
  generateSubject(): ExcalidrawGroup {
    const elements: ExcalidrawElement[] = [];
    const { width, height, padding } = COMPONENT_DIMENSIONS['operator'];

    // Rectangle arrondi pour l'opérateur
    elements.push(
      this.createStyledRectangle(0, 0, width, height, 'rxjs', {
        roundness: { type: 3, value: 12 },
        backgroundColor: '#FCE4EC',
      }),
    );

    // Titre
    elements.push(
      this.createBaseElement({
        type: 'text',
        x: padding,
        y: 10,
        text: 'Subject',
        fontSize: FONT_SIZES.body,
        strokeColor: ANGULAR_COLORS.rxjs.dark,
      }),
    );

    return this.createGroup('RxJS Subject', elements);
  }

  /**
   * Génère une route Angular
   */
  generateRoute(): ExcalidrawGroup {
    const elements: ExcalidrawElement[] = [];
    const { width, height, padding } = COMPONENT_DIMENSIONS['route'];

    // Rectangle avec style routing
    elements.push(this.createStyledRectangle(0, 0, width, height, 'routing'));

    // Icône route
    elements.push(
      this.createBaseElement({
        type: 'text',
        x: padding,
        y: 10,
        text: '🛣️',
        fontSize: 20,
      }),
    );

    // Titre
    elements.push(
      this.createBaseElement({
        type: 'text',
        x: padding + 35,
        y: 10,
        text: 'Route',
        fontSize: FONT_SIZES.body,
        strokeColor: ANGULAR_COLORS.routing.dark,
      }),
    );

    // Path
    elements.push(
      this.createBaseElement({
        type: 'text',
        x: padding,
        y: 40,
        text: '/dashboard',
        fontSize: FONT_SIZES.small,
        strokeColor: '#1565C0',
      }),
    );

    return this.createGroup('Route Angular', elements);
  }

  /**
   * Génère un Store NgRx
   */
  generateNgRxStore(): ExcalidrawGroup {
    const elements: ExcalidrawElement[] = [];
    const { width, height, padding } = COMPONENT_DIMENSIONS.standard;

    // Rectangle principal
    elements.push(
      this.createStyledRectangle(0, 0, width, height, 'architecture', {
        backgroundColor: '#FFF3E0',
      }),
    );

    // Titre
    elements.push(
      this.createBaseElement({
        type: 'text',
        x: padding,
        y: 10,
        text: 'NgRx Store',
        fontSize: FONT_SIZES.title,
        strokeColor: ANGULAR_COLORS.architecture.dark,
      }),
    );

    // Icône
    elements.push(
      this.createBaseElement({
        type: 'text',
        x: width - 45,
        y: 10,
        text: '🏪',
        fontSize: 24,
      }),
    );

    // Sections
    const storeSections = [
      { label: 'Actions', icon: '📨', y: 45 },
      { label: 'Reducers', icon: '🔨', y: 70 },
      { label: 'Effects', icon: '⚡', y: 95 },
      { label: 'Selectors', icon: '🔍', y: 120 },
    ];

    storeSections.forEach((section) => {
      elements.push(
        this.createBaseElement({
          type: 'text',
          x: padding,
          y: section.y,
          text: `${section.icon} ${section.label}`,
          fontSize: FONT_SIZES.body,
          strokeColor: '#E65100',
        }),
      );
    });

    return this.createGroup('NgRx Store', elements);
  }
  // library-generator.service.ts - Ajouter ces méthodes à la fin de la classe

  /**
   * SECTION: Export/Import de fichiers
   */

  /**
   * Exporte la bibliothèque en fichier JSON téléchargeable
   */
  exportLibraryToFile(filename: string = 'angular-architecture-kit.excalidrawlib'): void {
    const library = this._currentLibrary();
    if (!library) {
      console.warn('⚠️ Aucune bibliothèque à exporter');
      return;
    }

    const json = JSON.stringify(library, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    console.log(`✅ Bibliothèque exportée: ${filename}`);
  }

  /**
   * Importe une bibliothèque depuis un fichier JSON
   */
  importLibraryFromFile(file: File): Promise<ExcalidrawLibrary> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        try {
          const content = event.target?.result as string;
          const library = JSON.parse(content) as ExcalidrawLibrary;

          // Valider la structure
          if (library.type !== 'excalidrawlib' || !Array.isArray(library.libraryItems)) {
            throw new Error('Format de bibliothèque invalide');
          }

          this._currentLibrary.set(library);
          console.log('✅ Bibliothèque importée avec succès');
          resolve(library);
        } catch (error) {
          console.error("❌ Erreur lors de l'import:", error);
          reject(error);
        }
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsText(file);
    });
  }

  /**
   * SECTION: Templates d'architecture
   */

  /**
   * Génère un template d'architecture complète
   */
  generateArchitectureTemplate(templateName: string): ExcalidrawLibrary {
    const templates: Record<string, () => ExcalidrawGroup[]> = {
      ecommerce: () => this.generateEcommerceTemplate(),
      dashboard: () => this.generateDashboardTemplate(),
      'micro-frontend': () => this.generateMicroFrontendTemplate(),
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
    return library;
  }

  /**
   * Template E-commerce
   */
  private generateEcommerceTemplate(): ExcalidrawGroup[] {
    return [
      this.generateStandaloneComponent(),
      this.generateSmartComponent(),
      this.generateService(),
      this.generateNgRxStore(),
    ];
  }

  /**
   * Template Dashboard
   */
  private generateDashboardTemplate(): ExcalidrawGroup[] {
    return [
      this.generateStandaloneComponent(),
      this.generateSignalComponent(),
      this.generateRoute(),
      this.generateService(),
    ];
  }

  /**
   * Template Micro-Frontend
   */
  private generateMicroFrontendTemplate(): ExcalidrawGroup[] {
    return [this.generateStandaloneComponent(), this.generateService(), this.generateRoute()];
  }
}
