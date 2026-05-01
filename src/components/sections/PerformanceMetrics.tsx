import { useTranslation } from "react-i18next";
import { usePerformanceQuery } from "@/api/endpoints/dashboard";
import { PerformanceSkeleton } from "@/components/ui/CardSkeleton";
import {
  Cpu,
  MemoryStick,
  Timer,
  ShieldCheck,
  AlertTriangle,
  Activity,
} from "lucide-react";
import { cn, formatPercent } from "@/lib/utils";

const ICON_MAP: Record<string, typeof Cpu> = {
  cpu: Cpu,
  "memory-stick": MemoryStick,
  timer: Timer,
  "shield-check": ShieldCheck,
  "alert-triangle": AlertTriangle,
  activity: Activity,
};

const STATUS_COLORS = {
  healthy: "text-success bg-success/10 border-success/20",
  warning: "text-warning bg-warning/10 border-warning/20",
  critical: "text-error bg-error/10 border-error/20",
} as const;

export function PerformanceMetrics() {
  const { data, isLoading } = usePerformanceQuery();
  const { t } = useTranslation();

  if (isLoading || !data) return <PerformanceSkeleton />;

  return (
    <div className="rounded-xl border border-border bg-surface p-6 card-hover animate-slide-up flex flex-col h-full">
      <h3 className="text-sm font-semibold text-primary mb-5 shrink-0">
        {t("sections.performance.title")}
      </h3>

      <div className="grid grid-cols-2 gap-3 flex-1 content-start">
        {data.map((metric) => {
          const Icon = ICON_MAP[metric.icon] ?? Activity;
          const statusClass = STATUS_COLORS[metric.status];

          return (
            <div
              key={metric.id}
              className={cn(
                "flex flex-col gap-2 p-3 rounded-lg border",
                statusClass,
              )}
            >
              <div className="flex items-center justify-between">
                <Icon className="w-4 h-4" />
                <span className="text-[9px] uppercase tracking-widest font-semibold">
                  {t(`sections.performance.${metric.status}`)}
                </span>
              </div>
              <div>
                <span className="text-lg font-bold font-mono">
                  {metric.value}
                </span>
                <span className="text-[10px] text-current/60 ml-1">
                  {metric.unit}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-current/70">
                  {metric.label}
                </span>
                {metric.change !== 0 && (
                  <span className="text-[10px] font-mono">
                    {formatPercent(metric.change)}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
