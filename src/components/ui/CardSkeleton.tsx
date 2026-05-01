/** Skeleton loading placeholder for dashboard cards */
export function CardSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-6 animate-fade-in">
      <div className="skeleton h-4 w-1/3 mb-6" />
      <div className="space-y-3">
        {Array.from({ length: lines }, (_, i) => (
          <div key={i} className="skeleton h-3" style={{ width: `${85 - i * 12}%` }} />
        ))}
      </div>
      <div className="flex gap-3 mt-6">
        <div className="skeleton h-8 w-20 rounded-lg" />
        <div className="skeleton h-8 w-20 rounded-lg" />
      </div>
    </div>
  );
}
