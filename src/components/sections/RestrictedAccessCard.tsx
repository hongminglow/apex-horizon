import { ShieldOff } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Props {
  sectionName: string;
}

/** Fallback card shown when user lacks permission for a section */
export function RestrictedAccessCard({ sectionName }: Props) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8 rounded-xl border border-border bg-surface min-h-[200px] animate-fade-in">
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent-muted">
        <ShieldOff className="w-7 h-7 text-accent" />
      </div>
      <div className="text-center">
        <h3 className="text-sm font-semibold text-primary mb-1">{t('errors.restricted')}</h3>
        <p className="text-xs text-muted max-w-[260px] leading-relaxed">
          {t('errors.restricted_desc')}
        </p>
      </div>
      <span className="text-[10px] uppercase tracking-widest text-muted font-mono">
        {sectionName}
      </span>
    </div>
  );
}
