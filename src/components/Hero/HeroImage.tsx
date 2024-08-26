"use client";

import { useRef, type ReactNode } from "react";
import type { ImageThumbnail } from "@/graphql/types";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ResponsiveImage from "./ResponsiveImage";
import { ScrollDownButton } from "../Button";

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
  const heroImageRef = useRef<HTMLDivElement>(null);

  const handleSliderClick = () => {};

  return (
    <div className="heroimage-container relative" ref={heroImageRef}>
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
      <div className="absolute left-1/2 -translate-x-1/2 bottom-24">
        <ScrollDownButton onClick={handleSliderClick} title="Scroll Down" />
      </div>
    </div>
  );
};

export default HeroImage;
