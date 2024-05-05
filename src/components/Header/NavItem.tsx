"use client";

import { HTMLAttributes, ReactNode } from "react";
import Link from "@/components/Link";
import { usePathname } from "next/navigation";

const NavItem = ({
  href,
  children,
  target,
  rel,
}: {
  children?: ReactNode;
  target?: HTMLAttributes<HTMLAnchorElement>["target"];
  rel?: HTMLAttributes<HTMLAnchorElement>["rel"];
  href: string;
}) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <li className={active ? "font-bold" : "font-normal"}>
      <Link href={href} target={target} rel={rel} color="accent">
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
