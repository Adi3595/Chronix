import {
  Skeleton,
  SkeletonCard,
  SkeletonStatCard,
  SkeletonChart,
  SkeletonFeedItem,
} from "@/components/Skeleton";

export default function AnalyticsLoading() {
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <Skeleton className="h-10 w-44 mb-3" />
        <Skeleton className="h-5 w-60" />
      </div>

      {/* Stat strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonStatCard key={i} />
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <SkeletonCard>
          <Skeleton className="h-3 w-32 mb-4" />
          <SkeletonChart />
        </SkeletonCard>
        <SkeletonCard>
          <Skeleton className="h-3 w-32 mb-4" />
          <SkeletonChart />
        </SkeletonCard>
      </div>

      {/* Agent activity */}
      <SkeletonCard>
        <Skeleton className="h-3 w-40 mb-6" />
        <div className="relative pl-4 border-l-2 border-surface-variant space-y-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonFeedItem key={i} />
          ))}
        </div>
      </SkeletonCard>
    </>
  );
}
