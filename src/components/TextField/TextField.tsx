"use client";
import { cva, VariantProps } from "class-variance-authority";
import { InputHTMLAttributes, Ref, forwardRef, useRef } from "react";

const textfieldStyles = cva(
  "KpTextField-root bg-transparent p-2.5 border focus:rounded-none text-sm block w-full",
  {
    variants: {
      color: {
        accent: [
          "border-accent hover:border-secondary",
          "disabled:bg-green-100 disabled:text-slate-500",
        ],
        primary: ["border-blue-700", "hover:border-blue-600"],
        secondary: ["border-black", "hover:border-gray-100"],
        danger: ["border-red-600"],
        error: ["border-red-600"],
      },
    },
    defaultVariants: {
      color: "accent",
    },
  }
);

interface Props
  extends VariantProps<typeof textfieldStyles>,
    Omit<InputHTMLAttributes<HTMLInputElement>, "color"> {
  type?: "text";
  label?: string;
  error?: string;
}

const TextField = (
  { type = "text", color, label, ...restProps }: Props,
  ref: Ref<HTMLInputElement>
) => {
  const uuid = useRef(restProps.id ?? generateUniqueId());

  return (
    <div className="KpTextfield-root">
      {label && (
        <label
          htmlFor={uuid.current}
          className="block mb-2 text-sm font-medium"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        className={textfieldStyles({ color })}
        {...restProps}
        {...(label && { id: uuid.current })}
        ref={ref}
      />
    </div>
  );
};

export default forwardRef<HTMLInputElement, Props>(TextField);

function djb2(str: string) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 33) ^ str.charCodeAt(i);
  }
  return hash >>> 0; // Ensure non-negative integer
}

function generateUniqueId() {
  const timestamp = new Date().getTime();
  const random = Math.random().toString(36).substring(2, 10); // Generates a random string
  const data = `${timestamp}_${random}`;
  const hash = djb2(data).toString(36);
  return `${hash}`;
}
