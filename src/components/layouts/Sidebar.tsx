import { useTranslation } from 'react-i18next';
import { useThemeStore } from '@/features/theme/store';
import { useLayoutStore } from '@/features/layout/store';
import { usePermissionStore } from '@/features/permissions/store';
import { useAuthStore } from '@/features/auth/store';
import { PALETTES, PERMISSION_DEFINITIONS, LANGUAGES } from '@/constants';
import type { ColorPalette } from '@/types';
import { useNavigate } from 'react-router-dom';
import {
  Sun, Moon, LayoutGrid, LayoutList, Columns3, PanelLeftClose, PanelLeft,
  ChevronDown, Globe, Shield, AlertCircle, LogOut, Zap,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export function Sidebar() {
  const { t, i18n } = useTranslation();
  const { mode, toggleMode, palette, setPalette } = useThemeStore();
  const { variant, setVariant, sidebarCollapsed, toggleSidebar } = useLayoutStore();
  const { permissions, togglePermission, resetPermissions } = usePermissionStore();
  const { logout, user } = useAuthStore();
  const navigate = useNavigate();

  const [permOpen, setPermOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  const layoutIcons = {
    grid: LayoutGrid,
    compact: Columns3,
    wide: LayoutList,
  } as const;

  if (sidebarCollapsed) {
    return (
      <aside className="flex flex-col items-center py-4 gap-4 w-14 shrink-0 border-r border-border bg-[var(--sidebar-bg)] h-screen sticky top-0">
        <button type="button" onClick={toggleSidebar} className="p-2 rounded-lg hover:bg-accent-subtle text-muted hover:text-primary transition-colors cursor-pointer" aria-label="Expand sidebar">
          <PanelLeft className="w-4 h-4" />
        </button>
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center">
          <Zap className="w-4 h-4 text-white" />
        </div>
      </aside>
    );
  }

  return (
    <aside className="flex flex-col w-64 shrink-0 border-r border-border bg-[var(--sidebar-bg)] h-screen sticky top-0 animate-slide-right overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-bold text-primary gradient-text">Apex Horizon</span>
        </div>
        <button type="button" onClick={toggleSidebar} className="p-1.5 rounded-lg hover:bg-accent-subtle text-muted hover:text-primary transition-colors cursor-pointer" aria-label="Collapse sidebar">
          <PanelLeftClose className="w-4 h-4" />
        </button>
      </div>

      {/* User card */}
      <div className="flex items-center gap-3 p-4 border-b border-border">
        <div className="w-9 h-9 rounded-full bg-accent-muted flex items-center justify-center text-accent text-xs font-bold">
          {user?.avatar ?? 'AH'}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-primary truncate">{user?.name ?? 'Guest'}</p>
          <p className="text-[10px] text-muted truncate">{user?.role ?? 'Viewer'}</p>
        </div>
      </div>

      {/* Control Center */}
      <div className="flex-1 p-4 space-y-5 overflow-y-auto">
        <h4 className="text-[10px] uppercase tracking-[0.15em] text-muted font-semibold mb-2">{t('controls.title')}</h4>

        {/* Theme toggle */}
        <div className="space-y-2">
          <label className="text-[11px] text-secondary font-medium">{t('controls.theme')}</label>
          <div className="flex gap-1 p-0.5 rounded-lg bg-[var(--input-bg)] border border-[var(--input-border)]">
            <button type="button" onClick={() => { if (mode !== 'dark') toggleMode(); }} className={cn('flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-md text-[11px] font-medium transition-all cursor-pointer', mode === 'dark' ? 'bg-accent text-white shadow-sm' : 'text-muted hover:text-primary')}>
              <Moon className="w-3 h-3" /> {t('controls.dark')}
            </button>
            <button type="button" onClick={() => { if (mode !== 'light') toggleMode(); }} className={cn('flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-md text-[11px] font-medium transition-all cursor-pointer', mode === 'light' ? 'bg-accent text-white shadow-sm' : 'text-muted hover:text-primary')}>
              <Sun className="w-3 h-3" /> {t('controls.light')}
            </button>
          </div>
        </div>

        {/* Palette */}
        <div className="space-y-2">
          <label className="text-[11px] text-secondary font-medium">{t('controls.palette')}</label>
          <div className="flex gap-2">
            {PALETTES.map((p) => (
              <button
                key={p.id}
                type="button"
                title={p.label}
                onClick={() => setPalette(p.id as ColorPalette)}
                className={cn(
                  'w-7 h-7 rounded-full transition-all cursor-pointer border-2',
                  palette === p.id ? 'border-primary scale-110 ring-2 ring-accent/30' : 'border-transparent hover:scale-105'
                )}
                style={{ background: p.color }}
              />
            ))}
          </div>
        </div>

        {/* Layout */}
        <div className="space-y-2">
          <label className="text-[11px] text-secondary font-medium">{t('controls.layout')}</label>
          <div className="flex gap-1 p-0.5 rounded-lg bg-[var(--input-bg)] border border-[var(--input-border)]">
            {(['grid', 'compact', 'wide'] as const).map((v) => {
              const Icon = layoutIcons[v];
              return (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVariant(v)}
                  className={cn('flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-md text-[11px] font-medium transition-all cursor-pointer', variant === v ? 'bg-accent text-white shadow-sm' : 'text-muted hover:text-primary')}
                >
                  <Icon className="w-3 h-3" />
                  {t(`controls.${v}`)}
                </button>
              );
            })}
          </div>
        </div>

        {/* Language */}
        <div className="space-y-2">
          <label className="text-[11px] text-secondary font-medium">{t('controls.language')}</label>
          <div className="flex gap-1 p-0.5 rounded-lg bg-[var(--input-bg)] border border-[var(--input-border)]">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => i18n.changeLanguage(lang.code)}
                className={cn('flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-md text-[11px] font-medium transition-all cursor-pointer', i18n.language === lang.code ? 'bg-accent text-white shadow-sm' : 'text-muted hover:text-primary')}
              >
                <Globe className="w-3 h-3" />
                {lang.nativeLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Permissions */}
        <div className="space-y-2">
          <button type="button" onClick={() => setPermOpen(!permOpen)} className="flex items-center justify-between w-full text-[11px] text-secondary font-medium cursor-pointer">
            <span className="flex items-center gap-1.5"><Shield className="w-3 h-3" /> {t('controls.permissions')}</span>
            <ChevronDown className={cn('w-3 h-3 transition-transform', permOpen && 'rotate-180')} />
          </button>
          {permOpen && (
            <div className="space-y-1.5 animate-fade-in">
              {PERMISSION_DEFINITIONS.map((perm) => (
                <label key={perm.key} className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-accent-subtle transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    checked={permissions[perm.key]}
                    onChange={() => togglePermission(perm.key)}
                    className="w-3.5 h-3.5 rounded accent-[var(--accent)] cursor-pointer"
                  />
                  <div>
                    <p className="text-[11px] text-primary">{perm.label}</p>
                    <p className="text-[9px] text-muted">{perm.description}</p>
                  </div>
                </label>
              ))}
              <button type="button" onClick={resetPermissions} className="w-full text-[10px] text-accent hover:underline mt-1 cursor-pointer">
                {t('controls.reset_permissions')}
              </button>
            </div>
          )}
        </div>

        {/* Error demos */}
        <div className="space-y-2">
          <button type="button" onClick={() => setErrorOpen(!errorOpen)} className="flex items-center justify-between w-full text-[11px] text-secondary font-medium cursor-pointer">
            <span className="flex items-center gap-1.5"><AlertCircle className="w-3 h-3" /> {t('controls.error_demos')}</span>
            <ChevronDown className={cn('w-3 h-3 transition-transform', errorOpen && 'rotate-180')} />
          </button>
          {errorOpen && (
            <div className="grid grid-cols-2 gap-1.5 animate-fade-in">
              {['403', '404', '500', 'network'].map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => navigate(`/error/${code}`)}
                  className="px-3 py-2 text-[10px] font-mono font-semibold rounded-lg bg-error/8 text-error hover:bg-error/15 transition-colors cursor-pointer"
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <button
          type="button"
          onClick={() => { logout(); navigate('/login'); }}
          className="flex items-center gap-2 w-full px-3 py-2 text-[11px] font-medium text-error/80 hover:text-error hover:bg-error/8 rounded-lg transition-colors cursor-pointer"
        >
          <LogOut className="w-3.5 h-3.5" />
          {t('auth.logout')}
        </button>
      </div>
    </aside>
  );
}
