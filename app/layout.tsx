import type { Metadata } from "next";
import Assistant from "@/components/Assistant";
import ScrollEffects from "@/components/ScrollEffects";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abraham Isaiah | Full-Stack Software Engineer",
  description:
    "Portfolio of Abraham Isaiah, a Full-Stack Software Engineer building web and mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Assistant />
        <ScrollEffects />
      </body>
    </html>
  );
}
