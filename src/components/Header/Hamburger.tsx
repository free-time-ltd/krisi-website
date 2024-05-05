import { EventHandler, SyntheticEvent } from "react";

type ButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

const Hamburger = ({
  onClick,
  toggled = false,
}: {
  onClick?: ButtonClickHandler;
  toggled?: boolean;
}) => (
  <button
    type="button"
    onClick={onClick}
    className="overflow-hidden p-1 cursor-pointer"
    title="Navigation menu"
  >
    <span className="text-accent">
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16"
          className={lineCss(
            toggled ? "rotate-45 -translate-x-1 translate-y-1" : ""
          )}
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 12h16"
          className={lineCss(toggled ? "translate-x-full opacity-0" : "")}
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 18h16"
          className={lineCss(
            toggled ? "-rotate-45 -translate-x-1 -translate-y-1" : ""
          )}
        />
      </svg>
    </span>
  </button>
);

const lineCss = (extraClasses?: string) =>
  ["origin-center transition duration-300 ease-in-out transform", extraClasses]
    .map((cls) => cls?.trim())
    .filter(Boolean)
    .join(" ");

export default Hamburger;
