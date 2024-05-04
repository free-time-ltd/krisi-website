"use client";

import { ReactNode } from "react";
import Link from "@/components/Link";
import { usePathname } from "next/navigation";

const NavItem = ({
  href,
  children,
}: {
  children?: ReactNode;
  href: string;
}) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <li className={active ? "font-bold" : "font-normal"}>
      <Link href={href} color="accent">
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
