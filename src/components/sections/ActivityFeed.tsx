import { useTranslation } from 'react-i18next';
import { useActivityQuery } from '@/api/endpoints/dashboard';
import { CardSkeleton } from '@/components/ui/CardSkeleton';
import { GitCommitHorizontal, Plus, Pencil, Trash2, LogIn, Rocket } from 'lucide-react';

const TYPE_CONFIG = {
  create: { icon: Plus, color: 'text-success bg-success/10' },
  update: { icon: Pencil, color: 'text-info bg-info/10' },
  delete: { icon: Trash2, color: 'text-error bg-error/10' },
  login: { icon: LogIn, color: 'text-accent bg-accent-muted' },
  deploy: { icon: Rocket, color: 'text-warning bg-warning/10' },
} as const;

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'Just now';
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

export function ActivityFeed() {
  const { data, isLoading } = useActivityQuery();
  const { t } = useTranslation();

  if (isLoading || !data) return <CardSkeleton lines={6} />;

  return (
    <div className="rounded-xl border border-border bg-surface p-6 card-hover animate-slide-up flex flex-col h-full">
      <div className="flex items-center justify-between mb-5 shrink-0">
        <h3 className="text-sm font-semibold text-primary">{t('sections.activity.title')}</h3>
        <GitCommitHorizontal className="w-4 h-4 text-muted" />
      </div>

      <div className="space-y-1 flex-1">
        {data.map((item, i) => {
          const config = TYPE_CONFIG[item.type];
          const Icon = config.icon;
          return (
            <div
              key={item.id}
              className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-accent-subtle transition-colors"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <div className={`flex items-center justify-center w-7 h-7 rounded-full shrink-0 ${config.color}`}>
                <Icon className="w-3.5 h-3.5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-primary leading-relaxed">
                  <span className="font-medium">{item.user}</span>
                  {' '}
                  <span className="text-muted">{t(`sections.activity.actions.${item.type}`)}</span>
                  {' '}
                  <span className="font-medium text-accent">{item.target}</span>
                </p>
                <p className="text-[10px] text-muted mt-0.5">{timeAgo(item.timestamp)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
