// colors.constants.ts
export interface ColorScheme {
  primary: string;
  dark: string;
  light: string;
  border: string;
  text: string;
}

export const ANGULAR_COLORS = {
  components: {
    primary: '#DD0031',
    dark: '#C3002F',
    light: '#FFF5F5',
    border: '#DD0031',
    text: '#0F0F11',
  },
  services: {
    primary: '#43A047',
    dark: '#2E7D32',
    light: '#E8F5E9',
    border: '#43A047',
    text: '#1B5E20',
  },
  signals: {
    primary: '#7C4DFF',
    dark: '#5E35B1',
    light: '#F3E5F5',
    border: '#7C4DFF',
    text: '#4A148C',
  },
  rxjs: {
    primary: '#E91E63',
    dark: '#C2185B',
    light: '#FCE4EC',
    border: '#E91E63',
    text: '#880E4F',
  },
  routing: {
    primary: '#2196F3',
    dark: '#1565C0',
    light: '#E3F2FD',
    border: '#2196F3',
    text: '#0D47A1',
  },
  architecture: {
    primary: '#FB8C00',
    dark: '#E65100',
    light: '#FFF3E0',
    border: '#FB8C00',
    text: '#E65100',
  },
} as const;

export type ColorCategory = keyof typeof ANGULAR_COLORS;
