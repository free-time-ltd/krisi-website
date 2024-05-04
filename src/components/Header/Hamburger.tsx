import { EventHandler, SyntheticEvent } from "react";

type ButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

const Hamburger = ({ onClick }: { onClick?: ButtonClickHandler }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex flex-col justify-between w-6 h-5 cursor-pointer"
  >
    {[0, 1, 2].map((idx) => (
      <div className="w-full h-0 border-b-2 border-b-accent" key={idx} />
    ))}
  </button>
);

export default Hamburger;
