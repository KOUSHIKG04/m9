"use client";

import Image from "next/image";
import { portfolioImages } from "./portfolio-images";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";

export function ProjectPreview({
  slug,
  name,
  priority,
}: {
  slug: string;
  name: string;
  priority: boolean;
}) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">(
    "loading",
  );
  return (
    <span className="portfolio-panel-preview" aria-busy={status === "loading"}>
      {status === "loading" && (
        <span
          className="portfolio-preview-loader"
          role="status"
          aria-label="Loading project preview"
        >
          <LoaderCircle aria-hidden="true" />
        </span>
      )}
      {status === "error" ? (
        <span className="portfolio-preview-error">
          <strong>{name}</strong>
          <span>Preview unavailable. Browse another project.</span>
        </span>
      ) : (
        <Image
          src={portfolioImages[slug]}
          alt={name + " project preview"}
          fill
          sizes="(max-width: 760px) 54vw, (max-width: 1091px) 44vw, 480px"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          draggable={false}
          className={status === "loaded" ? "is-loaded" : ""}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
        />
      )}
    </span>
  );
}
