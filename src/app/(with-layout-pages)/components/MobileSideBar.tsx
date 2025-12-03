import React, { cloneElement, useState } from "react";
import { usePathname } from "next/navigation";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import { LayoutPanelLeft } from "lucide-react";

import Link from "next/link";

import { cn } from "~/lib/utils";

import { Button } from "~/shadcn/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/shadcn/ui/sheet";

const SIDEBAR_LINKS = {
  home: {
    name: "Home",
    href: "/home",
    icon: <LayoutPanelLeft />,
  },
  people: {
    name: "People",
    href: "/people",
    icon: <LayoutPanelLeft />,
  },
  publications: {
    name: "Publications",
    href: "/publications",
    icon: <LayoutPanelLeft />,
  },
  teaching: {
    name: "Teaching",
    href: "/teaching",
    icon: <LayoutPanelLeft />,
  },
  outreach: {
    name: "Outreach",
    href: "/outreach",
    icon: <LayoutPanelLeft />,
  },
  gallery: {
    name: "Gallery",
    href: "/gallery",
    icon: <LayoutPanelLeft />,
  },
};

const MobileSideBar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Button
          variant={"outline"}
          size={"icon"}
          className={"mr-2 xl:hidden"}
          onClick={() => {
            setIsSheetOpen(true);
          }}
        >
          <HamburgerMenuIcon className={"h-4 w-4"} />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-1/2 py-10">
        <div className={"flex flex-col justify-center gap-2"}>
          {Object.entries(SIDEBAR_LINKS).map(([_, sidebarLink]) => {
            if (sidebarLink?.name) {
              return (
                <Link
                  href={sidebarLink.href}
                  key={sidebarLink.name}
                  className={"m-0 w-full"}
                >
                  <Button
                    variant={"secondary"}
                    className={cn(
                      "bg-background hover:bg-secondary w-full justify-start truncate border border-transparent px-2 shadow-none transition-all duration-150 ease-linear",
                      isActive(sidebarLink?.href) &&
                        "border-primary/10 bg-secondary text-primary"
                    )}
                    onClick={() => {
                      setIsSheetOpen(false);
                    }}
                  >
                    {sidebarLink.icon && (
                      <span className={"shrink-0"}>
                        {cloneElement(sidebarLink.icon, {
                          className: cn(
                            "h-5 w-5",
                            isActive(sidebarLink?.href) && "stroke-current"
                          ),
                        })}
                      </span>
                    )}
                    <span className="ml-2 duration-200">
                      {sidebarLink.name}
                    </span>
                  </Button>
                </Link>
              );
            }
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
