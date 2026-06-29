import { Skeleton, SkeletonCard, SkeletonChart } from "@/components/Skeleton";

export default function FutureSelfLoading() {
  return (
    <>
      {/* Page Header */}
      <div className="mb-12 max-w-4xl">
        <Skeleton className="h-[48px] w-64 mb-4" />
        <Skeleton className="h-6 w-full max-w-2xl" />
        <Skeleton className="h-6 w-3/4 max-w-2xl mt-2" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Main Visualization Panel (Spans 8 cols) */}
        <SkeletonCard className="xl:col-span-8 p-8 flex flex-col relative min-h-[500px]">
          <Skeleton className="h-8 w-48 mb-6" />
          <SkeletonChart className="flex-1 min-h-[300px]" />
        </SkeletonCard>

        {/* Metrics Sidebar (Spans 4 cols) */}
        <div className="xl:col-span-4 flex flex-col gap-6">
          <SkeletonCard className="p-6">
            <Skeleton className="h-4 w-24 mb-4" />
            <Skeleton className="h-10 w-16" />
          </SkeletonCard>
          
          <SkeletonCard className="p-6">
            <Skeleton className="h-4 w-24 mb-4" />
            <Skeleton className="h-10 w-16" />
          </SkeletonCard>
          
          <SkeletonCard className="p-6">
            <Skeleton className="h-4 w-32 mb-4" />
            <Skeleton className="h-10 w-16" />
          </SkeletonCard>
        </div>
      </div>
    </>
  );
}
