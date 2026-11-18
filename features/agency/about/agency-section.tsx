import Link from "next/link";

export function AgencySection() {
  return (
    <section id="agency" className="agency-section section-pad">
      <div className="container">
        {/* <SectionLabel light>THE AGENCY</SectionLabel> */}
        <h2>
          We’re <span>MOTIVE 9</span> independent designers, developers and
          automation specialists turning bold ideas into digital experiences{" "}
          <span>people connect with.</span>
        </h2>
        <p className="agency-local-copy">
          MOTIVE 9 is a freelancing agency serving Shivamogga (Shimoga),
          Karnataka. We design and build{" "}
          <Link href="/services/web-app-development">
            business websites and mobile apps
          </Link>
          , <Link href="/services/ui-ux-design">UI/UX experiences</Link>, and{" "}
          <Link href="/services/ai-automation">AI automations</Link> for local
          businesses and remote teams.
        </p>
      </div>
    </section>
  );
}
