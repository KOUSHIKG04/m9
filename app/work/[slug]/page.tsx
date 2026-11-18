import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/features/agency/content";
import { ProjectDetail } from "@/features/agency/details/detail-pages";
import { canonicalUrl } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);
  if (!project) {
    return {
      title: "Project not found",
      robots: { index: false, follow: true },
    };
  }
  return {
    title: `${project.name} ${project.category} concept`,
    description: project.description,
    alternates: {
      ...(canonicalUrl(`/work/${project.slug}`)
        ? { canonical: canonicalUrl(`/work/${project.slug}`) }
        : {}),
    },
    openGraph: {
      title: `${project.name} ${project.category} concept | MOTIVE 9`,
      description: project.description,
      siteName: "MOTIVE 9",
      type: "website",
      ...(canonicalUrl(`/work/${project.slug}`)
        ? { url: canonicalUrl(`/work/${project.slug}`) }
        : {}),
    },
    twitter: {
      card: "summary",
      title: `${project.name} ${project.category} concept | MOTIVE 9`,
      description: project.description,
    },
  };
}
export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
