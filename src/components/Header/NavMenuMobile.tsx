"use client";

import useToggle from "@/hooks/useToggle";
import type { RouteList } from "./NavMenu";
import Hamburger from "./Hamburger";
import NavItem from "./NavItem";

const NavMenuMobile = ({ routes }: { routes: RouteList }) => {
  const [isOpen, toggleMenu] = useToggle(false);

  return (
    <div className="sm:hidden">
      <div className="button-handler">
        <Hamburger onClick={() => toggleMenu()} />
      </div>
      {isOpen && (
        <div className="overlay fixed top-0 left-0 w-full h-full bg-neutral-950/80 z-50 overflow-hidden">
          <div className="menu absolute top-0 right-0 w-9/12 h-full bg-neutral-950 flex flex-col px-5 py-12 transition ease-in-out duration-150">
            <div className="close-btn absolute top-5 right-4">
              <Hamburger onClick={() => toggleMenu()} />
            </div>
            <ul className="grid gap-2">
              {routes.map(({ href, title }) => (
                <NavItem href={href} key={href}>
                  {title}
                </NavItem>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavMenuMobile;
