export type ThemeMode = 'dark' | 'light';
export type ColorPalette = 'horizon' | 'emerald' | 'violet' | 'amber' | 'rose';

export interface PaletteConfig {
  id: ColorPalette;
  label: string;
  color: string;
}

export interface ThemeState {
  mode: ThemeMode;
  palette: ColorPalette;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
  setPalette: (palette: ColorPalette) => void;
}
