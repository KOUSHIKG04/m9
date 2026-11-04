import { WebsitePreview } from "../components/website-preview";

export function ShowcaseSection() {
  return (
    <section
      className="showcase-section section-pad"
      aria-labelledby="showcase-title"
    >
      <div className="container">
        <h2 id="showcase-title" className="display-heading">
          Ideas that work.
        </h2>
        <p className="showcase-intro">
          We bring design and development together to build clear, responsive
          websites that tell your story, make a strong first impression, and
          turn interest into your next enquiry.
        </p>
        <div className="showcase-example">
          <WebsitePreview />
        </div>
      </div>
    </section>
  );
}
