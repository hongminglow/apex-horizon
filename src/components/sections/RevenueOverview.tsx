import { useTranslation } from 'react-i18next';
import { useRevenueQuery } from '@/api/endpoints/dashboard';
import { CardSkeleton } from '@/components/ui/CardSkeleton';
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, ArrowUpRight, Clock } from 'lucide-react';
import { formatCurrency, formatNumber, formatPercent } from '@/lib/utils';
import { useCountdown } from '@/hooks/useCountdown';
import { usePermissionStore } from '@/features/permissions/store';

export function RevenueOverview() {
  const { data, isLoading } = useRevenueQuery();
  const { t } = useTranslation();
  const { days, hours, minutes, seconds } = useCountdown();
  const { hasPermission } = usePermissionStore();

  if (isLoading || !data) return <CardSkeleton lines={4} />;

  const isPositive = data.growth >= 0;
  const maxVal = Math.max(...data.values);

  const blocks = [
    { value: days, label: t('sections.countdown.days') },
    { value: hours, label: t('sections.countdown.hours') },
    { value: minutes, label: t('sections.countdown.minutes') },
    { value: seconds, label: t('sections.countdown.seconds') },
  ];

  return (
    <div className="rounded-xl border border-border bg-surface p-6 card-hover animate-slide-up flex flex-col h-full">
      <div className="flex items-center justify-between mb-5 shrink-0">
        <h3 className="text-sm font-semibold text-primary">{t('sections.revenue.title')}</h3>
        <span className={`flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${isPositive ? 'bg-success/10 text-success' : 'bg-error/10 text-error'}`}>
          {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {formatPercent(data.growth)}
        </span>
      </div>

      {/* Mini bar chart */}
      <div className="flex items-end gap-1.5 h-24 mb-5 shrink-0">
        {data.values.map((val, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full relative group/bar">
            {/* Tooltip */}
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-base border border-border text-primary text-[10px] font-mono px-2 py-0.5 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity pointer-events-none z-20 shadow-lg whitespace-nowrap">
              {formatCurrency(val)}
            </div>
            
            <div className="w-full flex-1 bg-accent-subtle/30 rounded-t-sm relative flex flex-col justify-end overflow-hidden">
              <div
                className="w-full rounded-t-sm transition-all duration-500 group-hover/bar:brightness-110 group-hover/bar:bg-accent"
                style={{
                  height: `${(val / maxVal) * 100}%`,
                  background: `linear-gradient(to top, var(--accent), var(--accent-hover))`,
                  opacity: 0.4 + (val / maxVal) * 0.6,
                }}
              />
            </div>
            <span className="text-[9px] text-muted font-mono">{data.labels[i]}</span>
          </div>
        ))}
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-3 gap-3 mb-5 shrink-0">
        <div className="flex flex-col items-center justify-center text-center gap-1.5 p-3 rounded-lg bg-accent-subtle h-full">
          <div className="flex items-center justify-center gap-1.5 text-muted">
            <DollarSign className="w-3 h-3 shrink-0" />
            <span className="text-[9px] uppercase tracking-wide leading-tight">{t('sections.revenue.total')}</span>
          </div>
          <span className="text-sm font-bold text-primary font-mono">{formatCurrency(data.totalRevenue)}</span>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-1.5 p-3 rounded-lg bg-accent-subtle h-full">
          <div className="flex items-center justify-center gap-1.5 text-muted">
            <ArrowUpRight className="w-3 h-3 shrink-0" />
            <span className="text-[9px] uppercase tracking-wide leading-tight">{t('sections.revenue.avg_order')}</span>
          </div>
          <span className="text-sm font-bold text-primary font-mono">{formatCurrency(data.avgOrder)}</span>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-1.5 p-3 rounded-lg bg-accent-subtle h-full">
          <div className="flex items-center justify-center gap-1.5 text-muted">
            <ShoppingCart className="w-3 h-3 shrink-0" />
            <span className="text-[9px] uppercase tracking-wide leading-tight">{t('sections.revenue.transactions')}</span>
          </div>
          <span className="text-sm font-bold text-primary font-mono">{formatNumber(data.transactions)}</span>
        </div>
      </div>

      {/* Integrated Quarter Close Countdown */}
      {hasPermission('view_countdown') && (
        <div className="mt-auto pt-5 border-t border-border">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-[11px] font-semibold text-primary uppercase tracking-wider">Quarter Close Calculation</h4>
            <Clock className="w-3.5 h-3.5 text-accent" />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {blocks.map((block) => (
              <div key={block.label} className="flex flex-col items-center gap-1 p-2 rounded-lg bg-base/50 border border-border">
                <span className="text-lg font-bold font-mono text-accent tabular-nums leading-none animate-count">
                  {String(block.value).padStart(2, '0')}
                </span>
                <span className="text-[8px] text-muted uppercase tracking-widest">{block.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
