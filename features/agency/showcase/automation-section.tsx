import { AutomationPreview } from "../components/automation-preview";

export function AutomationSection() {
  return (
    <section
      id="automation"
      className="automation-section section-pad"
      aria-labelledby="automation-section-title"
    >
      <div className="container">
        <h2 id="automation-section-title" className="display-heading">
          Make room for more.
        </h2>
        <p className="automation-intro">
          Practical AI and automation that connect your tools, simplify everyday
          tasks, and give your team more time for the work that matters.
        </p>
        <AutomationPreview />
      </div>
    </section>
  );
}
