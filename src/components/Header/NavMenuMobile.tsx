"use client";

import useToggle from "@/hooks/useToggle";
import type { RouteList } from "./NavMenu";
import Hamburger from "./Hamburger";
import NavItem from "./NavItem";
import { createPortal } from "react-dom";

const Backdrop = ({ onClick }: { onClick?: () => void }) => (
  <div
    className="block sm:hidden fixed top-0 left-0 w-full h-full bg-neutral-950/80 z-40 overflow-hidden"
    onClick={onClick}
  />
);

const NavMenuMobile = ({ routes }: { routes: RouteList }) => {
  const [isOpen, toggleMenu] = useToggle(false);

  const extraClasses = isOpen ? "translate-x-0" : "translate-x-full";

  return (
    <div className="block sm:hidden">
      <div className="button-handler">
        <Hamburger toggled={isOpen} onClick={() => toggleMenu()} />
      </div>
      {isOpen &&
        createPortal(<Backdrop onClick={() => toggleMenu()} />, document.body)}
      <div
        className={`menu absolute top-0 right-0 z-50 w-9/12 h-full bg-primary flex flex-col px-5 py-12 transition ease-in-out duration-150 ${extraClasses}`}
      >
        <div className="close-btn absolute top-5 right-4">
          <Hamburger toggled={isOpen} onClick={() => toggleMenu()} />
        </div>
        <ul className="grid gap-4">
          {routes.map(({ href, title }) => (
            <NavItem href={href} key={href}>
              {title}
            </NavItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavMenuMobile;
