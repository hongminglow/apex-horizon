import { create } from 'zustand';
import type { LayoutState, LayoutVariant } from '@/types';
import { STORAGE_KEYS } from '@/constants';
import { getStorageItem, setStorageItem } from '@/lib/utils';

export const useLayoutStore = create<LayoutState>((set) => ({
  variant: getStorageItem<LayoutVariant>(STORAGE_KEYS.LAYOUT_VARIANT, 'grid'),
  sidebarCollapsed: getStorageItem<boolean>(STORAGE_KEYS.SIDEBAR_COLLAPSED, false),

  setVariant: (variant) => {
    setStorageItem(STORAGE_KEYS.LAYOUT_VARIANT, variant);
    set({ variant });
  },

  toggleSidebar: () => {
    set((state) => {
      const next = !state.sidebarCollapsed;
      setStorageItem(STORAGE_KEYS.SIDEBAR_COLLAPSED, next);
      return { sidebarCollapsed: next };
    });
  },
}));
