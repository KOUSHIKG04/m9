import { ButtonLink } from "@/components/ui/button-link";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { agency, type projects, type articles } from "../content";
import { ProjectArtwork } from "../components/artwork";
import { SiteHeader } from "../components/site-header";
import { ContactFooter } from "../contact/contact-footer";
import { SectionLabel } from "../shared/section-label";

type Project = (typeof projects)[number];
type Article = (typeof articles)[number];

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <div id="home" className="detail-page">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="detail-main">
        <div className="container">
          <Link href="/#projects" className="back-link">
            <ArrowLeft size={15} />
            Back to selected work
          </Link>
          <h1 className="detail-heading">{project.title}</h1>
          <p className="detail-intro">{project.description}</p>
          <p className="concept-note">
            {project.name} · Independent concept project. This is a
            self-initiated exploration, not commissioned client work.
          </p>
          <div className="detail-art">
            <ProjectArtwork kind={project.art} />
          </div>
          <div className="detail-body">
            <section>
              <h2>The challenge</h2>
              <p>{project.challenge}</p>
            </section>
            <section>
              <h2>The thinking</h2>
              <p>{project.approach}</p>
            </section>
          </div>
          <ul className="detail-deliverables" aria-label="Project scope">
            {project.deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </main>
      <ContactFooter />
    </div>
  );
}

export function ArticleDetail({ article }: { article: Article }) {
  return (
    <div id="home" className="detail-page article-page">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="detail-main">
        <div className="container">
          <Link href="/#journal" className="back-link">
            <ArrowLeft size={15} />
            Back to fresh thinking
          </Link>
          <div style={{ marginTop: 36 }}>
            <SectionLabel>
              {article.category} · {article.readTime}
            </SectionLabel>
          </div>
          <h1 className="detail-heading">{article.title}</h1>
          <p className="detail-intro">{article.intro}</p>
          <div className="detail-art">
            <ProjectArtwork kind={article.art} />
          </div>
          <div className="article-body">
            {article.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ButtonLink href={agency.inquiry}>
              Let’s put ideas into practice
            </ButtonLink>
          </div>
        </div>
      </main>
      <ContactFooter />
    </div>
  );
}
