import { cva } from "class-variance-authority";
import { forwardRef, HTMLAttributes, Ref } from "react";

const containerStyles = cva("KpContainer-root sm:container");

const Container = (
  { children, ...props }: HTMLAttributes<HTMLDivElement>,
  ref: Ref<HTMLDivElement>
) => (
  <div
    {...props}
    className={` ${containerStyles()} ${props?.className ?? ""}`}
    ref={ref}
  >
    {children}
  </div>
);

export default forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  Container
);
