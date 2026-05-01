import axios from 'axios';
import { API_CONFIG, STORAGE_KEYS } from '@/constants';
import { getStorageItem } from '@/lib/utils';

/** Configured Axios instance with interceptors */
const apiClient = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    'X-Client-Version': '1.0.0',
  },
});

// ── Request Interceptor ───────────────────────────────────
apiClient.interceptors.request.use(
  (config) => {
    const token = getStorageItem<string | null>(STORAGE_KEYS.AUTH_TOKEN, null);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (import.meta.env.DEV) {
      console.log(`[API] ${config.method?.toUpperCase()} ${config.url}`);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ── Response Interceptor ──────────────────────────────────
apiClient.interceptors.response.use(
  (response) => {
    if (import.meta.env.DEV) {
      console.log(`[API] ✓ ${response.status} ${response.config.url}`);
    }
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
      localStorage.removeItem(STORAGE_KEYS.AUTH_USER);
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
