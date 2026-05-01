/** Skeleton loading placeholder for dashboard cards */
export function RevenueSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-surface p-6 animate-fade-in flex flex-col h-full">
      <div className="flex items-center justify-between mb-5 shrink-0">
        <div className="skeleton h-4 w-32" />
        <div className="skeleton h-4 w-12 rounded-full" />
      </div>
      
      {/* Mini bar chart */}
      <div className="flex items-end gap-1.5 h-24 mb-5 shrink-0">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full">
            <div className="w-full flex-1 bg-border/20 rounded-t-sm" />
            <div className="skeleton h-2 w-full max-w-[16px]" />
          </div>
        ))}
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-3 gap-3 mb-5 shrink-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg bg-border/10 h-[68px]">
            <div className="skeleton h-2 w-16" />
            <div className="skeleton h-3 w-12" />
          </div>
        ))}
      </div>

      {/* Quarter Close */}
      <div className="mt-auto pt-5 border-t border-border">
        <div className="flex items-center justify-between mb-3">
          <div className="skeleton h-3 w-32" />
          <div className="skeleton h-3 w-3 rounded-full" />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-2 p-2 rounded-lg bg-border/10 h-[52px]">
              <div className="skeleton h-4 w-6" />
              <div className="skeleton h-2 w-8" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AnalyticsSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-surface p-6 animate-fade-in flex flex-col h-full">
      <div className="skeleton h-4 w-32 mb-5 shrink-0" />
      
      <div className="grid grid-cols-2 gap-3 mb-5 shrink-0">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-border/10 h-[52px]">
            <div className="skeleton h-6 w-6 rounded-full shrink-0" />
            <div className="space-y-1.5 flex-1">
              <div className="skeleton h-2 w-16" />
              <div className="skeleton h-3 w-10" />
            </div>
          </div>
        ))}
      </div>

      <div className="skeleton h-2 w-20 mb-3 shrink-0" />
      <div className="space-y-3 shrink-0">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="skeleton h-2 w-24 shrink-0" />
            <div className="skeleton h-2 flex-1" />
            <div className="skeleton h-2 w-8 shrink-0" />
          </div>
        ))}
      </div>

      <div className="mt-auto pt-5 border-t border-border">
        <div className="skeleton h-2 w-24 mb-3" />
        <div className="skeleton h-3 w-full rounded-full mb-3" />
        <div className="flex items-center justify-between">
          <div className="skeleton h-2 w-16" />
          <div className="skeleton h-2 w-16" />
          <div className="skeleton h-2 w-16" />
        </div>
      </div>
    </div>
  );
}

export function PerformanceSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-surface p-6 animate-fade-in flex flex-col h-full">
      <div className="skeleton h-4 w-32 mb-5 shrink-0" />
      
      <div className="grid grid-cols-2 gap-3 flex-1 content-start">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-2 p-3 rounded-lg border border-border h-[84px]">
            <div className="flex justify-between items-center">
              <div className="skeleton h-4 w-4 rounded-full" />
              <div className="skeleton h-2 w-12" />
            </div>
            <div className="skeleton h-4 w-16 mt-1" />
            <div className="flex justify-between items-center mt-auto">
              <div className="skeleton h-2 w-16" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RankingsSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-surface p-6 animate-fade-in flex flex-col h-full">
      <div className="flex items-center justify-between mb-5 shrink-0">
        <div className="skeleton h-4 w-32" />
        <div className="skeleton h-3 w-12" />
      </div>

      <div className="grid grid-cols-[32px_1fr_80px_56px] gap-2 mb-3 px-2 shrink-0">
        <div className="skeleton h-2 w-full" />
        <div className="skeleton h-2 w-full" />
        <div className="skeleton h-2 w-full" />
        <div className="skeleton h-2 w-full" />
      </div>

      <div className="space-y-1 flex-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="grid grid-cols-[32px_1fr_80px_56px] gap-2 items-center px-2 py-2 h-[44px]">
            <div className="skeleton h-3 w-4" />
            <div className="flex items-center gap-2.5">
              <div className="skeleton h-7 w-7 rounded-full shrink-0" />
              <div className="skeleton h-3 w-24" />
            </div>
            <div className="flex justify-end"><div className="skeleton h-3 w-12" /></div>
            <div className="flex justify-end"><div className="skeleton h-3 w-8" /></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ActivitySkeleton() {
  return (
    <div className="rounded-xl border border-border bg-surface p-6 animate-fade-in flex flex-col h-full">
      <div className="flex items-center justify-between mb-5 shrink-0">
        <div className="skeleton h-4 w-32" />
        <div className="skeleton h-4 w-4 rounded-full" />
      </div>

      <div className="space-y-1 flex-1">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex items-start gap-3 p-2.5 h-[52px]">
            <div className="skeleton h-7 w-7 rounded-full shrink-0" />
            <div className="flex-1 space-y-2 mt-1">
              <div className="skeleton h-2 w-full max-w-[200px]" />
              <div className="skeleton h-1.5 w-16" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Fallback skeleton for generic usage */
export function CardSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-6 animate-fade-in flex flex-col h-full">
      <div className="skeleton h-4 w-1/3 mb-6 shrink-0" />
      <div className="space-y-3 flex-1">
        {Array.from({ length: lines }, (_, i) => (
          <div key={i} className="skeleton h-3" style={{ width: `${85 - i * 12}%` }} />
        ))}
      </div>
      <div className="flex gap-3 mt-6 shrink-0">
        <div className="skeleton h-8 w-20 rounded-lg" />
        <div className="skeleton h-8 w-20 rounded-lg" />
      </div>
    </div>
  );
}
