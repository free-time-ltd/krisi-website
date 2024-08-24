"use client";

import { useEffect, useState, type ReactNode } from "react";
import type { ImageThumbnail } from "@/graphql/types";
import ResponsiveImage from "./ResponsiveImage";
import Flexbox from "../Flexbox";

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
  children: ReactNode;
  images?: SimpleImage[];
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    document.addEventListener("keyup", handleKeyPress);

    return () => document.removeEventListener("keyup", handleKeyPress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyPress = (e: KeyboardEvent) => {
    switch (e.key) {
      case "ArrowUp":
        handleResize();
        break;
      case "ArrowLeft":
        handlePrevImage();
        break;
      case "ArrowRight":
        handleNextImage();
        break;
    }
  };

  const handlePrevImage = () => {
    setCurrentImage((prev) => Math.max(0, prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => Math.min(images.length - 1, prev + 1));
  };

  const handleResize = () => {
    window.dispatchEvent(new Event("resize"));
  };

  return (
    <div className="hero-image-container carousel w-full overflow-hidden relative">
      <div
        className="carousel-inner flex w-full transform ease-in-out duration-500"
        style={{
          transform: `translateX(-${currentImage * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div className="carousel-item min-w-full h-screen" key={index}>
            <ResponsiveImage image={image} />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="hero-container">
          {children}
          <Flexbox flexDirection="column">
            <button onClick={handlePrevImage}>Prev image</button>
            <button onClick={handleNextImage}>Next image</button>
          </Flexbox>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
