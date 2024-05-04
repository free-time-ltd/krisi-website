import Flexbox from "@/components/Flexbox";
import Logo from "@/components/Logo";
import Typography from "@/components/Typography";
import Link from "@/components/Link";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <header className="min-h-12 flex w-full px-4 sm:px-20">
      <section className="sx:px-20 flex-1">
        <Flexbox justifyContent="between" alignItems="center">
          <div className="logo-area py-1 text-accent">
            <Link href="/" color="inherit">
              <Flexbox gap={2}>
                <Logo width={36} height={44} />
                <div className="relative">
                  <Typography gutterBottom={false}>Kristina Kostova</Typography>
                  <Typography gutterBottom={false} component="p">
                    Illustrator &amp; Painter
                  </Typography>
                </div>
              </Flexbox>
            </Link>
          </div>
          <NavMenu />
        </Flexbox>
      </section>
    </header>
  );
};

export default Header;
