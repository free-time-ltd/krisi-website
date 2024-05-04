import { HTMLAttributes, Ref, forwardRef } from "react";
import Link, { type LinkProps } from "next/link";
import { cva, VariantProps } from "class-variance-authority";

const linkStyles = cva("KpLink-root transition duration-150 ease-in-out", {
  variants: {
    color: {
      accent: [
        "text-accent",
        "hover:text-accent-600",
        "focus:text-accent-600",
        "active:text-accent-700",
      ],
      primary: [
        "text-primary",
        "hover:text-primary-600",
        "focus:text-primary-600",
        "active:text-primary-700",
      ],
      secondary: [
        "text-secondary",
        "hover:text-secondary-600",
        "focus:text-secondary-600",
        "active:text-secondary-700",
      ],
      success: [
        "text-success",
        "hover:text-success-600",
        "focus:text-success-600",
        "active:text-success-700",
      ],
      danger: [
        "text-danger",
        "hover:text-danger-600",
        "focus:text-danger-600",
        "active:text-danger-700",
      ],
      info: [
        "text-info",
        "hover:text-info-600",
        "focus:text-info-600",
        "active:text-info-700",
      ],
      inherit: [],
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

type LinkRef = HTMLAnchorElement;
type HTMLLinkProps = HTMLAttributes<HTMLAnchorElement>;
export type NextLinkProps = Omit<HTMLLinkProps, "href" | "className"> &
  Pick<LinkProps, "href" | "locale" | "as" | "prefetch"> &
  VariantProps<typeof linkStyles> & {
    classes?: string;
    underline?: boolean;
  };

const NextLink = (
  {
    href,
    as,
    prefetch,
    locale,
    color,
    underline,
    classes,
    ...props
  }: NextLinkProps,
  ref: Ref<LinkRef>
) => {
  const cvaClasses = linkStyles({ color });
  const extraClasses = [];
  if (underline) {
    extraClasses.push("underline");
  }

  if (classes) {
    classes
      .split(" ")
      .filter(Boolean)
      .map((cls) => cls.trim())
      .forEach((cls) => extraClasses.push(cls));
  }

  const classList = [cvaClasses, ...extraClasses].join(" ");

  return (
    <Link
      href={href}
      as={as}
      locale={locale}
      prefetch={prefetch}
      passHref
      legacyBehavior
    >
      <a ref={ref} {...props} className={classList} />
    </Link>
  );
};

export default forwardRef<LinkRef, NextLinkProps>(NextLink);
