import { headerNoteFont } from "./header-note-font";
import { ButtonLink } from "@/components/ui/button-link";
import { calBookingUrl } from "../contact/contact-config";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-actions">
        <div className="header-teamup">
          <ButtonLink size="sm" variant="secondary" href="/#contact">
            Let&apos;s team up
          </ButtonLink>
          <span
            className={["header-faq-note", headerNoteFont.variable].join(" ")}
          >
            <svg viewBox="0 0 48 46" fill="none" aria-hidden="true">
              <path d="M43 37C19 45 5 25 8 3M3 11L8 3L14 10" />
            </svg>
            <span>Any FAQs?</span>
          </span>
        </div>
        <ButtonLink
          size="sm"
          variant="secondary"
          className="header-booking"
          href={calBookingUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a call
          <span className="sr-only"> (opens in a new tab)</span>
        </ButtonLink>
        <ButtonLink size="sm" className="header-cta" href="/#expertise">
          Explore
        </ButtonLink>
      </div>
    </header>
  );
}
