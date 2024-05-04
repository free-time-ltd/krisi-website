import Image from "next/image";
import getOverview from "@/services/OverviewService";
import Button from "@/components/Button";
import Typography, { TypographyProps } from "@/components/Typography";
import Link, { NextLinkProps } from "@/components/Link";
import TextField from "@/components/TextField";

export default async function Home() {
  const { data: overviewData, error } = await getOverview();

  if (!overviewData || error) {
    return <main>No gallery</main>;
  }

  const TypographyTypes = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "body1",
    "body2",
    "subtitle1",
    "subtitle2",
    "button",
    "overline",
  ] as Array<keyof TypographyProps["variant"]>;

  const linkColors = [
    "accent",
    "primary",
    "secondary",
    "success",
    "danger",
    "info",
  ] as Array<keyof NextLinkProps["color"]>;

  return (
    <section className="flex min-h-screen flex-col items-start lg:items-center justify-between m-4 sm:p-24">
      <p>hahahaha</p>
      {["primary", "secondary", "danger"].map((variant) => (
        <Button variant={variant} key={variant}>
          Button {variant}
        </Button>
      ))}
      {["primary", "secondary", "danger"].map((variant) => (
        <Button variant={variant} key={variant} disabled>
          Disabled Button {variant}
        </Button>
      ))}
      <div className="my-4 break-words whitespace-break-spaces">
        {TypographyTypes.map((type) => (
          <Typography variant={type} key={type}>
            Typography type {type}
          </Typography>
        ))}
      </div>
      <div className="my-4 sm:w-96">
        {linkColors.map((link) => (
          <p key={link}>
            <Link href="#" color={link}>
              Link type {link}
            </Link>
          </p>
        ))}
        <p>
          <Link href="#" underline>
            Primary underlined
          </Link>
        </p>
      </div>
      <TextField label="Cool label" />
      <TextField label="Cool label" />
      {overviewData.overview.map((overview) => (
        <div className="gallery-wrapper" key={overview?.slug}>
          <Typography variant="h4" component="h1">
            {overview.name}
          </Typography>
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {overview.images.map((image) => (
              <div className="image" key={image?.previewUrl}>
                <Link href={image.previewUrl}>
                  {image.smallestThumb && (
                    <Image
                      src={image.smallestThumb.url}
                      width={image.smallestThumb.width}
                      height={image.smallestThumb.width}
                      alt={image.title}
                      className="mx-auto"
                    />
                  )}
                </Link>
                <p className="text-center">{image.previewUrl}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
