import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles } from "@/features/agency/content";
import { ArticleDetail } from "@/features/agency/details/detail-pages";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((article) => article.slug === slug);
  return {
    title: article?.title ?? "Article not found",
    description: article?.intro,
  };
}
export default async function JournalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((article) => article.slug === slug);
  if (!article) notFound();
  return <ArticleDetail article={article} />;
}
