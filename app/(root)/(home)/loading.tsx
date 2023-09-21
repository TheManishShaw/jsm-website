import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <Skeleton className="w-full h-[274px] rounded-lg bg-slate-400" />
      </section>
      <section className="mt-6 flex w-full flex-col sm:mt-20">
        <Skeleton className="w-56 h-10 rounded-full bg-slate-400" />
        <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
          <Skeleton className="sm:w-[356px] h-[440px] w-full bg-slate-400" />
          <Skeleton className="sm:w-[356px] h-[440px] w-full bg-slate-400" />
          <Skeleton className="sm:w-[356px] h-[440px] w-full bg-slate-400" />
        </div>
      </section>
    </main>
  );
};

export default loading;
