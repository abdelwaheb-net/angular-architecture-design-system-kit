// dimensions.constants.ts - Version corrigée
export interface Dimensions {
  width: number;
  height: number;
  cornerRadius: number;
  padding: number;
}

// Utiliser un type explicite au lieu d'un index signature
export const COMPONENT_DIMENSIONS = {
  standard: {
    width: 220,
    height: 140,
    cornerRadius: 8,
    padding: 16,
  },
  service: {
    width: 180,
    height: 80,
    cornerRadius: 6,
    padding: 12,
  },
  signal: {
    width: 150,
    height: 60,
    cornerRadius: 20,
    padding: 8,
  },
  route: {
    width: 200,
    height: 70,
    cornerRadius: 10,
    padding: 14,
  },
  operator: {
    width: 120,
    height: 40,
    cornerRadius: 12,
    padding: 6,
  },
} as const;

// Type pour les clés
export type DimensionKey = keyof typeof COMPONENT_DIMENSIONS;

// Helper function pour accéder aux dimensions
export function getDimensions(key: DimensionKey): Dimensions {
  return COMPONENT_DIMENSIONS[key];
}

export const FONT_SIZES = {
  title: 16,
  subtitle: 14,
  body: 12,
  label: 11,
  small: 10,
} as const;

export type FontSizeKey = keyof typeof FONT_SIZES;
