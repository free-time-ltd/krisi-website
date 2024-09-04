"use client";

import { createPortal } from "react-dom";
import type { RouteList } from "./NavMenu";
import Hamburger from "./Hamburger";
import NavItem from "./NavItem";
import { useEffect, useState, useTransition } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const Backdrop = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div
      className="block sm:hidden fixed top-0 left-0 w-full h-full bg-neutral-950/80 z-40 overflow-hidden overflow-y-scroll"
      onClick={onClick}
    />
  );
};

const NavMenuMobile = ({ routes }: { routes: RouteList }) => {
  const [_, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const toggleMenu = () => {
    startTransition(() => setIsOpen((prev) => !prev));
  };

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  return (
    <div className="block sm:hidden">
      <div className="button-handler">
        <Hamburger toggled={isOpen} onClick={() => toggleMenu()} />
      </div>
      {isOpen &&
        createPortal(
          <div className="header-menu overflow-hidden">
            <Backdrop onClick={() => toggleMenu()} />
            <div
              className={`menu fixed top-0 -right-full animate-slide-in h-screen z-50 w-9/12 bg-primary flex flex-col px-5 py-12 transition`}
            >
              <div className="close-btn absolute top-5 left-0">
                <Hamburger toggled={isOpen} onClick={toggleMenu} />
              </div>
              <ul className="grid gap-4 py-4">
                {routes.map(({ href, title }) => (
                  <NavItem href={href} key={href}>
                    {title}
                  </NavItem>
                ))}
              </ul>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default NavMenuMobile;
