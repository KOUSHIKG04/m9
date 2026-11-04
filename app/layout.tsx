import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import "@/features/agency/agency.css";
import "@/components/ui/button.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MOTIVE9 - Independent Creative Agency",
    template: "%s | MOTIVE9",
  },
  description:
    "Independent minds. Shared motive. MOTIVE 9 is a freelance creative agency for brand identity, website design, development, AI automation, and digital experiences.",
  openGraph: {
    title: "MOTIVE9 - Independent Creative Agency",
    description:
      "Bold ideas. Thoughtfully made. Brand identity, web design, development, and AI automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={[inter.variable, geist.variable].join(" ")}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
