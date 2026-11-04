import { TestimonialCards } from "./testimonial-cards";
import { Quote, BadgeCheck } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    initials: "01",
    name: "Aarav Shah",
    verified: true,
    avatar: "/avatars/shadcn-10.png",
    project: "Website project",
    quote:
      "They took our scattered ideas and turned them into a website that finally felt like us. Clear communication from the first sketch to the final handover.",
  },
  {
    initials: "02",
    name: "Meera Nair",
    verified: false,
    avatar: "/avatars/shadcn-02.png",
    project: "Brand and design",
    quote:
      "Every detail felt considered. The design gave our small business a much clearer voice.",
  },
  {
    initials: "03",
    name: "Rohan Rao",
    verified: true,
    avatar: "/avatars/shadcn-06.png",
    project: "Workflow automation",
    quote:
      "The repetitive work that used to fill our mornings now happens in the background. We have more time for our customers.",
  },
  {
    initials: "04",
    name: "Ananya Das",
    verified: false,
    avatar: "/avatars/shadcn-01.png",
    project: "Product development",
    quote:
      "A thoughtful team to build with. They asked the right questions, kept us involved, and made a complicated idea feel manageable.",
  },
  {
    initials: "05",
    name: "Kabir Mehta",
    verified: true,
    avatar: "/avatars/shadcn-04.png",
    project: "Landing page",
    quote: "Simple, fast, and exactly the direction we were hoping for.",
  },
  {
    initials: "06",
    name: "Priya Menon",
    verified: false,
    avatar: "/avatars/shadcn-05.png",
    project: "Website refresh",
    quote:
      "Our existing site needed care, not a complete restart. They helped us focus on the changes that mattered and made the whole experience feel more polished.",
  },
  {
    initials: "07",
    name: "Arjun Iyer",
    verified: true,
    avatar: "/avatars/shadcn-03.png",
    project: "Creative partnership",
    quote:
      "It felt like having an extra pair of hands on our team. Quick feedback, practical ideas, and a shared eye for the small details.",
  },
  {
    initials: "08",
    name: "Nisha Kapoor",
    verified: false,
    avatar: "/avatars/shadcn-07.png",
    project: "AI integration",
    quote:
      "They helped us find a useful place for AI in our workflow and explained everything in a way our team could understand.",
  },
] as const;

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="m9-testimonials section-pad"
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <header className="testimonials-heading">
          <h2 id="testimonials-title">
            Good work starts with <span>good people.</span>
          </h2>
        </header>
        <TestimonialCards>
          {testimonials.map(
            ({ initials, name, avatar, project, quote, verified }) => (
              <figure className="testimonial-card" key={initials}>
                <figcaption>
                  <Image
                    src={avatar}
                    alt=""
                    width={40}
                    height={40}
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-person">
                    <strong className="testimonial-name">
                      {name}
                      {verified && (
                        <BadgeCheck
                          className="testimonial-badge"
                          size={14}
                          role="img"
                          aria-label="Sample verification badge"
                        />
                      )}
                    </strong>
                    <span>{project}</span>
                  </div>
                  <Quote
                    className="testimonial-quote-mark"
                    size={32}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </figcaption>
                <blockquote>
                  <p>{quote}</p>
                </blockquote>
              </figure>
            ),
          )}
        </TestimonialCards>
      </div>
    </section>
  );
}
