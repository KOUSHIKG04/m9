import { ArrowDown } from "lucide-react";
import { projects } from "../content";
import { SectionLabel } from "../shared/section-label";
import Link from "next/link";
import { ProjectArtwork } from "../components/artwork";

export function ProjectsSection() {
  return (
    <section id="projects" className="projects-section section-pad">
      <div className="container">
        <SectionLabel light>MADE OF IDEAS</SectionLabel>
        <div className="section-heading-row">
          <h2 className="display-heading">Selected work</h2>
          <span className="outline-label">
            Independent concepts <ArrowDown size={13} />
          </span>
        </div>
        <p className="section-intro">
          A few possibilities, brought to life. A collection of self-initiated
          design explorations.
        </p>
        <div className="project-grid">
          {projects.map((project) => (
            <Link
              className="project-card"
              href={`/work/${project.slug}`}
              key={project.slug}
            >
              <div className="art-wrap">
                <ProjectArtwork kind={project.art} />
                <span className="project-badge">CONCEPT</span>
              </div>
              <div className="project-caption">
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
