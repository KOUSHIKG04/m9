import { ButtonLink } from "@/components/ui/button-link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main
      className="detail-page section-pad"
      style={{
        minHeight: "100svh",
        display: "grid",
        alignContent: "center",
        gap: 24,
      }}
    >
      <h1 className="display-heading">A little off course.</h1>
      <p>This page isn’t here. Let’s get you back to the good stuff.</p>
      <ButtonLink style={{ justifySelf: "start" }} href="/">
        Back to MOTIVE 9
      </ButtonLink>
    </main>
  );
}
