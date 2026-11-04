import { ArrowRight } from "lucide-react";
import { articles } from "../content";
import Link from "next/link";
import { ProjectArtwork } from "../components/artwork";

export function JournalSection() {
  return (
    <section id="journal" className="journal-section section-pad">
      <div className="container">
        <p className="section-label label-light">FROM OUR NOTEBOOK</p>
        <h2 className="display-heading">Fresh thinking</h2>
        <div className="journal-grid">
          {articles.map((article) => (
            <Link
              href={`/journal/${article.slug}`}
              className="journal-card"
              key={article.slug}
            >
              <ProjectArtwork kind={article.art} compact />
              <div className="journal-copy">
                <p className="article-meta">
                  {article.category}
                  <span>{article.readTime}</span>
                </p>
                <h3>{article.title}</h3>
                <span className="read-article">
                  Read article <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
