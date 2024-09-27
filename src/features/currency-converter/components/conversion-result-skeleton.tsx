"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ConversionResultSkeleton: React.FC = () => {
  return (
    <div className="relative mt-8 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-6 text-center shadow-lg">
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
      <div className="w-full space-y-2">
        {/* Converted Amount label */}
        <Skeleton className="mx-auto h-4 w-32 bg-gray-200" />

        {/* From currency amount */}
        <div className="flex items-center justify-center space-x-2">
          <Skeleton className="h-8 w-40 bg-gray-200" />
        </div>

        {/* To currency amount */}
        <Skeleton className="mx-auto h-10 w-48 bg-gray-200" />
      </div>

      {/* Exchange rate */}
      <div className="mt-4">
        <Skeleton className="mx-auto h-4 w-56 bg-gray-200" />
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 -mb-8 -mr-8 h-24 w-24 rounded-tl-full bg-gradient-to-tl from-indigo-200 to-purple-200 opacity-50"></div>
    </div>
  );
};

export default ConversionResultSkeleton;