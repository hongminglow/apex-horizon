import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/api/client/query';
import { mockDelay } from '@/lib/utils';
import {
  generateRevenueData,
  generateUserAnalytics,
  generateRankings,
  generatePerformanceMetrics,
  generateActivityFeed,
} from '@/api/mocks/dashboard';
import type { RevenueData, UserAnalyticsData, RankingEntry, PerformanceMetric, ActivityItem } from '@/types';

/* ═══════════════════════════════════════════════════════════
   Dashboard API Endpoints
   Mock API calls routed through TanStack Query
   Replace mockDelay + generators with real Axios calls
   ═══════════════════════════════════════════════════════════ */

async function fetchRevenue(): Promise<RevenueData> {
  await mockDelay();
  return generateRevenueData();
}

async function fetchAnalytics(): Promise<UserAnalyticsData> {
  await mockDelay();
  return generateUserAnalytics();
}

async function fetchRankings(): Promise<RankingEntry[]> {
  await mockDelay(100, 300);
  return generateRankings();
}

async function fetchPerformance(): Promise<PerformanceMetric[]> {
  await mockDelay();
  return generatePerformanceMetrics();
}

async function fetchActivity(): Promise<ActivityItem[]> {
  await mockDelay();
  return generateActivityFeed();
}

// ── Query Hooks ───────────────────────────────────────────

export function useRevenueQuery() {
  return useQuery({
    queryKey: queryKeys.revenue,
    queryFn: fetchRevenue,
  });
}

export function useAnalyticsQuery() {
  return useQuery({
    queryKey: queryKeys.analytics,
    queryFn: fetchAnalytics,
  });
}

export function useRankingsQuery() {
  return useQuery({
    queryKey: queryKeys.rankings,
    queryFn: fetchRankings,
    refetchInterval: 5000,  // Live data — refetch every 5s
  });
}

export function usePerformanceQuery() {
  return useQuery({
    queryKey: queryKeys.performance,
    queryFn: fetchPerformance,
    refetchInterval: 10000, // Refresh KPIs every 10s
  });
}

export function useActivityQuery() {
  return useQuery({
    queryKey: queryKeys.activity,
    queryFn: fetchActivity,
  });
}
