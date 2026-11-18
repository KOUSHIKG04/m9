import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import "@/features/agency/agency.css";
import "@/components/ui/button.css";
import { contactEmail } from "@/features/agency/contact/contact-config";
import { getSiteUrl, safeJsonLd } from "@/lib/seo";
import { agencyServiceArea } from "@/features/agency/content";

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

const siteUrl = getSiteUrl();
const siteTitle = "Freelance Agency in Shivamogga (Shimoga) | MOTIVE 9";
const siteDescription =
  "MOTIVE 9 is a freelance agency serving Shivamogga (Shimoga), Karnataka, with web and app development, UI/UX design, and AI workflow automation.";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s | MOTIVE 9",
  },
  description: siteDescription,
  ...(siteUrl
    ? {
        metadataBase: siteUrl,
        alternates: { canonical: "/" },
      }
    : {}),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: "MOTIVE 9",
    type: "website",
    ...(siteUrl ? { url: siteUrl.toString() } : {}),
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MOTIVE 9",
  description: siteDescription,
  areaServed: agencyServiceArea,
  knowsAbout: [
    "Website development",
    "Mobile app development",
    "UI/UX design",
    "AI workflow automation",
    "Creative design and campaigns",
    "Product consulting",
  ],
  ...(siteUrl
    ? { "@id": `${siteUrl.toString()}#organization`, url: siteUrl.toString() }
    : {}),
  email: contactEmail,
  sameAs: [
    "https://www.instagram.com/motive_9_?cplk=MWdvYzlnc3l2Znc0dw%3D%3D&utm_source=qr",
    "https://www.facebook.com/profile.php?id=61596022355419",
    "https://www.linkedin.com/in/motive-9-media-093774448",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MOTIVE 9",
  ...(siteUrl ? { url: siteUrl.toString() } : {}),
  publisher: siteUrl
    ? { "@id": `${siteUrl.toString()}#organization` }
    : { "@type": "Organization", name: "MOTIVE 9" },
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
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(websiteSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
