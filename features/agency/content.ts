import { contactEmail } from "./contact/contact-config";

export const agency = {
  name: "MOTIVE 9",
  copyrightYear: 2026,
  email: contactEmail,
  inquiry: "/#contact",
};

export const services = [
  {
    title: "Web & App Development",
    text: "Websites, e-commerce interfaces, web apps, SaaS MVPs, and mobile and desktop apps built around your business. We bring [react], [nextdotjs], and [typescript] together with APIs, authentication, databases, payments, and real-time features. From [figma] designs to launch, we handle the build and integrations, including [supabase] and [razorpay].",
  },
  {
    title: "UI/UX Design",
    text: "We design websites and apps in [figma], from wireframes and user flows to clickable prototypes and redesigns. Reusable components, responsive layouts, and consistent design systems make each experience clear and easy to use.",
  },
  {
    title: "Creative & Campaigns",
    text: "Social and event posters, banners, thumbnails, brand assets, and presentation graphics shaped in [figma]. We create AI-assisted ad content and manage [meta] campaigns, including [instagram] creatives and A/B testing to explore what connects with your audience.",
  },
  {
    title: "AI & Automation",
    text: "Practical AI workflows with [n8n], agentic AI, voice support, and RAG systems grounded in your knowledge. We connect [whatsapp], [telegram], and [instagram] to business tools, reduce repetitive tasks, and add useful AI features to your product.",
  },
  {
    title: "Consulting & Ongoing Support",
    text: "Technical consultation, MVP planning, AI-assisted development, and vibe coding to move ideas forward. We work across [figma] prototypes and [github] codebases to fix frontend issues, improve existing applications, and handle ongoing website and UI maintenance.",
  },
];

export const automationWorkflow = {
  title: "Less busywork. More room to grow.",
  description:
    "Bring enquiries, everyday tasks, and shared information into one connected flow. Practical automation keeps your team focused on the work that needs them.",
  steps: [
    { label: "An enquiry", detail: "An enquiry comes in" },
    { label: "Connected tools", detail: "A connected workflow" },
    { label: "A shared record", detail: "The details, in one place" },
  ],
  note: "Illustrative workflow. We choose the tools around your project.",
};

export const projects = [
  {
    slug: "nova",
    name: "Nova",
    category: "Brand strategy · Visual identity",
    art: "nova",
    title: "A fresh orbit for a financial brand.",
    description:
      "An independent brand exploration for a simpler, more human financial experience. A confident wordmark and an expanding ring system turn the idea of momentum into a recognizable visual language.",
    challenge:
      "Make a complex category feel clear, approachable, and full of possibility.",
    approach:
      "We built the identity around a simple idea: progress radiates outward. Concentric circles create a flexible system for everything from a small app icon to a large campaign canvas.",
    deliverables: [
      "Brand direction",
      "Visual identity",
      "Typography system",
      "Digital applications",
    ],
  },
  {
    slug: "pulse",
    name: "Pulse",
    category: "Web design · Digital experience",
    art: "pulse",
    title: "Built around the rhythm of movement.",
    description:
      "A digital design concept for a fitness brand with energy to spare. A flexible visual equalizer gives the brand an expressive rhythm while a focused layout keeps the next action clear.",
    challenge:
      "Translate the energy of a workout into a digital experience that feels motivating and easy to use.",
    approach:
      "We paired bold typography with a rhythmic graphic system. The site concept puts programs, membership information, and clear calls to action at the center of the experience.",
    deliverables: [
      "Creative direction",
      "Website design",
      "Interaction concept",
      "Responsive system",
    ],
  },
  {
    slug: "orbit",
    name: "Orbit Studio",
    category: "Art direction · Brand system",
    art: "orbit",
    title: "A different way to see the bigger picture.",
    description:
      "A visual identity exploration for an independent creative practice. A restrained palette and orbital linework make space for the work while giving the studio a distinct signature.",
    challenge:
      "Give a multidisciplinary practice an identity that connects its work without overpowering it.",
    approach:
      "A central point becomes the anchor of an adaptable orbit system. The identity balances precise geometry with generous space, letting each application feel connected but individual.",
    deliverables: [
      "Identity concept",
      "Art direction",
      "Layout system",
      "Portfolio direction",
    ],
  },
  {
    slug: "kinetic",
    name: "Kinetic",
    category: "Identity · Digital direction",
    art: "kinetic",
    title: "An identity that refuses to stand still.",
    description:
      "A brand concept for a music and culture platform. Repeating circular forms, a strong monogram, and sharp yellow accents create a visual language rooted in sound and movement.",
    challenge:
      "Create a recognizable identity that can move between music releases, digital experiences, and cultural moments.",
    approach:
      "The graphic system takes its cue from sound waves and vinyl grooves. A compact central mark gives the identity an anchor, while the surrounding rings suggest continuous motion.",
    deliverables: [
      "Brand concept",
      "Monogram",
      "Graphic language",
      "Digital art direction",
    ],
  },
] as const;

