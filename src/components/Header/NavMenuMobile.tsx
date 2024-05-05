"use client";

import { createPortal } from "react-dom";
import type { RouteList } from "./NavMenu";
import Hamburger from "./Hamburger";
import NavItem from "./NavItem";
import { useEffect, useState, useTransition } from "react";

const Backdrop = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div
      className="block sm:hidden fixed top-0 left-0 w-full h-full bg-neutral-950/80 z-40 overflow-hidden overflow-y-scroll"
      onClick={onClick}
    />
  );
};

const NavMenuMobile = ({ routes }: { routes: RouteList }) => {
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const extraClasses =
    isOpen && !isPending ? "translate-x-0" : "translate-x-full";

  const toggleMenu = () => {
    startTransition(() => setIsOpen((prev) => !prev));
  };

  return (
    <div className="block sm:hidden">
      <div className="button-handler">
        <Hamburger toggled={isOpen} onClick={() => toggleMenu()} />
      </div>
      {isOpen &&
        createPortal(<Backdrop onClick={() => toggleMenu()} />, document.body)}
      <div
        className={`menu fixed top-0 right-0 h-screen z-50 w-9/12 bg-primary flex flex-col px-5 py-12 transition ease-in-out duration-150 ${extraClasses}`}
      >
        <div className="close-btn absolute top-5 right-4">
          <Hamburger toggled={isOpen} onClick={toggleMenu} />
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
