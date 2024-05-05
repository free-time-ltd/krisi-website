import NavItem from "@/components/Header/NavItem";
import type { RouteList } from "./NavMenu";

const NavMenuDesktop = ({ routes }: { routes: RouteList }) => (
  <ul className="hidden sm:flex sm:gap-4 sm:items-center">
    {routes.map(({ href, title, target, rel }) => (
      <NavItem href={href} target={target} rel={rel} key={href}>
        {title}
      </NavItem>
    ))}
  </ul>
);

export default NavMenuDesktop;
