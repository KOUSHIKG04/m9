import { Workflow, Bot, Globe, Database } from "lucide-react";
import { SectionLabel } from "../shared/section-label";

const workflowCards = [
  {
    label: "Workflow automation",
    detail: "Connect everyday tasks, tools, and messaging channels.",
    icon: Workflow,
  },
  {
    label: "Agentic AI",
    detail: "Build agents that carry out useful steps across your tools.",
    icon: Bot,
  },
  {
    label: "Web development",
    detail: "Responsive websites and web apps built around your business.",
    icon: Globe,
  },
  {
    label: "RAG systems",
    detail: "Ground AI answers in your own documents and knowledge.",
    icon: Database,
  },
];

export function PeopleSection() {
  return (
    <section
      id="people"
      className="people-section section-pad"
      aria-labelledby="people-title"
    >
      <div className="container">
        <SectionLabel light>THE HUMAN SIDE</SectionLabel>
        <h2 id="people-title" className="display-heading">
          Less busywork. More room to grow.
        </h2>
        <p className="people-intro">
          From connected workflows to AI agents, web development, and knowledge
          systems, we build practical automation that gives your team more time
          for people.
        </p>
        <div className="people-grid">
          {workflowCards.map((step, index) => {
            const Icon = step.icon;
            return (
              <div className="person" key={step.label}>
                <div
                  className={[
                    "person-art",
                    index % 2 === 1 ? "person-yellow" : "person-dark",
                  ].join(" ")}
                  aria-hidden="true"
                >
                  <span className="person-circle" />
                  <span className="person-circle person-circle-secondary" />
                  <Icon className="person-workflow-icon" strokeWidth={1.5} />
                </div>
                <h3>{step.label}</h3>
                <p>{step.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
