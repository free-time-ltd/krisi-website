import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes, ReactNode, Ref } from "react";
import Typography from "../Typography";

const buttonStyles = cva(
  "KpButton-root rounded px-6 pb-2 pt-2.5 transition duration-150 ease-in-out focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]",
  {
    variants: {
      variant: {
        primary: ["bg-blue-700", "hover:bg-blue-600"],
        secondary: ["bg-black", "hover:bg-gray-100"],
        danger: ["bg-red-600"],
      },
      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-2", "px-4"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

interface ButtonProps
  extends VariantProps<typeof buttonStyles>,
    Omit<HTMLAttributes<HTMLButtonElement>, "className"> {
  type?: "button" | "submit" | "reset";
  children?: ReactNode;
}

const Button = (
  { type = "button", children, variant, size, ...restProps }: ButtonProps = {},
  ref: Ref<HTMLButtonElement>
) => {
  return (
    <button
      type={type}
      className={buttonStyles({ variant, size })}
      ref={ref}
      {...restProps}
    >
      {typeof children === "string" ? (
        <Typography variant="button" align="center" gutterBottom={false}>
          {children}
        </Typography>
      ) : (
        <>{children}</>
      )}
    </button>
  );
};

export default forwardRef<HTMLButtonElement, ButtonProps>(Button);
