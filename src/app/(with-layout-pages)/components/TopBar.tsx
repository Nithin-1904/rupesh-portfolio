"use client";

import { usePathname, useRouter } from "next/navigation";

import { BatteryFull } from "lucide-react";

import ThemeToggleButton from "~/shadcn/custom/theme-toggle-button";
import { cn } from "~/lib/utils";
import MobileSideBar from "./MobileSideBar";

// import MobileSideBar from "./components/MobileSideBar";

const navItems = [
  { label: "Home", path: "/home" },
  { label: "People", path: "/people" },
  { label: "Publications", path: "/publications" },
  { label: "Teaching", path: "/teaching" },
  { label: "Outreach", path: "/outreach" },
  { label: "Gallery", path: "/gallery" },
];

const TopBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b shadow-sm">
      <div className="flex h-16 items-center px-4 justify-between sm:space-x-0 sm:px-4 sm:gap-10">
        <MobileSideBar />
        {/* <BatteryFull className="text-primary h-8 w-8" /> */}
        {/* <div className="flex sm:gap-5 md:gap-10 items-center justify-center w-full">
          <div className="flex items-center sm:gap-4 md:gap-6 lg:gap-10">
            <nav
              className={cn(
                "hover:text-primary cursor-pointer font-semibold text-lg",
                isActive("/home") && "text-primary"
              )}
              onClick={() => router.push("/home")}
            >
              Home
            </nav>
            <nav
              className={cn(
                "hover:text-primary cursor-pointer font-semibold text-lg",
                isActive("/people") && "text-primary"
              )}
              onClick={() => router.push("/people")}
            >
              People
            </nav>
            <nav
              className={cn(
                "hover:text-primary cursor-pointer font-semibold text-lg",
                isActive("/publications") && "text-primary"
              )}
              onClick={() => router.push("/publications")}
            >
              Publications
            </nav>
          </div>
          <h1 className="lg:text-3xl md:text-2xl sm:text-xl font-extrabold sm:px-3 md:px-10">
            RUPESH CHILLALE
          </h1>
          <div className="flex items-center sm:gap-4 md:gap-6 lg:gap-10">
            <nav
              className={cn(
                "hover:text-primary cursor-pointer font-semibold text-lg",
                isActive("/teaching") && "text-primary"
              )}
              onClick={() => router.push("/teaching")}
            >
              Teaching
            </nav>
            <nav
              className={cn(
                "hover:text-primary cursor-pointer font-semibold text-lg",
                isActive("/outreach") && "text-primary"
              )}
              onClick={() => router.push("/outreach")}
            >
              Outreach
            </nav>
            <nav
              className={cn(
                "hover:text-primary cursor-pointer font-semibold text-lg",
                isActive("/gallery") && "text-primary"
              )}
              onClick={() => router.push("/gallery")}
            >
              Gallery
            </nav>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4 w-full">
          <nav className="flex items-center gap-4">
            <ThemeToggleButton />
          </nav>
        </div> */}
        <div className="hidden md:flex gap-10 items-center">
          {navItems.slice(0, 3).map((item) => (
            <nav
              key={item.path}
              className={cn(
                "hover:text-primary cursor-pointer font-semibold text-lg transition",
                isActive(item.path) && "text-primary"
              )}
              onClick={() => router.push(item.path)}
            >
              {item.label}
            </nav>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-center flex-1 md:px-10">
          RUPESH CHILLALE
        </h1>

        {/* Right side links (Desktop Only) */}
        <div className="hidden md:flex gap-10 items-center">
          {navItems.slice(3).map((item) => (
            <nav
              key={item.path}
              className={cn(
                "hover:text-primary cursor-pointer font-semibold text-lg transition",
                isActive(item.path) && "text-primary"
              )}
              onClick={() => router.push(item.path)}
            >
              {item.label}
            </nav>
          ))}
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center gap-4">
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
