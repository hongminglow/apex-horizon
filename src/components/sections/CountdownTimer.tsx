import { useTranslation } from 'react-i18next';
import { useCountdown } from '@/hooks/useCountdown';
import { COUNTDOWN_TARGET } from '@/constants';
import { Clock, Rocket } from 'lucide-react';

export function CountdownTimer() {
  const { days, hours, minutes, seconds } = useCountdown();
  const { t } = useTranslation();

  const blocks = [
    { value: days, label: t('sections.countdown.days') },
    { value: hours, label: t('sections.countdown.hours') },
    { value: minutes, label: t('sections.countdown.minutes') },
    { value: seconds, label: t('sections.countdown.seconds') },
  ];

  return (
    <div className="rounded-xl border border-border bg-surface p-6 card-hover animate-slide-up overflow-hidden relative">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-subtle to-transparent pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-sm font-semibold text-primary">{t('sections.countdown.title')}</h3>
          <Clock className="w-4 h-4 text-accent" />
        </div>

        {/* Countdown blocks */}
        <div className="grid grid-cols-4 gap-2 mb-5">
          {blocks.map((block) => (
            <div key={block.label} className="flex flex-col items-center gap-1 p-3 rounded-lg bg-base/50 border border-border">
              <span className="text-2xl font-bold font-mono text-accent tabular-nums leading-none animate-count">
                {String(block.value).padStart(2, '0')}
              </span>
              <span className="text-[9px] text-muted uppercase tracking-widest">{block.label}</span>
            </div>
          ))}
        </div>

        {/* Target info */}
        <div className="flex items-center gap-2 p-3 rounded-lg bg-accent-subtle">
          <Rocket className="w-4 h-4 text-accent shrink-0" />
          <div>
            <p className="text-xs font-medium text-primary">{COUNTDOWN_TARGET.label}</p>
            <p className="text-[10px] text-muted">{COUNTDOWN_TARGET.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
