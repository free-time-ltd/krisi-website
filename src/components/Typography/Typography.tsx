import {
  HTMLAttributes,
  ReactNode,
  Ref,
  createElement,
  forwardRef,
} from "react";
import { cva, VariantProps } from "class-variance-authority";

type ComponentWithChildren = { children: ReactNode };

type FunctionalComponentWithChildren = ComponentWithChildren & {
  (props: ComponentWithChildren & { ref?: React.Ref<any> }): JSX.Element | null;
};

const typographyStyles = cva("KpTypograhy-root", {
  variants: {
    variant: {
      h1: [
        "font-light",
        "text-8xl",
        "leading-tight",
        "tracking-tight",
        "font-title",
      ],
      h2: [
        "font-light",
        "text-6xl",
        "leading-tight",
        "tracking-tight",
        "font-title",
      ],
      h3: [
        "font-normal",
        "text-5xl",
        "leading-tighter",
        "tracking-normal",
        "font-title",
      ],
      h4: ["font-normal", "text-4xl", "leading-tight", "font-title"],
      h5: ["font-normal", "text-2xl", "leading-snug", "font-title"],
      h6: ["font-medium", "text-xl", "leading-relaxed", "font-title"],
      body1: ["font-normal", "text-base", "font-text"],
      body2: ["font-normal", "text-sm", "font-text"],
      subtitle1: ["font-normal", "text-base", "font-text"],
      subtitle2: ["font-medium", "text-sm", "font-text"],
      button: ["font-medium", "text-sm", "uppercase", "font-text"],
      overline: ["font-normal", "text-xs", "uppercase", "font-text"],
    },
    align: {
      center: "text-center",
      left: "text-left",
      right: "text-right",
      justify: "text-justify",
    },
    color: {
      accent: ["text-accent"],
      primary: ["text-primary"],
      secondary: ["text-secondary"],
      success: ["text-success"],
      danger: ["text-danger"],
      info: ["text-info"],
      inherit: [],
    },
  },
  defaultVariants: {
    variant: "body1",
  },
});

export interface TypographyProps
  extends VariantProps<typeof typographyStyles>,
    HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  component?: string | FunctionalComponentWithChildren;
  gutterBottom?: boolean;
  noWrap?: boolean;
}

const variantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p",
} as const;

const Typography = (
  {
    children,
    variant,
    align,
    component,
    noWrap,
    color,
    gutterBottom = true,
    ...restProps
  }: TypographyProps,
  ref: Ref<HTMLDivElement>
) => {
  const componentEl =
    component ?? variantMapping[variant as keyof typeof variantMapping] ?? "p";
  const classList = typographyStyles({ variant, align, color });
  const extraClassNames = [] as string[];
  const TypographyComponent =
    typeof componentEl === "string"
      ? variantMapping[componentEl as keyof typeof variantMapping] ?? "p"
      : componentEl ?? "p";

  if (noWrap) {
    extraClassNames.push("whitespace-nowrap");
  }

  if (gutterBottom) {
    extraClassNames.push("mb-1");
  }

  const className = [classList, ...extraClassNames].join(" ");

  return typeof TypographyComponent === "string" ? (
    createElement(
      TypographyComponent,
      { ...restProps, ref, className },
      children
    )
  ) : (
    <TypographyComponent className={className} ref={ref} {...restProps}>
      {children}
    </TypographyComponent>
  );

  return;
};

export default forwardRef<HTMLDivElement, TypographyProps>(Typography);
