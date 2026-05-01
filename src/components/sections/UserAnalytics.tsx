import { useTranslation } from 'react-i18next';
import { useAnalyticsQuery } from '@/api/endpoints/dashboard';
import { CardSkeleton } from '@/components/ui/CardSkeleton';
import { Users, UserPlus, UserMinus, Activity } from 'lucide-react';
import { formatNumber, formatPercent } from '@/lib/utils';

export function UserAnalytics() {
  const { data, isLoading } = useAnalyticsQuery();
  const { t } = useTranslation();

  if (isLoading || !data) return <CardSkeleton lines={5} />;

  const statCards = [
    { icon: Users, label: t('sections.analytics.total_users'), value: formatNumber(data.totalUsers), color: 'text-accent' },
    { icon: Activity, label: t('sections.analytics.active_users'), value: formatNumber(data.activeUsers), color: 'text-success' },
    { icon: UserPlus, label: t('sections.analytics.new_signups'), value: formatNumber(data.newSignups), color: 'text-info' },
    { icon: UserMinus, label: t('sections.analytics.churn_rate'), value: `${data.churnRate}%`, color: 'text-warning' },
  ];

  return (
    <div className="rounded-xl border border-border bg-surface p-6 card-hover animate-slide-up">
      <h3 className="text-sm font-semibold text-primary mb-5">{t('sections.analytics.title')}</h3>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        {statCards.map((stat) => (
          <div key={stat.label} className="flex items-center gap-3 p-3 rounded-lg bg-accent-subtle">
            <stat.icon className={`w-4 h-4 ${stat.color}`} />
            <div>
              <p className="text-[10px] text-muted uppercase tracking-wide">{stat.label}</p>
              <p className="text-sm font-bold text-primary font-mono">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Region bars */}
      <p className="text-[10px] text-muted uppercase tracking-wide mb-2">{t('sections.analytics.by_region')}</p>
      <div className="space-y-2">
        {data.regions.slice(0, 4).map((region) => {
          const maxUsers = Math.max(...data.regions.map((r) => r.users));
          const pct = (region.users / maxUsers) * 100;
          return (
            <div key={region.name} className="flex items-center gap-3">
              <span className="text-[11px] text-secondary w-28 truncate">{region.name}</span>
              <div className="flex-1 h-2 rounded-full bg-accent-subtle overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${pct}%`, background: 'linear-gradient(90deg, var(--accent), var(--gradient-end))' }}
                />
              </div>
              <span className={`text-[10px] font-mono w-14 text-right ${region.growth >= 0 ? 'text-success' : 'text-error'}`}>
                {formatPercent(region.growth)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
