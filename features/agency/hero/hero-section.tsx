import { SiteHeader } from "../components/site-header";
import { HeroVisual } from "./hero-visual";

export function HeroSection() {
  return (
    <section id="home" className="hero-shell">
      <div className="hero">
        <SiteHeader />
        <HeroVisual />
        <p className="hero-side">
          INDEPENDENT MINDS. EXTRAORDINARY POSSIBILITIES.
        </p>
        <div className="hero-bottom">
          <span>
            <i /> OPEN FOR COLLABORATION
          </span>
        </div>
      </div>
    </section>
  );
}
