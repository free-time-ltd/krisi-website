import Image from "next/image";
import KrisiTransparent from "@/assets/kk-transparent.webp";
import Container from "@/components/Container";
import Typography from "@/components/Typography";
import { getRemoteBaseUrl } from "@/lib/utils";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogPost from "@/components/BlogPost";

const fetchAboutMe = async () => {
  const { post } = await (
    await fetch(`${getRemoteBaseUrl()}/posts/about`)
  ).json();

  return post;
};

export async function generateMetadata(): Promise<Metadata> {
  const post = await fetchAboutMe();

  return {
    metadataBase: new URL(process.env?.NEXT_PUBLIC_APP_URL ?? ""),
    title: post.meta?.["og:title"] ?? post.title,
    description: post.meta.description,
    openGraph: {
      images: KrisiTransparent.src,
    },
  };
}

export default async function About() {
  const post = await fetchAboutMe();

  if (!post) {
    return notFound();
  }

  return (
    <Container>
      <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
        <Image
          src={KrisiTransparent}
          alt="Kristina Kostova Profile Picture"
          width={128}
          priority
          quality={85}
        />
      </div>

      <Typography align="center" variant="h1">
        {post.title}
      </Typography>

      <BlogPost post={post} />
    </Container>
  );
}
