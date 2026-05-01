import { QueryClient } from '@tanstack/react-query';

/** TanStack Query client with enterprise caching defaults */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,       // 5 min — data stays fresh
      gcTime: 30 * 60 * 1000,          // 30 min — garbage collect
      retry: 2,
      refetchOnWindowFocus: false,
      refetchOnMount: false,            // Prevents refetch on layout switch
    },
  },
});

/** Query key factory for organized cache management */
export const queryKeys = {
  revenue: ['dashboard', 'revenue'] as const,
  analytics: ['dashboard', 'analytics'] as const,
  rankings: ['dashboard', 'rankings'] as const,
  performance: ['dashboard', 'performance'] as const,
  activity: ['dashboard', 'activity'] as const,
  countdown: ['dashboard', 'countdown'] as const,
} as const;
