import { Montserrat } from "next/font/google";
import "./globals.css";
import ThemeProvider from "~/provider/ThemeProvider";
import { cn } from "~/lib/utils";
import TailwindIndicator from "~/shadcn/custom/Tailwindindicator";
import { Metadata } from "next";

const monteserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rupesh Kumar",
  icons: [{ rel: "icon", url: "/brain.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(monteserrat.variable)}>
      <body className={cn("bg-background font-monteserrat")}>
        <ThemeProvider
          attribute={"class"}
          defaultTheme={"system"}
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
