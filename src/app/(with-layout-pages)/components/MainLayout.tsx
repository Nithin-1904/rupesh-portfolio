import React, { ReactElement } from "react";
import { TooltipProvider } from "~/shadcn/ui/tooltip";
import TopBar from "./TopBar";

const MainLayout = ({ children }: { children: ReactElement }) => {
  return (
    <TooltipProvider>
      <div className={"relative flex min-h-screen flex-col"}>
        <TopBar />
        <div id={"content"} className={"relative flex-1 overflow-auto"}>
          {children}
        </div>
      </div>
    </TooltipProvider>
  );
};

export default MainLayout;
