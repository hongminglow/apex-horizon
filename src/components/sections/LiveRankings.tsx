import { useTranslation } from 'react-i18next';
import { useRankingsQuery } from '@/api/endpoints/dashboard';
import { CardSkeleton } from '@/components/ui/CardSkeleton';
import { TrendingUp, TrendingDown, Minus, Radio } from 'lucide-react';
import { formatNumber } from '@/lib/utils';

export function LiveRankings() {
  const { data, isLoading } = useRankingsQuery();
  const { t } = useTranslation();

  if (isLoading || !data) return <CardSkeleton lines={6} />;

  return (
    <div className="rounded-xl border border-border bg-surface p-6 card-hover animate-slide-up">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-sm font-semibold text-primary">{t('sections.rankings.title')}</h3>
        <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-error">
          <Radio className="w-3 h-3 animate-pulse-soft" />
          {t('sections.rankings.live')}
        </span>
      </div>

      {/* Table header */}
      <div className="grid grid-cols-[32px_1fr_80px_56px] gap-2 text-[10px] text-muted uppercase tracking-wide mb-2 px-2">
        <span>{t('sections.rankings.rank')}</span>
        <span>{t('sections.rankings.name')}</span>
        <span className="text-right">{t('sections.rankings.score')}</span>
        <span className="text-right">{t('sections.rankings.change')}</span>
      </div>

      {/* Rows */}
      <div className="space-y-1">
        {data.map((entry, i) => (
          <div
            key={entry.id}
            className="grid grid-cols-[32px_1fr_80px_56px] gap-2 items-center px-2 py-2 rounded-lg hover:bg-accent-subtle transition-colors"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <span className={`text-xs font-bold font-mono ${entry.rank <= 3 ? 'text-accent' : 'text-muted'}`}>
              #{entry.rank}
            </span>
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-accent-muted text-accent text-[10px] font-bold shrink-0">
                {entry.avatar}
              </div>
              <span className="text-xs text-primary truncate">{entry.name}</span>
            </div>
            <span className="text-xs font-mono text-secondary text-right">{formatNumber(entry.score)}</span>
            <div className="flex items-center justify-end gap-0.5">
              {entry.trend === 'up' && <TrendingUp className="w-3 h-3 text-success" />}
              {entry.trend === 'down' && <TrendingDown className="w-3 h-3 text-error" />}
              {entry.trend === 'stable' && <Minus className="w-3 h-3 text-muted" />}
              <span className={`text-[10px] font-mono ${entry.trend === 'up' ? 'text-success' : entry.trend === 'down' ? 'text-error' : 'text-muted'}`}>
                {entry.change > 0 ? `+${entry.change}` : entry.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
