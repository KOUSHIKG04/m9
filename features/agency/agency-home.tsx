import { DisciplineRibbon } from "./hero/discipline-ribbon";
import { HeroSection } from "./hero/hero-section";
import { AgencySection } from "./about/agency-section";
import { ExpertiseSection } from "./expertise/expertise-section";
import { ShowcaseSection } from "./showcase/showcase-section";
import { PeopleSection } from "./people/people-section";
import { ContactFooter } from "./contact/contact-footer";

import { SectionFade } from "./shared/section-fade";

export function AgencyHome() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <HeroSection />
      <DisciplineRibbon />
      <main id="main">
        <AgencySection />
        <SectionFade from="dark" to="light" />
        <ExpertiseSection />
        <SectionFade from="light" to="black" />
        <PeopleSection />
        <SectionFade from="black" to="light" />
        <ShowcaseSection />
      </main>
      <SectionFade from="light" to="yellow" />
      <ContactFooter />
    </>
  );
}
