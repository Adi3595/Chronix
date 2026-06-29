import { Skeleton, SkeletonCard } from "@/components/Skeleton";

export default function EchoLoading() {
  return (
    <div className="pb-12 pt-8 max-w-[1440px] mx-auto w-full">
      {/* Page Header */}
      <div className="mb-12 max-w-4xl">
        <Skeleton className="h-[48px] w-64 mb-4" />
        <Skeleton className="h-6 w-full max-w-2xl" />
        <Skeleton className="h-6 w-3/4 max-w-2xl mt-2" />
      </div>

      <div className="flex flex-col gap-6 max-w-4xl">
        {/* Echo Terminal */}
        <SkeletonCard className="p-8 flex flex-col relative border border-outline rounded-3xl min-h-[400px]">
          <div className="flex justify-between items-start mb-6">
            <div>
              <Skeleton className="h-8 w-32" />
              <Skeleton className="h-4 w-48 mt-2" />
            </div>
            <Skeleton className="h-10 w-10 rounded-full" />
          </div>
          
          <Skeleton className="h-4 w-3/4 mb-8" />
          
          {/* Input Form */}
          <div className="mt-auto flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <Skeleton className="w-full md:w-1/3 h-14 rounded-xl" />
              <Skeleton className="flex-1 h-14 rounded-xl" />
            </div>
            <Skeleton className="w-full h-14 rounded-xl" />
          </div>
        </SkeletonCard>
      </div>
    </div>
  );
}
