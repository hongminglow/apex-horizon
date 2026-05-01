import { useTranslation } from 'react-i18next';
import { useRevenueQuery } from '@/api/endpoints/dashboard';
import { CardSkeleton } from '@/components/ui/CardSkeleton';
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, ArrowUpRight } from 'lucide-react';
import { formatCurrency, formatNumber, formatPercent } from '@/lib/utils';

export function RevenueOverview() {
  const { data, isLoading } = useRevenueQuery();
  const { t } = useTranslation();

  if (isLoading || !data) return <CardSkeleton lines={4} />;

  const isPositive = data.growth >= 0;
  const maxVal = Math.max(...data.values);

  return (
    <div className="rounded-xl border border-border bg-surface p-6 card-hover animate-slide-up">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-sm font-semibold text-primary">{t('sections.revenue.title')}</h3>
        <span className={`flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${isPositive ? 'bg-success/10 text-success' : 'bg-error/10 text-error'}`}>
          {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {formatPercent(data.growth)}
        </span>
      </div>

      {/* Mini bar chart */}
      <div className="flex items-end gap-1 h-24 mb-5">
        {data.values.map((val, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-t-sm transition-all duration-300"
              style={{
                height: `${(val / maxVal) * 100}%`,
                background: `linear-gradient(to top, var(--accent), var(--accent-hover))`,
                opacity: 0.3 + (val / maxVal) * 0.7,
              }}
            />
            <span className="text-[9px] text-muted">{data.labels[i]}</span>
          </div>
        ))}
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col gap-1 p-3 rounded-lg bg-accent-subtle">
          <div className="flex items-center gap-1.5 text-muted">
            <DollarSign className="w-3 h-3" />
            <span className="text-[10px] uppercase tracking-wide">{t('sections.revenue.total')}</span>
          </div>
          <span className="text-sm font-bold text-primary font-mono">{formatCurrency(data.totalRevenue)}</span>
        </div>
        <div className="flex flex-col gap-1 p-3 rounded-lg bg-accent-subtle">
          <div className="flex items-center gap-1.5 text-muted">
            <ArrowUpRight className="w-3 h-3" />
            <span className="text-[10px] uppercase tracking-wide">{t('sections.revenue.avg_order')}</span>
          </div>
          <span className="text-sm font-bold text-primary font-mono">{formatCurrency(data.avgOrder)}</span>
        </div>
        <div className="flex flex-col gap-1 p-3 rounded-lg bg-accent-subtle">
          <div className="flex items-center gap-1.5 text-muted">
            <ShoppingCart className="w-3 h-3" />
            <span className="text-[10px] uppercase tracking-wide">{t('sections.revenue.transactions')}</span>
          </div>
          <span className="text-sm font-bold text-primary font-mono">{formatNumber(data.transactions)}</span>
        </div>
      </div>
    </div>
  );
}
