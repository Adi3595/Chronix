import {
  Skeleton,
  SkeletonCard,
} from "@/components/Skeleton";

export default function GoalsLoading() {
  return (
    <>
      <header className="flex justify-between items-center h-20 sticky top-0 z-40 bg-background/50 backdrop-blur-xl mb-8 border-b border-outline">
        <div className="flex items-center gap-4">
          <Skeleton className="h-[48px] w-64 hidden md:block" />
          <Skeleton className="h-[32px] w-32 md:hidden" />
        </div>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-48 rounded-full" />
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 pb-24 md:pb-10 max-w-[1440px] mx-auto">
        {/* Left Column: Goal Cards */}
        <div className="xl:col-span-8 flex flex-col gap-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex space-x-6 border-b border-surface-variant/60 pb-2 w-full max-w-md">
              <Skeleton className="h-4 w-32 mb-2" />
            </div>
          </div>
          {Array.from({ length: 3 }).map((_, i) => (
            <SkeletonCard key={i} className="p-8">
              <Skeleton className="h-8 w-3/4 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6 mb-8" />
              <div className="flex items-center justify-between mt-auto">
                <Skeleton className="h-3 w-48" />
                <Skeleton className="h-8 w-24 rounded-full" />
              </div>
            </SkeletonCard>
          ))}
        </div>

        {/* Right Sidebar: Assistant */}
        <div className="xl:col-span-4 flex flex-col gap-6 mt-8 xl:mt-0">
          <SkeletonCard className="p-6 sticky top-28 border border-outline">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-outline-variant/30">
              <Skeleton className="w-10 h-10 rounded-full" />
              <div>
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-3 w-48 mt-1" />
              </div>
            </div>
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          </SkeletonCard>
        </div>
      </div>
    </>
  );
}
