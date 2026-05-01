import { useTranslation } from 'react-i18next';
import { useLayoutStore } from '@/features/layout/store';
import { Search, Bell } from 'lucide-react';

export function AppBar() {
  const { t } = useTranslation();
  const { variant } = useLayoutStore();

  const layoutLabels = { grid: t('controls.grid'), compact: t('controls.compact'), wide: t('controls.wide') };

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-4 px-6 py-3 border-b border-border bg-[var(--appbar-bg)] backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <h1 className="text-sm font-semibold text-primary">{t('nav.dashboard')}</h1>
        <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-accent-muted text-accent">
          {layoutLabels[variant]}
        </span>
      </div>

      <div className="flex items-center gap-2">
        {/* Search */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--input-bg)] border border-[var(--input-border)] w-56">
          <Search className="w-3.5 h-3.5 text-muted" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 bg-transparent text-xs text-primary placeholder:text-muted outline-none"
          />
          <kbd className="text-[9px] text-muted font-mono px-1.5 py-0.5 rounded border border-border bg-base">⌘K</kbd>
        </div>

        {/* Notifications */}
        <button type="button" className="relative p-2 rounded-lg hover:bg-accent-subtle text-muted hover:text-primary transition-colors cursor-pointer" aria-label="Notifications">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
        </button>
      </div>
    </header>
  );
}
