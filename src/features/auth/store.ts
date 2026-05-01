import { create } from 'zustand';
import type { AuthState } from '@/types';
import { STORAGE_KEYS, DEMO_CREDENTIALS } from '@/constants';
import { getStorageItem, setStorageItem, removeStorageItem, mockDelay } from '@/lib/utils';

const MOCK_USER = {
  id: 'usr_001',
  email: DEMO_CREDENTIALS.email,
  name: 'Alex Morgan',
  avatar: 'AM',
  role: 'Administrator',
};

const MOCK_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3JfMDAxIiwibmFtZSI6IkFsZXggTW9yZ2FuIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzE0NTg4ODAwfQ.mock-signature';

export const useAuthStore = create<AuthState>((set) => ({
  user: getStorageItem(STORAGE_KEYS.AUTH_USER, null),
  token: getStorageItem(STORAGE_KEYS.AUTH_TOKEN, null),
  isAuthenticated: !!getStorageItem<string | null>(STORAGE_KEYS.AUTH_TOKEN, null),
  isLoading: false,

  login: async (credentials) => {
    set({ isLoading: true });
    await mockDelay(600, 1200);

    if (
      credentials.email === DEMO_CREDENTIALS.email &&
      credentials.password === DEMO_CREDENTIALS.password
    ) {
      setStorageItem(STORAGE_KEYS.AUTH_TOKEN, MOCK_TOKEN);
      setStorageItem(STORAGE_KEYS.AUTH_USER, MOCK_USER);
      set({
        user: MOCK_USER,
        token: MOCK_TOKEN,
        isAuthenticated: true,
        isLoading: false,
      });
    } else {
      set({ isLoading: false });
      throw new Error('Invalid credentials');
    }
  },

  logout: () => {
    removeStorageItem(STORAGE_KEYS.AUTH_TOKEN);
    removeStorageItem(STORAGE_KEYS.AUTH_USER);
    set({ user: null, token: null, isAuthenticated: false });
  },

  checkAuth: () => {
    const token = getStorageItem<string | null>(STORAGE_KEYS.AUTH_TOKEN, null);
    const user = getStorageItem(STORAGE_KEYS.AUTH_USER, null);
    set({ token, user, isAuthenticated: !!token });
  },
}));
