import { HTMLAttributes, Ref, forwardRef } from "react";

interface Props extends HTMLAttributes<HTMLInputElement> {
  type?: "text";
  label?: string;
}

const TextField = (
  { type = "text", label, ...restProps }: Props,
  ref: Ref<HTMLInputElement>
) => {
  if (!restProps.id) {
    restProps.id = generateUniqueId();
  }

  return (
    <div className="KpTextfield-root mb-6">
      {label && (
        <label
          htmlFor={restProps.id}
          className="block mb-2 text-sm font-medium"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        className={`bg-transparent p-2.5 border border-accent hover:border-secondary focus:rounded-none text-sm block w-full`}
        {...restProps}
        ref={ref}
      />
    </div>
  );
};

export default forwardRef(TextField);

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
