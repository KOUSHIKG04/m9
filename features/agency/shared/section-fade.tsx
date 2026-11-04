type SectionFadeProps = {
  from: "dark" | "light" | "black" | "yellow";
  to: "dark" | "light" | "yellow" | "black";
};
export function SectionFade({ from, to }: SectionFadeProps) {
  return (
    <div
      className={["section-fade", "fade-from-" + from, "fade-to-" + to].join(
        " ",
      )}
      aria-hidden="true"
    />
  );
}
