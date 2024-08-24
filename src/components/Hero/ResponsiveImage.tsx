import { getImageProps } from "next/image";
import { FC } from "react";
import { SimpleImage } from "./HeroImage";

interface Props {
  image: SimpleImage;
}

const ResponsiveImage: FC<Props> = ({ image }) => {
  const common = { alt: image.title, sizes: "100vw", priority: true };

  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: image.thumbnails.lq.width,
    height: image.thumbnails.lq.height,
    quality: 80,
    src: image.thumbnails.lq.url,
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: image.thumbnails["5x_thumb"].width,
    height: image.thumbnails["5x_thumb"].height,
    quality: 70,
    src: image.thumbnails["5x_thumb"].url,
  });

  return (
    <picture>
      <source media="(min-width: 960px)" srcSet={desktop} />
      <source media="(min-width: 500px)" srcSet={mobile} />
      <img
        {...rest}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </picture>
  );
};

export default ResponsiveImage;
