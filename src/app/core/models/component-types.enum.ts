// component-types.enum.ts
export enum ComponentType {
  // Angular Components
  STANDALONE_COMPONENT = 'standalone-component',
  SMART_COMPONENT = 'smart-component',
  PRESENTATIONAL_COMPONENT = 'presentational-component',
  SIGNAL_COMPONENT = 'signal-component',
  LAYOUT_COMPONENT = 'layout-component',
  FEATURE_COMPONENT = 'feature-component',

  // Services
  INJECTABLE_SERVICE = 'injectable-service',
  HTTP_SERVICE = 'http-service',
  FACADE_SERVICE = 'facade-service',
  REPOSITORY_SERVICE = 'repository-service',
  UTILITY_SERVICE = 'utility-service',

  // Routing
  ROUTE_NODE = 'route-node',
  CHILD_ROUTE = 'child-route',
  LAZY_LOADED_ROUTE = 'lazy-loaded-route',
  ROUTE_GUARD = 'route-guard',
  ROUTE_RESOLVER = 'route-resolver',
  ROUTER_OUTLET = 'router-outlet',

  // Signals
  SIGNAL = 'signal',
  COMPUTED_SIGNAL = 'computed-signal',
  LINKED_SIGNAL = 'linked-signal',
  SIGNAL_EFFECT = 'signal-effect',
  SIGNAL_RESOURCE = 'signal-resource',

  // RxJS
  OBSERVABLE = 'observable',
  SUBJECT = 'subject',
  BEHAVIOR_SUBJECT = 'behavior-subject',
  REPLAY_SUBJECT = 'replay-subject',
  RXJS_OPERATOR = 'rxjs-operator',

  // State Management
  NGRX_STORE = 'ngrx-store',
  NGRX_ACTION = 'ngrx-action',
  NGRX_REDUCER = 'ngrx-reducer',
  NGRX_EFFECT = 'ngrx-effect',
  NGRX_SELECTOR = 'ngrx-selector',
  SIGNAL_STORE = 'signal-store',

  // UI Components
  MATERIAL_TOOLBAR = 'material-toolbar',
  MATERIAL_SIDENAV = 'material-sidenav',
  MATERIAL_TABLE = 'material-table',
  MATERIAL_DIALOG = 'material-dialog',
  MATERIAL_CARD = 'material-card',
  MATERIAL_FORM_FIELD = 'material-form-field',

  // Architecture
  MODULE = 'module',
  MICRO_FRONTEND = 'micro-frontend',
  CLEAN_ARCHITECTURE_LAYER = 'clean-architecture-layer',
  HEXAGONAL_ARCHITECTURE = 'hexagonal-architecture',

  // Ecosystem
  REST_API = 'rest-api',
  GRAPHQL_API = 'graphql-api',
  DATABASE = 'database',
  DEVOPS_PIPELINE = 'devops-pipeline',
}

export enum ComponentCategory {
  COMPONENTS = 'Components',
  SERVICES = 'Services',
  ROUTING = 'Routing',
  SIGNALS = 'Signals',
  RXJS = 'RxJS',
  STATE_MANAGEMENT = 'State Management',
  UI_KIT = 'UI Kit',
  ARCHITECTURE = 'Architecture',
  ECOSYSTEM = 'Ecosystem',
}

export enum ElementShape {
  RECTANGLE = 'rectangle',
  ELLIPSE = 'ellipse',
  DIAMOND = 'diamond',
  TEXT = 'text',
  ARROW = 'arrow',
  LINE = 'line',
}

export enum BorderStyle {
  SOLID = 'solid',
  DASHED = 'dashed',
  DOTTED = 'dotted',
}

export enum FillStyle {
  SOLID = 'solid',
  HACHURE = 'hachure',
  CROSS_HATCH = 'cross-hatch',
  ZIGZAG = 'zigzag',
}

// Interface pour les métadonnées des composants
export interface ComponentMetadata {
  type: ComponentType;
  category: ComponentCategory;
  icon: string;
  defaultName: string;
  description: string;
  supportedShapes: ElementShape[];
}

