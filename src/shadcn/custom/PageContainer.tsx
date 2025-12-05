import React from "react";
import { cn } from "~/lib/utils";

const PageContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <main
      className={cn(
        "h-full w-full flex flex-col items-start gap-3 px-3 overflow-hidden sm:px-[100px] py-6",
        className
      )}
    >
      {children}
    </main>
  );
};

export default PageContainer;
