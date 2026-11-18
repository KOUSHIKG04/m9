import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { services } from "../content";

import { SectionLabel } from "../shared/section-label";

const toolLabels: Record<string, string> = {
  react: "React / React Native",
  nextdotjs: "Next.js",
  typescript: "TypeScript",
  figma: "Figma",
  supabase: "Supabase",
  stripe: "Stripe",
  meta: "Meta",
  instagram: "Instagram",
  mongodb: "MongoDB",
  razorpay: "Razorpay",
  gmail: "Email / Gmail",
  n8n: "n8n",
  whatsapp: "WhatsApp",
  telegram: "Telegram",
  github: "GitHub",
};

export function ExpertiseSection() {
  return (
    <section id="expertise" className="expertise-section section-pad">
      <div className="container">
        <SectionLabel>OUR EXPERTISE</SectionLabel>
        <h2 className="display-heading">What we do</h2>
      </div>
      <div className="service-list">
        {services.map((service, i) => (
          <details
            key={service.title}
            className="service"
            name="agency-services"
          >
            <summary>
              <span className="service-number">0{i + 1}</span>
              <h3>{service.title}</h3>
              <span
                className={`${buttonVariants({ size: "icon" })} service-toggle`}
                aria-hidden="true"
              >
                <ChevronDown className="service-chevron-down" />
                <ChevronUp className="service-chevron-up" />
              </span>
            </summary>
            <div className="service-description">
              <p>
                {service.text.split(/(\[[a-z0-9]+\])/g).map((part, index) => {
                  const tool = part.startsWith("[") ? part.slice(1, -1) : null;
                  return tool && toolLabels[tool] ? (
                    <span
                      className="service-inline-tool"
                      key={index}
                      title={toolLabels[tool]}
                    >
                      <Image
                        src={["/tools/color/", tool, ".svg"].join("")}
                        alt={toolLabels[tool]}
                        width={22}
                        height={22}
                      />
                    </span>
                  ) : (
                    part
                  );
                })}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
