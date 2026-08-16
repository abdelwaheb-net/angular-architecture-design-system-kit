// excalidraw-element.model.ts - Version corrigée
export interface ExcalidrawElement {
  id: string;
  type: 'rectangle' | 'ellipse' | 'diamond' | 'text' | 'arrow' | 'line';
  x: number;
  y: number;
  width?: number;
  height?: number;
  text?: string;
  fontSize?: number;
  fontFamily?: number;
  strokeColor: string;
  backgroundColor?: string;
  fillStyle?: 'solid' | 'hachure' | 'cross-hatch' | 'zigzag';
  strokeWidth: number;
  strokeStyle?: 'solid' | 'dashed' | 'dotted';
  roughness?: number;
  opacity?: number;
  points?: [number, number][];
  groupIds?: string[];
  roundness?: {
    type: number;
    value?: number;
  } | null;
}

// Interface pour la création d'éléments (avec x et y optionnels)
export interface CreateElementProps {
  id?: string;
  type: ExcalidrawElement['type'];
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  text?: string;
  fontSize?: number;
  fontFamily?: number;
  strokeColor?: string;
  backgroundColor?: string;
  fillStyle?: ExcalidrawElement['fillStyle'];
  strokeWidth?: number;
  strokeStyle?: ExcalidrawElement['strokeStyle'];
  roughness?: number;
  opacity?: number;
  points?: [number, number][];
  groupIds?: string[];
  roundness?: ExcalidrawElement['roundness'];
}

export interface ExcalidrawGroup {
  name: string;
  elements: ExcalidrawElement[];
  boundElements?: any[] | null;
}

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

export interface ComponentConfig {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  variant?: string;
}

export interface CategoryConfig {
  name: string;
  selected: boolean;
  color: string;
}
