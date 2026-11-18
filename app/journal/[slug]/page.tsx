import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles } from "@/features/agency/content";
import { ArticleDetail } from "@/features/agency/details/detail-pages";
import { canonicalUrl } from "@/lib/seo";

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
  if (!article) {
    return {
      title: "Article not found",
      robots: { index: false, follow: true },
    };
  }
  const canonical = canonicalUrl(`/journal/${article.slug}`);
  return {
    title: article.title,
    description: article.intro,
    ...(canonical ? { alternates: { canonical } } : {}),
    openGraph: {
      title: `${article.title} | MOTIVE 9`,
      description: article.intro,
      siteName: "MOTIVE 9",
      type: "article",
      ...(canonical ? { url: canonical } : {}),
    },
    twitter: {
      card: "summary",
      title: `${article.title} | MOTIVE 9`,
      description: article.intro,
    },
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