// Helper functions
export function getComponentCategory(type: ComponentType): ComponentCategory {
  if (
    type.startsWith('standalone') ||
    type.startsWith('smart') ||
    type.startsWith('presentational') ||
    type.startsWith('signal-component') ||
    type.startsWith('layout') ||
    type.startsWith('feature')
  ) {
    return ComponentCategory.COMPONENTS;
  }

  if (type.includes('service')) {
    return ComponentCategory.SERVICES;
  }

  if (type.includes('route') || type.includes('router')) {
    return ComponentCategory.ROUTING;
  }

  if (type.includes('signal')) {
    return ComponentCategory.SIGNALS;
  }

  if (type.includes('subject') || type.includes('observable') || type.includes('rxjs')) {
    return ComponentCategory.RXJS;
  }

  if (type.includes('ngrx') || type.includes('store')) {
    return ComponentCategory.STATE_MANAGEMENT;
  }

  if (type.includes('material')) {
    return ComponentCategory.UI_KIT;
  }

  if (type.includes('architecture') || type.includes('module') || type.includes('micro')) {
    return ComponentCategory.ARCHITECTURE;
  }

  return ComponentCategory.ECOSYSTEM;
}

export function getComponentIcon(type: ComponentType): string {
  const iconMap: Record<ComponentType, string> = {
    [ComponentType.STANDALONE_COMPONENT]: '📦',
    [ComponentType.SMART_COMPONENT]: '🧠',
    [ComponentType.PRESENTATIONAL_COMPONENT]: '🎨',
    [ComponentType.SIGNAL_COMPONENT]: '⚡',
    [ComponentType.LAYOUT_COMPONENT]: '📐',
    [ComponentType.FEATURE_COMPONENT]: '📁',
    [ComponentType.INJECTABLE_SERVICE]: '💉',
    [ComponentType.HTTP_SERVICE]: '🌐',
    [ComponentType.FACADE_SERVICE]: '🏗️',
    [ComponentType.REPOSITORY_SERVICE]: '🗄️',
    [ComponentType.UTILITY_SERVICE]: '🔧',
    [ComponentType.ROUTE_NODE]: '🛣️',
    [ComponentType.CHILD_ROUTE]: '🌿',
    [ComponentType.LAZY_LOADED_ROUTE]: '⏳',
    [ComponentType.ROUTE_GUARD]: '🛡️',
    [ComponentType.ROUTE_RESOLVER]: '🔍',
    [ComponentType.ROUTER_OUTLET]: '📤',
    [ComponentType.SIGNAL]: '⚡',
    [ComponentType.COMPUTED_SIGNAL]: '🔄',
    [ComponentType.LINKED_SIGNAL]: '🔗',
    [ComponentType.SIGNAL_EFFECT]: '✨',
    [ComponentType.SIGNAL_RESOURCE]: '📡',
    [ComponentType.OBSERVABLE]: '👁️',
    [ComponentType.SUBJECT]: '📢',
    [ComponentType.BEHAVIOR_SUBJECT]: '🎯',
    [ComponentType.REPLAY_SUBJECT]: '🔁',
    [ComponentType.RXJS_OPERATOR]: '🔧',
    [ComponentType.NGRX_STORE]: '🏪',
    [ComponentType.NGRX_ACTION]: '📨',
    [ComponentType.NGRX_REDUCER]: '🔨',
    [ComponentType.NGRX_EFFECT]: '⚡',
    [ComponentType.NGRX_SELECTOR]: '🔍',
    [ComponentType.SIGNAL_STORE]: '📊',
    [ComponentType.MATERIAL_TOOLBAR]: '📊',
    [ComponentType.MATERIAL_SIDENAV]: '📑',
    [ComponentType.MATERIAL_TABLE]: '📋',
    [ComponentType.MATERIAL_DIALOG]: '💬',
    [ComponentType.MATERIAL_CARD]: '🃏',
    [ComponentType.MATERIAL_FORM_FIELD]: '📝',
    [ComponentType.MODULE]: '📦',
    [ComponentType.MICRO_FRONTEND]: '🧩',
    [ComponentType.CLEAN_ARCHITECTURE_LAYER]: '🏛️',
    [ComponentType.HEXAGONAL_ARCHITECTURE]: '⬡',
    [ComponentType.REST_API]: '🔌',
    [ComponentType.GRAPHQL_API]: '📊',
    [ComponentType.DATABASE]: '🗃️',
    [ComponentType.DEVOPS_PIPELINE]: '🚀',
  };

  return iconMap[type] || '📦';
}

