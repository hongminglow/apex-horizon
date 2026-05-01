import { create } from 'zustand';
import type { ThemeState, ThemeMode, ColorPalette } from '@/types';
import { STORAGE_KEYS } from '@/constants';
import { getStorageItem, setStorageItem } from '@/lib/utils';

/** Apply theme class and palette data attribute to <html> */
function applyThemeToDOM(mode: ThemeMode, palette: ColorPalette): void {
  const html = document.documentElement;
  html.classList.remove('dark', 'light');
  html.classList.add(mode);
  html.setAttribute('data-palette', palette);
}

const initialMode = getStorageItem<ThemeMode>(STORAGE_KEYS.THEME_MODE, 'dark');
const initialPalette = getStorageItem<ColorPalette>(STORAGE_KEYS.COLOR_PALETTE, 'horizon');

// Apply immediately to prevent flash
applyThemeToDOM(initialMode, initialPalette);

export const useThemeStore = create<ThemeState>((set) => ({
  mode: initialMode,
  palette: initialPalette,

  setMode: (mode) => {
    setStorageItem(STORAGE_KEYS.THEME_MODE, mode);
    applyThemeToDOM(mode, useThemeStore.getState().palette);
    set({ mode });
  },

  toggleMode: () => {
    const next = useThemeStore.getState().mode === 'dark' ? 'light' : 'dark';
    setStorageItem(STORAGE_KEYS.THEME_MODE, next);
    applyThemeToDOM(next, useThemeStore.getState().palette);
    set({ mode: next });
  },

  setPalette: (palette) => {
    setStorageItem(STORAGE_KEYS.COLOR_PALETTE, palette);
    applyThemeToDOM(useThemeStore.getState().mode, palette);
    set({ palette });
  },
}));
