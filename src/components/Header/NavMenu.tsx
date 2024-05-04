import NavMenuDesktop from "./NavMenuDesktop";
import NavMenuMobile from "./NavMenuMobile";

const Routes = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Portfolio",
    href: "/gallery/portfolio",
  },
  {
    title: "Contacts",
    href: "#contacts",
  },
];

export type RouteItem = (typeof Routes)[number];
export type RouteList = RouteItem[];

const NavMenu = () => {
  return (
    <nav className="nav-menu">
      <NavMenuDesktop routes={Routes} />
      <NavMenuMobile routes={Routes} />
    </nav>
  );
};

export default NavMenu;
