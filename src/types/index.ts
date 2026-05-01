/* ═══════════════════════════════════════════════════════════
   Apex Horizon — Type Definitions
   Central type barrel for the entire application
   ═══════════════════════════════════════════════════════════ */

// ── Theme Types ───────────────────────────────────────────
export type ThemeMode = 'dark' | 'light';
export type ColorPalette = 'horizon' | 'emerald' | 'violet' | 'amber' | 'rose';

export interface PaletteConfig {
  id: ColorPalette;
  label: string;
  color: string;
}

// ── Layout Types ──────────────────────────────────────────
export type LayoutVariant = 'grid' | 'compact' | 'wide';

export interface LayoutConfig {
  id: LayoutVariant;
  label: string;
  icon: string;
  columns: number;
}

// ── Auth Types ────────────────────────────────────────────
export interface AuthUser {
  id: string;
  email: string;
  name: string;
  avatar: string;
  role: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: AuthUser;
}

export interface AuthState {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  checkAuth: () => void;
}

// ── Permission Types ──────────────────────────────────────
export type PermissionKey =
  | 'view_revenue'
  | 'view_analytics'
  | 'view_rankings'
  | 'view_performance'
  | 'view_countdown'
  | 'view_activity';

export interface Permission {
  key: PermissionKey;
  label: string;
  description: string;
}

export interface PermissionState {
  permissions: Record<PermissionKey, boolean>;
  togglePermission: (key: PermissionKey) => void;
  hasPermission: (key: PermissionKey) => boolean;
  resetPermissions: () => void;
}

// ── Dashboard Data Types ──────────────────────────────────
export interface RevenueData {
  labels: string[];
  values: number[];
  totalRevenue: number;
  growth: number;
  avgOrder: number;
  transactions: number;
}

export interface UserAnalyticsData {
  totalUsers: number;
  activeUsers: number;
  newSignups: number;
  churnRate: number;
  regions: Array<{ name: string; users: number; growth: number }>;
  deviceBreakdown: Array<{ device: string; percentage: number }>;
}

export interface RankingEntry {
  id: string;
  rank: number;
  name: string;
  score: number;
  change: number;
  avatar: string;
  trend: 'up' | 'down' | 'stable';
}

export interface PerformanceMetric {
  id: string;
  label: string;
  value: number;
  unit: string;
  change: number;
  status: 'healthy' | 'warning' | 'critical';
  icon: string;
}

export interface ActivityItem {
  id: string;
  user: string;
  action: string;
  target: string;
  timestamp: string;
  type: 'create' | 'update' | 'delete' | 'login' | 'deploy';
}

export interface CountdownTarget {
  label: string;
  targetDate: string;
  description: string;
}

// ── API Types ─────────────────────────────────────────────
export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
  timestamp: string;
}

export interface ApiError {
  status: number;
  message: string;
  code: string;
}

// ── Store Types ───────────────────────────────────────────
export interface ThemeState {
  mode: ThemeMode;
  palette: ColorPalette;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
  setPalette: (palette: ColorPalette) => void;
}

export interface LayoutState {
  variant: LayoutVariant;
  sidebarCollapsed: boolean;
  setVariant: (variant: LayoutVariant) => void;
  toggleSidebar: () => void;
}

// ── i18n Types ────────────────────────────────────────────
export type SupportedLanguage = 'en' | 'zh';

export interface LanguageOption {
  code: SupportedLanguage;
  label: string;
  nativeLabel: string;
}
