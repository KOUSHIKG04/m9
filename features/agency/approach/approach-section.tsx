import {
  PrincipleOrbits,
  StudioPrincipleCards,
} from "./studio-principle-cards";
import {
  ChevronDown,
  MessageCircle,
  Pencil,
  SlidersHorizontal,
  Workflow,
  UserRound,
  TrendingUp,
} from "lucide-react";

const principleIcons = [
  MessageCircle,
  Pencil,
  SlidersHorizontal,
  Workflow,
  UserRound,
  TrendingUp,
];

const principles = [
  {
    number: "01",
    title: "Direct conversations",
    text: "Talk with the people shaping and building your project, from the first conversation to handoff.",
  },
  {
    number: "02",
    title: "Thoughtful design",
    text: "Make each screen, message, and interaction serve a clear purpose for your business and audience.",
  },
  {
    number: "03",
    title: "Built around your needs",
    text: "Shape the scope around the real problem, whether that is a new idea or an existing product.",
  },
  {
    number: "04",
    title: "Connected disciplines",
    text: "Bring design, development, and useful automation together when the project calls for it.",
  },
  {
    number: "05",
    title: "Human judgment",
    text: "Use AI where it helps, with clear review and human handoffs where they matter.",
  },
  {
    number: "06",
    title: "Ready to grow",
    text: "Build responsive, considered experiences that can evolve with the business.",
  },
] as const;

export function ApproachSection() {
  return (
    <section
      id="approach"
      className="m9-approach section-pad"
      aria-labelledby="approach-title"
    >
      <div className="container">
        <header className="approach-heading">
          <div className="approach-heading-copy">
            <p className="approach-eyebrow">HOW WE WORK</p>
            <h2 id="approach-title">A clear path from idea to launch.</h2>
          </div>
          <p className="approach-intro">
            Direct collaboration, thoughtful decisions, and the right mix of
            design, development, and automation for each project.
          </p>
        </header>
        <StudioPrincipleCards>
          {principles.map(({ number, title, text }, index) => {
            const Icon = principleIcons[index];
            return (
              <article className="approach-card" key={number}>
                <div
                  className={`approach-art ${index % 2 === 0 ? "approach-art-yellow" : "approach-art-white"}`}
                  aria-hidden="true"
                >
                  <PrincipleOrbits index={index} />
                  <Icon className="approach-icon" strokeWidth={1.5} />
                </div>
                <details
                  className="approach-disclosure"
                  name="approach-principles"
                >
                  <summary>
                    <h3>{title}</h3>
                    <ChevronDown size={16} aria-hidden="true" />
                  </summary>
                  <p className="approach-copy">{text}</p>
                </details>
              </article>
            );
          })}
        </StudioPrincipleCards>
      </div>
    </section>
  );
}
