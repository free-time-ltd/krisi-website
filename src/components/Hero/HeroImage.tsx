"use client";

import { type ReactNode } from "react";
import type { ImageThumbnail } from "@/graphql/types";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ResponsiveImage from "./ResponsiveImage";

export interface SimpleImage {
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
  children?: ReactNode;
  images?: SimpleImage[];
}) => {
  console.log({ images });
  return (
    <div className="heroimage-container relative">
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-screen overflow-hidden">
              <ResponsiveImage image={image} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="child-container">{children}</div>
        </div>
      )}
    </div>
  );
};

export default HeroImage;
