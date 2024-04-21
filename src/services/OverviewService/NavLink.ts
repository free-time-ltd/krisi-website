import { NavigationLink } from "@/graphql/types";

export default class NavLink {
  private link: NavigationLink;

  constructor(link: NavigationLink) {
    this.link = link;
  }
}
