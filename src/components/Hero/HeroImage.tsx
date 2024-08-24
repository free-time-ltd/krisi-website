"use client";

import type { ReactNode } from "react";
import Flexbox from "@/components/Flexbox";
import useScreen from "@/hooks/useScreen";
import type { ImageThumbnail } from "@/graphql/types";

interface SimpleImage {
  id: string;
  title: string;
  mature: boolean;
  nudity: boolean;
  violence: boolean;
  previewUrl: string;
  url: string;
  thumbnails: Record<string, ImageThumbnail>;
}

const HeroImage = ({
  children,
  images = [],
}: {
  children: ReactNode;
  images?: SimpleImage[];
}) => {
  const { width, height } = useScreen();

  return (
    <Flexbox
      style={{ width, height }}
      flexDirection="column"
      suppressHydrationWarning
    >
      This is the flexbox that is resizing itself per screen
      {children}
      <p>Length: {images.length}</p>
    </Flexbox>
  );
};

export default HeroImage;
