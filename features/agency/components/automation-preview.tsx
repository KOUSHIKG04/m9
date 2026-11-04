import { ArrowRight, MessageCircle, Sheet, Workflow } from "lucide-react";
import { automationWorkflow } from "../content";

const workflowIcons = [MessageCircle, Workflow, Sheet];

export function AutomationPreview() {
  return (
    <figure
      className="automation-preview"
      aria-labelledby="automation-workflow-title"
    >
      <h3 id="automation-workflow-title">{automationWorkflow.title}</h3>
      <p>{automationWorkflow.description}</p>
      <ol className="automation-flow" aria-label="Example enquiry workflow">
        {automationWorkflow.steps.map((step, index) => {
          const Icon = workflowIcons[index];
          return (
            <li key={step.label}>
              <Icon size={28} aria-hidden="true" />
              <strong>{step.label}</strong>
              <span>{step.detail}</span>
              {index < automationWorkflow.steps.length - 1 && (
                <ArrowRight
                  className="automation-connector"
                  size={20}
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
      <figcaption>{automationWorkflow.note}</figcaption>
    </figure>
  );
}
