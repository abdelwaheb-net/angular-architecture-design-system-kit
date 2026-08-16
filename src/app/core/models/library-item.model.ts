import { ExcalidrawElement } from "./excalidraw-element.model";

// library-item.model.ts
export interface LibraryItem {
  id: string;
  status: 'published' | 'unpublished';
  elements: ExcalidrawElement[];
  created: number;
}

export interface ExcalidrawLibrary {
  type: 'excalidrawlib';
  version: 2;
  source: string;
  libraryItems: LibraryItem[];
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

export interface ComponentConfig {
  id: string;
  name: string;
  category: ComponentCategory;
  description: string;
  icon: string;
  variant?: string;
}
