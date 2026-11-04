import type { ComponentProps } from "react";
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
  ...props
}: ButtonLinkProps) {
  const shared = {
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
