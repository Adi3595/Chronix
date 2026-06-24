import { Skeleton, SkeletonCard, SkeletonListItem } from "@/components/Skeleton";

export default function RescueCenterLoading() {
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <Skeleton className="h-10 w-48 mb-3" />
        <Skeleton className="h-5 w-64" />
      </div>

      {/* Alert banner */}
      <Skeleton className="h-16 w-full rounded-2xl mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Overdue tasks */}
        <SkeletonCard>
          <div className="flex items-center gap-2 mb-6">
            <Skeleton className="h-5 w-5 rounded" />
            <Skeleton className="h-3 w-32" />
          </div>
          <div className="space-y-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <SkeletonListItem key={i} />
            ))}
          </div>
        </SkeletonCard>

        {/* Recovery suggestions */}
        <SkeletonCard>
          <div className="flex items-center gap-2 mb-6">
            <Skeleton className="h-5 w-5 rounded" />
            <Skeleton className="h-3 w-40" />
          </div>
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="p-4 rounded-xl bg-surface-container-low space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-2/3" />
              </div>
            ))}
          </div>
        </SkeletonCard>
      </div>
    </>
  );
}
