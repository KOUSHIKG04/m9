type SocialIconProps = {
  name: "instagram" | "facebook" | "twitter" | "linkedin";
};

export function SocialIcon({ name }: SocialIconProps) {
  if (name === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  const paths = {
    facebook:
      "M13.7 22v-9.1h3.1l.5-3.6h-3.6V7c0-1 .3-1.8 1.8-1.8h1.9V2.1c-.3 0-1.5-.1-2.8-.1-2.8 0-4.7 1.7-4.7 4.8v2.5H6.8v3.6h3.1V22h3.8Z",
    twitter:
      "M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l8.2-9.4L2.8 2h6.5l4.4 6.7L18.9 2ZM17.8 20h1.7L8.4 4H6.6l11.2 16Z",
    linkedin:
      "M5.4 7.8H1.8V22h3.6V7.8ZM3.6 2a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM22.2 13.9c0-4.3-2.3-6.3-5.3-6.3-2.4 0-3.4 1.3-4 2.2v-2H9.3V22h3.6v-7.9c0-2.1.4-4.1 3-4.1 2.5 0 2.6 2.4 2.6 4.2V22h3.7v-8.1Z",
  };
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}
