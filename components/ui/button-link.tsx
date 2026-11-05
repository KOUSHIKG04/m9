"use client";

import type { ComponentProps, MouseEvent } from "react";
import type { VariantProps } from "class-variance-authority";
import Link from "next/link";
import { buttonVariants } from "./button";
import { cn } from "cn";

type ButtonLinkProps = ComponentProps<"a"> &
  VariantProps<typeof buttonVariants> & { href: string };

export function ButtonLink({
  href,
  className,
  variant = "default",
  size = "default",
  onClick,
  ...props
}: ButtonLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      (event.currentTarget.target && event.currentTarget.target !== "_self") ||
      event.currentTarget.hasAttribute("download")
    )
      return;

    const destination = new URL(event.currentTarget.href);
    if (!destination.hash || destination.href !== window.location.href) return;
    const section = document.getElementById(
      decodeURIComponent(destination.hash.slice(1)),
    );
    if (!section) return;

    // Repeat a section jump even when its URL is already active.
    event.preventDefault();
    section.scrollIntoView({ behavior: "auto", block: "start" });
  }

  const shared = {
    onClick: handleClick,
    "data-slot": "button",
    "data-variant": variant,
    "data-size": size,
    className: cn(buttonVariants({ variant, size, className })),
  };
  return href.startsWith("/") ? (
    <Link href={href} {...shared} {...props} />
  ) : (
    <a href={href} {...shared} {...props} />
  );
}
