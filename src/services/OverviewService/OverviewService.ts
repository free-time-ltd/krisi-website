import getClient from "@/graphql/client";
import {
  GetOverviewDocument,
  GetOverviewQuery,
  GetOverviewQueryVariables,
} from "@/graphql/operations";
import OverviewImage from "./OverviewImage";
import { NavigationLink, RankedImage } from "@/graphql/types";
import NavLink from "./NavLink";

interface OverviewProps {
  imageLimit?: number;
}

export type Overview = {
  name: string;
  slug: string;
  url: string;
  images: OverviewImage[];
};

export default async function getOverview({
  imageLimit = 5,
}: OverviewProps = {}) {
  const { data, error } = await getClient().query<
    GetOverviewQuery,
    GetOverviewQueryVariables
  >(GetOverviewDocument, {
    imageLimit,
  });

  if (!data && error) {
    console.error(error);
    return { data: undefined, error };
  }

  return {
    data: {
      navivations: (data?.navigations ?? []).map((menu) => ({
        name: menu?.name,
        links: (menu?.links ?? []).map(
          (link) => new NavLink(link as NavigationLink)
        ),
      })),
      overview: (data?.overview ?? []).map((overview) => ({
        name: overview?.name,
        slug: overview?.slug,
        url: overview?.url,
        images: (overview?.images ?? []).map(
          (image) => new OverviewImage(image as RankedImage)
        ),
      })),
    },
    error,
  };
}
