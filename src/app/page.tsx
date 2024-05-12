import Image from "next/image";
import getOverview from "@/services/OverviewService";
import Typography, { TypographyProps } from "@/components/Typography";
import Link, { NextLinkProps } from "@/components/Link";
import TextField from "@/components/TextField";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

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
    <>
      <Hero
        intro="Hello 👋, I'm"
        title="Kristina Kostova"
        subtitle="Artist specializing in painting and illustration"
        outro={`${
          new Date().getFullYear() - 2012
        } Years of experience creating custom artworks`}
      >
        <a
          href="#contact"
          className="bg-accent hover:bg-secondary text-base py-2 px-4 rounded-full inline-block"
        >
          <Typography
            variant="button"
            align="center"
            component="span"
            gutterBottom={false}
          >
            Contact
          </Typography>
        </a>
      </Hero>
      <section className="KpHero-root mx-auto rounded py-16 px-8 xl:max-w-screen-xl">
        <article>
          <Typography variant="h5" component="h1" align="center">
            Contact me
          </Typography>
          <div className="py-2">
            <ContactForm />
          </div>
        </article>
      </section>
      <section className="flex min-h-screen flex-col items-start lg:items-center justify-between m-4 sm:p-24">
        <p>hahahaha</p>
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
        <TextField label="Cool label" placeholder="placeholder string" />
        <TextField label="Cool label" />
        {overviewData.overview
          .filter((overview) => overview.slug !== "slider")
          .map((overview) => (
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
    </>
  );
}
