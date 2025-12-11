"use client";

import { usePathname, useRouter } from "next/navigation";

import ThemeToggleButton from "~/shadcn/custom/theme-toggle-button";
import { cn } from "~/lib/utils";
import MobileSideBar from "./MobileSideBar";

// import MobileSideBar from "./components/MobileSideBar";

const navItems = [
  { label: "Home", path: "/home" },
  { label: "People", path: "/people" },
  { label: "Research", path: "/research" },
  { label: "Publications", path: "/publications" },
  { label: "Teaching", path: "/teaching" },
  { label: "Outreach", path: "/outreach" },
];

const TopBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b shadow-sm">
      <div className="flex h-16 items-center px-4 justify-between sm:space-x-0 sm:px-4 gap-10">
        <MobileSideBar />
        <div className="hidden lg:flex gap-15 w-full justify-end items-center">
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
        <h1
          className="text-xl md:text-2xl whitespace-nowrap lg:text-3xl font-extrabold text-center px-5"
          onClick={() => router.push("/home")}
        >
          RUPESH CHILLALE
        </h1>

        {/* Right side links (Desktop Only) */}
        <div className="hidden lg:flex gap-15 w-full items-center">
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
