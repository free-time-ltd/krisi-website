import NavItem from "@/components/Header/NavItem";
import type { RouteList } from "./NavMenu";

const NavMenuDesktop = ({ routes }: { routes: RouteList }) => (
  <ul className="hidden lg:flex lg:gap-4 lg:items-center">
    {routes.map(({ href, title }) => (
      <NavItem href={href} key={href}>
        {title}
      </NavItem>
    ))}
  </ul>
);

export default NavMenuDesktop;
