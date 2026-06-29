import {
  Skeleton,
  SkeletonCard,
  SkeletonStatCard,
  SkeletonChart,
  SkeletonFeedItem,
} from "@/components/Skeleton";

export default function AnalyticsLoading() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <Skeleton className="h-[48px] w-80 mb-4" />
          <Skeleton className="h-5 w-96" />
        </div>
        <div className="flex space-x-4">
          <Skeleton className="h-12 w-40 rounded-full" />
          <Skeleton className="h-12 w-48 rounded-full" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {Array.from({ length: 3 }).map((_, i) => (
          <SkeletonCard key={i} className="p-8 rounded-3xl h-64 flex flex-col justify-between">
            <Skeleton className="h-4 w-32 border-b pb-4 mb-6" />
            <Skeleton className="h-16 w-24" />
            <Skeleton className="h-4 w-48 mt-6" />
          </SkeletonCard>
        ))}
      </div>

      <SkeletonCard className="p-8 md:p-12 rounded-3xl">
        <Skeleton className="h-8 w-64 mb-8 pb-4" />
        
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex gap-6 items-start p-6 rounded-2xl border border-outline">
              <Skeleton className="w-12 h-12 rounded-full shrink-0" />
              <div className="flex-1 mt-1">
                <div className="flex justify-between items-start mb-2">
                  <Skeleton className="h-6 w-48" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          ))}
        </div>
      </SkeletonCard>
    </div>
  );
}
