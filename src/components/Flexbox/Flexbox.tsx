import { HTMLAttributes, ReactNode, Ref, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";

const flexboxStyles = cva("KpFlexbox-root flex", {
  variants: {
    justifyContent: {
      normal: "justify-normal",
      start: "justify-start",
      end: "justify-end",
      even: "justify-evenly",
      between: "justify-between",
      center: "justify-center",
      stretch: "justify-stretch",
    },
    alignItems: {
      start: "items-start",
      end: "items-end",
      center: "items-center",
      baseline: "items-baseline",
      stretch: "items-stretch",
    },
    gap: {
      0: "gap-0",
      1: "gap-1",
      2: "gap-2",
      3: "gap-3",
      4: "gap-4",
      5: "gap-5",
    },
  },
  defaultVariants: {
    justifyContent: "center",
    alignItems: "center",
    gap: 0,
  },
});

interface FlexboxProps
  extends VariantProps<typeof flexboxStyles>,
    Omit<HTMLAttributes<HTMLDivElement>, "className"> {
  children?: ReactNode;
}

const Flexbox = (
  { children, justifyContent, alignItems, gap, ...restProps }: FlexboxProps,
  ref: Ref<HTMLDivElement>
) => {
  return (
    <div
      {...restProps}
      className={flexboxStyles({ justifyContent, alignItems, gap })}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default forwardRef<HTMLDivElement, FlexboxProps>(Flexbox);
