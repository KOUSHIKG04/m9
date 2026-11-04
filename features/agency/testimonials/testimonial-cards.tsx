import type { ReactNode } from "react";

export function TestimonialCards({ children }: { children: ReactNode[] }) {
  return (
    <>
      <div className="testimonials-grid" data-faded>
        {children.slice(0, 6)}
      </div>
      <p className="testimonials-closing">
        And many more kind words from the people we build with.
      </p>
    </>
  );
}
