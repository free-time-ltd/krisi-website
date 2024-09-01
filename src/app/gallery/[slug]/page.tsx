import Container from "@/components/Container";
import LogoBrush from "@/components/LogoBrush";
import Typography from "@/components/Typography";

interface Props {
  slug: string;
  image: string;
}

const loadGallery = async (slug: string) => {
  const url = `http://${process.env.NEXT_PUBLIC_API_HOSTNAME}/gallery/${slug}`;

  return (await fetch(url)).json();
};

export default async function GalleryIndex({
  params: { slug },
}: {
  params: Props;
}) {
  const gallery = await loadGallery(slug);

  return (
    <Container>
      <Typography variant="h1" align="center">
        {gallery.category.name}
      </Typography>
      <div className="my-4 text-secondary">
        <LogoBrush />
      </div>
    </Container>
  );
}
