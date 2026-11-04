import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva("m9-button", {
  variants: {
    variant: {
      default: "m9-button-primary",
      outline: "m9-button-secondary",
      secondary: "m9-button-secondary",
      ghost: "m9-button-ghost",
      destructive: "m9-button-destructive",
      link: "m9-button-link",
    },
    size: {
      default: "m9-button-default",
      xs: "m9-button-xs",
      sm: "m9-button-sm",
      lg: "m9-button-lg",
      icon: "m9-button-icon",
      "icon-xs": "m9-button-icon-xs",
      "icon-sm": "m9-button-icon-sm",
      "icon-lg": "m9-button-icon-lg",
    },
  },
  defaultVariants: { variant: "default", size: "default" },
});

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
