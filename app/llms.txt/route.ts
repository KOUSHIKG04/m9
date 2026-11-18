import { servicePages } from "@/features/agency/service-content";
import { portfolioProjects } from "@/features/agency/portfolio/portfolio-content";
import { contactEmail } from "@/features/agency/contact/contact-config";
import { canonicalUrl } from "@/lib/seo";

export function GET() {
  const lines = [
    "# MOTIVE 9",
    "",
    "> An independent freelancing agency serving Shivamogga (Shimoga), Karnataka, India, and remote teams.",
    "",
    "MOTIVE 9 provides web and app development, UI/UX design, creative design and campaigns, AI workflow automation, and product consulting.",
    "",
    "## Website",
    `- [Home](${canonicalUrl("/") ?? "/"})`,
    `- [Portfolio](${canonicalUrl("/#portfolio") ?? "/#portfolio"})`,
    `- [Contact](${canonicalUrl("/#contact") ?? "/#contact"})`,
    "",
    "## Services",
    ...servicePages.map(
      (service) =>
        `- [${service.sectionTitle}](${canonicalUrl(`/services/${service.slug}`) ?? `/services/${service.slug}`}): ${service.description}`,
    ),
    "",
    "## Independent projects",
    "Projects shown are from the people behind MOTIVE 9.",
    ...portfolioProjects.map((project) => `- ${project.name}`),
    "",
    "## Contact",
    `Email: ${contactEmail}`,
    "",
    "## Crawl discovery",
    `- [Sitemap](${canonicalUrl("/sitemap.xml") ?? "/sitemap.xml"})`,
    `- [Crawler rules](${canonicalUrl("/robots.txt") ?? "/robots.txt"})`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
