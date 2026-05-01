import type { PermissionKey, Permission } from '@/types';

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
