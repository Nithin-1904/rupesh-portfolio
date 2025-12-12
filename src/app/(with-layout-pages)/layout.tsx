import { type ReactElement } from "react";
import { type Metadata } from "next";
import MainLayout from "./components/MainLayout";

export const metadata: Metadata = {
  title: "Rupesh Kumar",
  icons: [{ rel: "icon", url: "/brain.png" }],
};

const Layout = ({ children }: { children: ReactElement }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default Layout;