export function getComponentDescription(type: ComponentType): string {
  const descriptionMap: Record<ComponentType, string> = {
    [ComponentType.STANDALONE_COMPONENT]: 'Composant autonome moderne',
    [ComponentType.SMART_COMPONENT]: 'Composant avec logique métier',
    [ComponentType.PRESENTATIONAL_COMPONENT]: 'Composant de présentation pure',
    [ComponentType.SIGNAL_COMPONENT]: 'Composant utilisant les Signals',
    [ComponentType.LAYOUT_COMPONENT]: 'Composant de mise en page',
    [ComponentType.FEATURE_COMPONENT]: 'Composant fonctionnel',
    [ComponentType.INJECTABLE_SERVICE]: 'Service injectable',
    [ComponentType.HTTP_SERVICE]: 'Service HTTP',
    [ComponentType.FACADE_SERVICE]: 'Service façade',
    [ComponentType.REPOSITORY_SERVICE]: 'Service repository',
    [ComponentType.UTILITY_SERVICE]: 'Service utilitaire',
    [ComponentType.ROUTE_NODE]: 'Nœud de route',
    [ComponentType.CHILD_ROUTE]: 'Route enfant',
    [ComponentType.LAZY_LOADED_ROUTE]: 'Route lazy-loaded',
    [ComponentType.ROUTE_GUARD]: 'Garde de route',
    [ComponentType.ROUTE_RESOLVER]: 'Resolveur de route',
    [ComponentType.ROUTER_OUTLET]: 'Sortie de routeur',
    [ComponentType.SIGNAL]: 'Signal Angular',
    [ComponentType.COMPUTED_SIGNAL]: 'Signal calculé',
    [ComponentType.LINKED_SIGNAL]: 'Signal lié',
    [ComponentType.SIGNAL_EFFECT]: 'Effet de signal',
    [ComponentType.SIGNAL_RESOURCE]: 'Ressource de signal',
    [ComponentType.OBSERVABLE]: 'Observable RxJS',
    [ComponentType.SUBJECT]: 'Subject RxJS',
    [ComponentType.BEHAVIOR_SUBJECT]: 'BehaviorSubject RxJS',
    [ComponentType.REPLAY_SUBJECT]: 'ReplaySubject RxJS',
    [ComponentType.RXJS_OPERATOR]: 'Opérateur RxJS',
    [ComponentType.NGRX_STORE]: 'Store NgRx',
    [ComponentType.NGRX_ACTION]: 'Action NgRx',
    [ComponentType.NGRX_REDUCER]: 'Reducer NgRx',
    [ComponentType.NGRX_EFFECT]: 'Effect NgRx',
    [ComponentType.NGRX_SELECTOR]: 'Selector NgRx',
    [ComponentType.SIGNAL_STORE]: 'Signal Store',
    [ComponentType.MATERIAL_TOOLBAR]: 'Toolbar Material',
    [ComponentType.MATERIAL_SIDENAV]: 'Sidenav Material',
    [ComponentType.MATERIAL_TABLE]: 'Table Material',
    [ComponentType.MATERIAL_DIALOG]: 'Dialog Material',
    [ComponentType.MATERIAL_CARD]: 'Card Material',
    [ComponentType.MATERIAL_FORM_FIELD]: 'Form Field Material',
    [ComponentType.MODULE]: 'Module Angular',
    [ComponentType.MICRO_FRONTEND]: 'Micro Frontend',
    [ComponentType.CLEAN_ARCHITECTURE_LAYER]: 'Couche Clean Architecture',
    [ComponentType.HEXAGONAL_ARCHITECTURE]: 'Architecture Hexagonale',
    [ComponentType.REST_API]: 'API REST',
    [ComponentType.GRAPHQL_API]: 'API GraphQL',
    [ComponentType.DATABASE]: 'Base de données',
    [ComponentType.DEVOPS_PIPELINE]: 'Pipeline DevOps',
  };

  return descriptionMap[type] || 'Élément Angular';
}

// Constante pour la liste complète des composants
export const COMPONENT_CATALOG: ComponentMetadata[] = Object.values(ComponentType).map((type) => ({
  type,
  category: getComponentCategory(type),
  icon: getComponentIcon(type),
  defaultName: type
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' '),
  description: getComponentDescription(type),
  supportedShapes: [ElementShape.RECTANGLE, ElementShape.TEXT],
}));
