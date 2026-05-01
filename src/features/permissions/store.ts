import { create } from 'zustand';
import type { PermissionState, PermissionKey } from '@/types';
import { STORAGE_KEYS, DEFAULT_PERMISSIONS } from '@/constants';
import { getStorageItem, setStorageItem } from '@/lib/utils';

export const usePermissionStore = create<PermissionState>((set, get) => ({
  permissions: getStorageItem(STORAGE_KEYS.PERMISSIONS, DEFAULT_PERMISSIONS),

  togglePermission: (key: PermissionKey) => {
    set((state) => {
      const updated = { ...state.permissions, [key]: !state.permissions[key] };
      setStorageItem(STORAGE_KEYS.PERMISSIONS, updated);
      return { permissions: updated };
    });
  },

  hasPermission: (key: PermissionKey) => {
    return get().permissions[key] ?? false;
  },

  resetPermissions: () => {
    setStorageItem(STORAGE_KEYS.PERMISSIONS, DEFAULT_PERMISSIONS);
    set({ permissions: { ...DEFAULT_PERMISSIONS } });
  },
}));
