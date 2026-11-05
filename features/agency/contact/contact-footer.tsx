import { SectionFade } from "../shared/section-fade";
import { TestimonialsSection } from "../testimonials/testimonials-section";
import { SocialIcon } from "./social-icon";
import { agency } from "../content";
import { SectionLabel } from "../shared/section-label";
import { ContactActions } from "./contact-actions";

export function ContactFooter() {
  return (
    <footer id="contact" className="contact-section section-pad">
      <div className="container">
        <SectionLabel>IN GOOD COMPANY</SectionLabel>
        <div className="contact-heading-row">
          <h2>
            <span>Let&apos;s make something</span>
            <span>unforgettable.</span>
          </h2>
        </div>
        <div className="contact-actions">
          <ContactActions />
        </div>
      </div>
      <div className="contact-testimonial-fade contact-testimonial-fade-before">
        <SectionFade from="yellow" to="dark" />
      </div>
      <TestimonialsSection />
      <div className="contact-testimonial-fade">
        <SectionFade from="dark" to="yellow" />
      </div>
      <div className="footer-socials" aria-label="Social media">
        <a
          href="https://www.instagram.com/motive_9_?cplk=MWdvYzlnc3l2Znc0dw%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram (opens in a new tab)"
        >
          <SocialIcon name="instagram" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61596022355419"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook (opens in a new tab)"
        >
          <SocialIcon name="facebook" />
        </a>
        <span
          role="img"
          aria-label="X / Twitter (link coming soon)"
          title="X / Twitter link coming soon"
        >
          <SocialIcon name="twitter" />
        </span>
        <a
          href="https://www.linkedin.com/in/motive-9-media-093774448"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn (opens in a new tab)"
        >
          <SocialIcon name="linkedin" />
        </a>
      </div>
      <div className="footer-wordmark" aria-hidden="true">
        <span>motive9</span>
      </div>
      <div className="container footer-meta-container">
        <div className="footer-bottom">
          <p>© {agency.copyrightYear} MOTIVE 9. All rights reserved.</p>
          <p>Independent minds. Shared motive.</p>
        </div>
      </div>
    </footer>
  );
}
