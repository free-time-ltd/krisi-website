import { ImageThumbnail, RankedImage } from "@/graphql/types";

type ThumbnailType =
  | "lq"
  | "2x_thumb"
  | "5x_thumb"
  | "16_9_thumb"
  | "450_thumb"
  | "site_thumb";

export default class OverviewImage {
  private image: RankedImage;
  private siteThumb?: ImageThumbnail;

  constructor(image: RankedImage) {
    this.image = image;
  }

  get id() {
    return this.image.id;
  }

  get title() {
    return this.image.title;
  }

  get url() {
    return this.image.url;
  }

  get previewUrl() {
    const url = new URL(this.image.previewUrl);

    return url.pathname;
  }

  get mature() {
    return this.image.mature;
  }

  get nudity() {
    return this.image.mature;
  }

  get violence() {
    return this.image.mature;
  }

  get smallestThumb() {
    if (!this.siteThumb) {
      this.siteThumb = ([...this.image.thumbnails] as ImageThumbnail[])
        .sort((a, b) => a.width * a.height - b.width * b.height)
        .at(0) as ImageThumbnail | undefined;
    }

    return this.siteThumb ?? this.image.thumbnails.at(0);
  }

  get thumbnails() {
    return this.image.thumbnails.filter(Boolean) as ImageThumbnail[];
  }

  thumbnailType(type: ThumbnailType) {
    return this.thumbnails.find((thumb) => thumb.type === type);
  }
}
