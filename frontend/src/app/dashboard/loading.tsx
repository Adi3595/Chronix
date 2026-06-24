import {
  Skeleton,
  SkeletonCard,
  SkeletonPageHeader,
  SkeletonListItem,
  SkeletonFeedItem,
  SkeletonChart,
} from "@/components/Skeleton";

export default function DashboardLoading() {
  return (
    <>
      <SkeletonPageHeader />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min">
        {/* Momentum Score card */}
        <SkeletonCard className="md:col-span-8 min-h-[320px] flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-8 w-48" />
            </div>
            <Skeleton className="h-6 w-28 rounded-full" />
          </div>
          <SkeletonChart className="flex-1 min-h-[160px]" />
        </SkeletonCard>

        {/* Today's Focus */}
        <SkeletonCard className="md:col-span-4 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <Skeleton className="h-3 w-28" />
            <Skeleton className="h-5 w-5 rounded" />
          </div>
          <div className="space-y-1">
            {Array.from({ length: 4 }).map((_, i) => (
              <SkeletonListItem key={i} />
            ))}
          </div>
          <Skeleton className="h-9 w-full rounded-lg mt-auto" />
        </SkeletonCard>

        {/* Agent Feed */}
        <SkeletonCard className="md:col-span-12">
          <Skeleton className="h-3 w-40 mb-6" />
          <div className="relative pl-4 border-l-2 border-surface-variant space-y-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <SkeletonFeedItem key={i} />
            ))}
          </div>
        </SkeletonCard>
      </div>
    </>
  );
}
