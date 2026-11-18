import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { calBookingUrl } from "../contact/contact-config";
import { servicePages } from "../service-content";
import { ContactFooter } from "../contact/contact-footer";
import { SiteHeader } from "../components/site-header";
import { getSiteUrl, safeJsonLd } from "@/lib/seo";
import { agencyServiceArea } from "../content";

type ServicePageContent = (typeof servicePages)[number];

export function ServiceDetail({ service }: { service: ServicePageContent }) {
  const siteUrl = getSiteUrl();
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.sectionTitle,
    description: service.description,
    areaServed: agencyServiceArea,
    provider: {
      "@type": "Organization",
      name: "MOTIVE 9",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.sectionTitle} deliverables`,
      itemListElement: service.deliverables.map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
        },
      })),
    },
  };

  const breadcrumbSchema = siteUrl
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl.toString(),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: new URL("/#expertise", siteUrl).toString(),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: new URL(`/services/${service.slug}`, siteUrl).toString(),
          },
        ],
      }
    : undefined;

  return (
    <div id="home" className="detail-page service-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(serviceSchema) }}
      />
      {breadcrumbSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
        />
      ) : null}
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="detail-main">
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ol className="service-breadcrumbs">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/#expertise">Services</Link>
              </li>
              <li aria-current="page">{service.title}</li>
            </ol>
          </nav>
          <p className="service-kicker">MOTIVE 9 · {service.sectionTitle}</p>
          <h1 className="detail-heading">{service.title}</h1>
          <p className="detail-intro">{service.intro}</p>
          <div className="service-detail-copy">
            {service.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <section
            className="service-detail-offers"
            aria-labelledby="service-offers-title"
          >
            <h2 id="service-offers-title">What this can include</h2>
            <ul className="detail-deliverables">
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="service-faq" aria-labelledby="service-faq-title">
            <h2 id="service-faq-title">
              Common questions about {service.sectionTitle}
            </h2>
            {service.faqs.map((faq) => (
              <div className="service-faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </section>
          <nav className="service-related" aria-label="Other services">
            <h2>Explore related services</h2>
            <ul>
              {servicePages
                .filter((item) => item.slug !== service.slug)
                .map((item) => (
                  <li key={item.slug}>
                    <Link href={`/services/${item.slug}`}>{item.title}</Link>
                  </li>
                ))}
            </ul>
          </nav>
          <div className="service-detail-actions">
            <ButtonLink href="/#contact">
              Let’s talk about your project
            </ButtonLink>
            <ButtonLink
              href={calBookingUrl}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a call
            </ButtonLink>
          </div>
        </div>
      </main>
      <ContactFooter />
    </div>
  );
}
