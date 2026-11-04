import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/features/agency/content";
import { ProjectDetail } from "@/features/agency/details/detail-pages";

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
  return {
    title: project?.name ?? "Project not found",
    description: project?.description,
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
