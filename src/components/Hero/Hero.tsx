import { FC, PropsWithChildren } from "react";
import Typography from "../Typography";

interface Props {
  fullWidth?: boolean;
  noGutter?: boolean;
  intro?: string;
  title?: string;
  subtitle?: string;
  outro?: string;
}

const Hero: FC<PropsWithChildren<Props>> = ({
  fullWidth = false,
  noGutter = false,
  intro,
  title,
  subtitle,
  outro,
  children,
}) => {
  const classList = ["py-16 px-8"];

  if (fullWidth) {
    classList.push("max-w-full w-full");
  } else {
    classList.push("xl:max-w-screen-xl");
  }

  classList.push(noGutter ? "my-0" : "my-5");

  return (
    <section className={`KpHero-root mx-auto rounded ${classList.join(" ")}`}>
      <article>
        {intro && <Typography variant="body2">{intro}</Typography>}
        {title && (
          <h1 className="KpTypograhy-root font-light text-8xl leading-none tracking-tight font-title">
            {title}
          </h1>
        )}
        {subtitle && (
          <h2 className="KpTypograhy-root text-sm font-text text-left tracking-wide text-accent mb-1 font-bold">
            {subtitle}
          </h2>
        )}
        {outro && <Typography variant="body1">{outro}</Typography>}
        <div className="my-4">{children}</div>
      </article>
    </section>
  );
};

export default Hero;
