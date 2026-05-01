import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShieldOff, FileQuestion, ServerCrash, WifiOff, ArrowLeft, Home } from 'lucide-react';

const ERROR_CONFIGS = {
  '403': { icon: ShieldOff, color: 'text-warning', titleKey: '403_title', descKey: '403_desc' },
  '404': { icon: FileQuestion, color: 'text-accent', titleKey: '404_title', descKey: '404_desc' },
  '500': { icon: ServerCrash, color: 'text-error', titleKey: '500_title', descKey: '500_desc' },
  'network': { icon: WifiOff, color: 'text-muted', titleKey: 'network_title', descKey: 'network_desc' },
} as const;

export function ErrorPage() {
  const { code = '404' } = useParams<{ code: string }>();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const config = ERROR_CONFIGS[code as keyof typeof ERROR_CONFIGS] ?? ERROR_CONFIGS['404'];
  const Icon = config.icon;

  return (
    <div className="min-h-screen flex items-center justify-center bg-base p-4">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-accent/3 blur-[150px]" />
      </div>

      <div className="relative text-center max-w-md animate-slide-up">
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-surface border border-border mb-6 ${config.color}`}>
          <Icon className="w-10 h-10" />
        </div>

        {code !== 'network' && (
          <p className="text-6xl font-bold font-mono text-accent/20 mb-2">{code}</p>
        )}

        <h1 className="text-xl font-bold text-primary mb-2">
          {t(`errors.${config.titleKey}`)}
        </h1>
        <p className="text-sm text-muted mb-8 max-w-xs mx-auto leading-relaxed">
          {t(`errors.${config.descKey}`)}
        </p>

        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-medium text-secondary hover:text-primary hover:border-border-hover transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('errors.go_back')}
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors cursor-pointer"
          >
            <Home className="w-4 h-4" />
            {t('errors.go_home')}
          </button>
        </div>
      </div>
    </div>
  );
}
