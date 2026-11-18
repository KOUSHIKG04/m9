import { PortfolioCarousel } from "./portfolio-carousel";

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="portfolio-section section-pad"
      aria-labelledby="portfolio-title"
    >
      <div className="container">
        <header className="portfolio-heading">
          <h2 id="portfolio-title" className="display-heading">
            Built to <span>be used.</span>
          </h2>
          <p>
            Tools, interfaces, and ideas turned into working products. A
            selection of projects from the people behind MOTIVE 9.
          </p>
        </header>
        <PortfolioCarousel />
      </div>
    </section>
  );
}
