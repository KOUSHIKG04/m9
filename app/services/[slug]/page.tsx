import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicePages } from "@/features/agency/service-content";
import { ServiceDetail } from "@/features/agency/details/service-detail";
import { canonicalUrl } from "@/lib/seo";

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePages.find((item) => item.slug === slug);
  if (!service) {
    return {
      title: "Service not found",
      robots: { index: false, follow: true },
    };
  }

  const canonical = canonicalUrl(`/services/${service.slug}`);
  return {
    title: service.title,
    description: service.description,
    ...(canonical ? { alternates: { canonical } } : {}),
    openGraph: {
      title: `${service.title} | MOTIVE 9`,
      description: service.description,
      siteName: "MOTIVE 9",
      type: "website",
      ...(canonical ? { url: canonical } : {}),
    },
    twitter: {
      card: "summary",
      title: `${service.title} | MOTIVE 9`,
      description: service.description,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicePages.find((item) => item.slug === slug);
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
