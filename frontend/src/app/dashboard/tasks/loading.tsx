import {
  Skeleton,
  SkeletonCard,
  SkeletonListItem,
} from "@/components/Skeleton";

export default function TasksLoading() {
  return (
    <>
      <header className="flex justify-between items-center h-20 sticky top-0 z-40 bg-background/50 backdrop-blur-xl mb-8 border-b border-outline">
        <div></div> {/* Spacer */}
        <div className="flex items-center space-x-6">
          <Skeleton className="w-8 h-8 rounded-full" />
          <Skeleton className="h-12 w-36 rounded-full" />
          <Skeleton className="w-8 h-8 rounded-full" />
        </div>
      </header>

      <div className="pb-12 max-w-[1440px] mx-auto">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <Skeleton className="h-[48px] w-64 mb-4" />
            <Skeleton className="h-5 w-96" />
          </div>
          <div className="flex space-x-2 bg-surface/40 backdrop-blur-xl border border-outline p-1 rounded-2xl">
            <Skeleton className="h-10 w-28 rounded-xl" />
            <Skeleton className="h-10 w-28 rounded-xl" />
          </div>
        </div>

        {/* Sentinel Suggestion Skeleton */}
        <SkeletonCard className="p-8 rounded-3xl mb-12 flex items-start space-x-6">
          <Skeleton className="w-16 h-16 rounded-full" />
          <div className="flex-1">
            <Skeleton className="h-4 w-40 mb-4" />
            <Skeleton className="h-6 w-full max-w-2xl mb-6" />
            <div className="flex gap-4">
              <Skeleton className="h-10 w-32 rounded-full" />
              <Skeleton className="h-10 w-24 rounded-full" />
            </div>
          </div>
        </SkeletonCard>

        {/* Task Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <Skeleton className="h-4 w-12" />
                <Skeleton className="h-6 w-6 rounded-md" />
              </div>
              <Skeleton className="h-6 w-48 mb-2" />
              <Skeleton className="h-4 w-full mb-8" />
              <div className="flex justify-between items-end mt-auto border-t border-outline-variant/30 pt-4">
                <Skeleton className="h-8 w-24 rounded-full" />
                <Skeleton className="w-8 h-8 rounded-full" />
              </div>
            </SkeletonCard>
          ))}
        </div>
      </div>
    </>
  );
}
