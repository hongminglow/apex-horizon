import { useLayoutStore } from '@/features/layout/store';
import { usePermissionStore } from '@/features/permissions/store';
import { DashboardShell } from '@/components/layouts/DashboardShell';
import { SectionErrorBoundary } from '@/components/sections/SectionErrorBoundary';
import { RestrictedAccessCard } from '@/components/sections/RestrictedAccessCard';
import { RevenueOverview } from '@/components/sections/RevenueOverview';
import { UserAnalytics } from '@/components/sections/UserAnalytics';
import { LiveRankings } from '@/components/sections/LiveRankings';
import { PerformanceMetrics } from '@/components/sections/PerformanceMetrics';
import { CountdownTimer } from '@/components/sections/CountdownTimer';
import { ActivityFeed } from '@/components/sections/ActivityFeed';
import type { PermissionKey } from '@/types';
import { cn } from '@/lib/utils';

interface SectionConfig {
  id: string;
  permission: PermissionKey;
  component: React.ComponentType;
  label: string;
  /** span 2 columns in grid layout */
  wide?: boolean;
}

const SECTIONS: SectionConfig[] = [
  { id: 'revenue', permission: 'view_revenue', component: RevenueOverview, label: 'Revenue Overview' },
  { id: 'analytics', permission: 'view_analytics', component: UserAnalytics, label: 'User Analytics' },
  { id: 'performance', permission: 'view_performance', component: PerformanceMetrics, label: 'Performance Metrics' },
  { id: 'countdown', permission: 'view_countdown', component: CountdownTimer, label: 'Countdown Timer' },
  { id: 'rankings', permission: 'view_rankings', component: LiveRankings, label: 'Live Rankings', wide: true },
  { id: 'activity', permission: 'view_activity', component: ActivityFeed, label: 'Activity Feed', wide: true },
];

const LAYOUT_CLASSES = {
  grid: 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5',
  compact: 'grid grid-cols-1 lg:grid-cols-2 gap-4',
  wide: 'flex flex-col gap-5 max-w-4xl mx-auto',
} as const;

export function DashboardPage() {
  const { variant } = useLayoutStore();
  const { hasPermission } = usePermissionStore();

  return (
    <DashboardShell>
      <div className={cn(LAYOUT_CLASSES[variant], 'animate-fade-in')}>
        {SECTIONS.map((section) => {
          const Component = section.component;
          const spanWide = section.wide && variant === 'grid';
          return (
            <div key={section.id} className={cn(spanWide && 'md:col-span-2 xl:col-span-3')}>
              <SectionErrorBoundary sectionName={section.label}>
                {hasPermission(section.permission) ? (
                  <Component />
                ) : (
                  <RestrictedAccessCard sectionName={section.label} />
                )}
              </SectionErrorBoundary>
            </div>
          );
        })}
      </div>
    </DashboardShell>
  );
}
