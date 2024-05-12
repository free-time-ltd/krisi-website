"use client";
import { useEffect, useRef } from "react";
import Flexbox from "@/components/Flexbox";
import Link from "@/components/Link";
import NavMenu from "./NavMenu";
import LogoBrush from "../LogoBrush";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;

      if (window.scrollY > 0) {
        headerRef.current.classList.add("shadow-lg");
      } else {
        headerRef.current.classList.remove("shadow-lg");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="min-h-12 flex w-full px-4 py-4 sm:px-10 sticky top-0 z-10 bg-primary"
      ref={headerRef}
    >
      <section className="flex-1">
        <Flexbox justifyContent="between" alignItems="center">
          <div className="logo-area py-1">
            <Link href="/" color="inherit" title="Kristina Kostova Portfolio">
              <Flexbox gap={2}>
                <div className="text-accent">
                  <LogoBrush width={220} />
                </div>
              </Flexbox>
            </Link>
          </div>
          <NavMenu />
        </Flexbox>
      </section>
    </header>
  );
};

export default Header;