export const disciplines = [
  {
    initials: "ST",
    name: "The thinkers",
    role: "Strategy & direction",
    tone: "dark",
  },
  {
    initials: "DS",
    name: "The makers",
    role: "Brand & digital design",
    tone: "yellow",
  },
  {
    initials: "DV",
    name: "The builders",
    role: "Website development",
    tone: "dark",
  },
  {
    initials: "YOU",
    name: "The missing piece",
    role: "You & your next big idea",
    tone: "yellow",
  },
];

export const articles = [
  {
    slug: "every-section-needs-a-purpose",
    title: "Why every section needs a purpose",
    category: "WEB DESIGN",
    art: "orbit",
    readTime: "3 min read",
    intro:
      "A website is a sequence of decisions. Every section should help a visitor understand something, trust something, or take a useful next step.",
    paragraphs: [
      "Start with the question a visitor is asking. Your opening should explain what you do and who it is for. The sections that follow can show the work, answer practical questions, and make the next step feel natural.",
      "A section earns its place when it moves that conversation forward. A large image can demonstrate craft. A service description can clarify scope. A contact link can turn curiosity into a conversation. Decoration can add personality, but it cannot carry the whole argument.",
      "Before adding more content, look at the journey you already have. Remove repetition, put related ideas together, and use headings that tell the story even when someone is only scanning.",
      "The result does not have to be short. It has to be intentional. Give an idea enough space to land, then move on.",
    ],
  },
  {
    slug: "designing-for-humans",
    title: "Designing for humans: a touch first mindset",
    category: "DIGITAL EXPERIENCE",
    art: "pulse",
    readTime: "4 min read",
    intro:
      "The best interaction is the one that feels obvious. Designing for touch helps us focus on clear choices, comfortable targets, and feedback people can understand.",
    paragraphs: [
      "A phone changes the way people navigate. There is no reliable hover state to explain a hidden control, and the screen may be in one hand while attention is somewhere else. Labels and layouts need to do more of the work.",
      "Give interactive elements room to breathe. Keep related actions close, separate destructive actions, and make the primary next step easy to find. A larger tap target is often a better improvement than a more elaborate animation.",
      "Feedback should answer a simple question: did that work? A menu should reveal its state. A form should explain what needs fixing. A link should lead to the thing its label promises.",
      "Touch-first thinking is useful beyond mobile. Clear labels, visible focus states, and forgiving interactions also make a website easier to use with a keyboard or a mouse.",
    ],
  },
  {
    slug: "the-colour-of-confidence",
    title: "Neon on black: the colour of confidence",
    category: "BRAND THINKING",
    art: "sun",
    readTime: "3 min read",
    intro:
      "A small palette can have a big voice. The power comes from giving each colour a clear job and using it with consistency.",
    paragraphs: [
      "A strong accent colour works best when it has something quiet to play against. Charcoal gives our yellow room to be expressive. White creates breathing space. Together they form a simple system with enough range for a whole website.",
      "The accent does not need to cover every surface. It can mark an important action, bring a word into focus, or give a closing section its own energy. Repetition builds recognition; restraint makes that repetition meaningful.",
      "Colour also carries practical responsibilities. Text needs enough contrast, interactive states need to be distinguishable, and information should not depend on colour alone.",
      "Confidence is less about turning up the saturation and more about committing to a few deliberate choices. Choose the roles, use them consistently, and let the work speak.",
    ],
  },
] as const;
