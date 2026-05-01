import type { PaletteConfig, LayoutConfig, Permission, PermissionKey, LanguageOption, CountdownTarget } from '@/types';

/* ═══════════════════════════════════════════════════════════
   Apex Horizon — Application Constants
   All hardcoded values live here, never in components
   ═══════════════════════════════════════════════════════════ */

// ── App Meta ──────────────────────────────────────────────
export const APP_NAME = 'Apex Horizon';
export const APP_VERSION = '1.0.0';

// ── Storage Keys ──────────────────────────────────────────
export const STORAGE_KEYS = {
  THEME_MODE: 'apex-theme-mode',
  COLOR_PALETTE: 'apex-color-palette',
  LAYOUT_VARIANT: 'apex-layout-variant',
  SIDEBAR_COLLAPSED: 'apex-sidebar-collapsed',
  AUTH_TOKEN: 'apex-auth-token',
  AUTH_USER: 'apex-auth-user',
  PERMISSIONS: 'apex-permissions',
  LANGUAGE: 'apex-language',
} as const;

// ── Color Palettes ────────────────────────────────────────
export const PALETTES: PaletteConfig[] = [
  { id: 'horizon', label: 'Horizon Blue', color: '#3B82F6' },
  { id: 'emerald', label: 'Emerald Pulse', color: '#10B981' },
  { id: 'violet', label: 'Violet Storm', color: '#8B5CF6' },
  { id: 'amber', label: 'Amber Flare', color: '#F59E0B' },
  { id: 'rose', label: 'Rose Quartz', color: '#F43F5E' },
];

// ── Layout Configurations ─────────────────────────────────
export const LAYOUTS: LayoutConfig[] = [
  { id: 'grid', label: 'Grid', icon: 'grid', columns: 3 },
  { id: 'compact', label: 'Compact', icon: 'layout-grid', columns: 2 },
  { id: 'wide', label: 'Wide', icon: 'layout-list', columns: 1 },
];

// ── Permissions ───────────────────────────────────────────
export const DEFAULT_PERMISSIONS: Record<PermissionKey, boolean> = {
  view_revenue: true,
  view_analytics: true,
  view_rankings: true,
  view_performance: true,
  view_countdown: true,
  view_activity: true,
};

export const PERMISSION_DEFINITIONS: Permission[] = [
  { key: 'view_revenue', label: 'Revenue Overview', description: 'Access revenue charts and financial data' },
  { key: 'view_analytics', label: 'User Analytics', description: 'Access user analytics and demographics' },
  { key: 'view_rankings', label: 'Live Rankings', description: 'Access real-time leaderboard data' },
  { key: 'view_performance', label: 'Performance Metrics', description: 'Access system performance KPIs' },
  { key: 'view_countdown', label: 'Countdown Timer', description: 'Access event countdown timer' },
  { key: 'view_activity', label: 'Activity Feed', description: 'Access recent activity log' },
];

// ── Languages ─────────────────────────────────────────────
export const LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'zh', label: 'Chinese', nativeLabel: '中文' },
];

// ── Countdown Target ──────────────────────────────────────
export const COUNTDOWN_TARGET: CountdownTarget = {
  label: 'Product Launch',
  targetDate: '2026-08-15T00:00:00Z',
  description: 'Apex Horizon v2.0 public release',
};

// ── API Configuration ─────────────────────────────────────
export const API_CONFIG = {
  BASE_URL: '/api/v1',
  TIMEOUT: 10000,
  MOCK_DELAY_MIN: 150,
  MOCK_DELAY_MAX: 500,
} as const;

// ── Demo Credentials ──────────────────────────────────────
export const DEMO_CREDENTIALS = {
  email: 'admin@apex-horizon.io',
  password: 'demo1234',
} as const;
