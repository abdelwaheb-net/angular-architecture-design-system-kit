// excalidraw-element.model.ts - Format exact Excalidraw
export interface ExcalidrawElement {
  id: string;
  type: 'rectangle' | 'ellipse' | 'diamond' | 'text' | 'arrow' | 'line';
  x: number;
  y: number;
  width: number;
  height: number;
  angle: number;
  strokeColor: string;
  backgroundColor: string;
  fillStyle: 'solid' | 'hachure' | 'cross-hatch' | 'zigzag';
  strokeWidth: number;
  strokeStyle: 'solid' | 'dashed' | 'dotted';
  roughness: number;
  opacity: number;
  groupIds: string[];
  roundness: {
    type: number;
    value?: number;
  } | null;
  boundElements: any[] | null;
  updated: number;
  link: string | null;
  locked: boolean;

  // Propriétés spécifiques au texte
  text?: string;
  fontSize?: number;
  fontFamily?: number;
  textAlign?: 'left' | 'center' | 'right';
  verticalAlign?: 'top' | 'middle' | 'bottom';
  containerId?: string;
  originalText?: string;
  lineHeight?: number;

  // Propriétés pour les formes
  points?: [number, number][];
  startBinding?: any;
  endBinding?: any;
  lastCommittedPoint?: [number, number] | null;
  startArrowhead?: 'arrow' | 'bar' | 'dot' | 'triangle' | null;
  endArrowhead?: 'arrow' | 'bar' | 'dot' | 'triangle' | null;
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
