import getClient from "@/graphql/client";
import {
  FindImageDocument,
  FindImageQuery,
  FindImageQueryVariables,
} from "@/graphql/operations";
import { Gallery, ImageResponse } from "@/graphql/types";
import { Metadata } from "next/types";

const loadImage = async (image: string) => {
  return getClient().query<FindImageQuery, FindImageQueryVariables>(
    FindImageDocument,
    { image }
  );
};

interface Props {
  slug: string;
  image: string;
}

export default async function ImagePreviewPage({ params }: { params: Props }) {
  const { data, error } = await loadImage(params.image);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>hahahaha</p>
      <p>image data</p>
      <p>{params.slug}</p>
      <p>{params.image}</p>
      <p className="break-all whitespace-break-spaces">
        {JSON.stringify(data)}
      </p>
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Props;
}): Promise<Metadata> {
  const { data, error } = await loadImage(params.image);

  const image = data?.image?.thumbnails.find(
    (thumb) => thumb?.type === "450_thumb"
  )?.url;

  return {
    title: `${data?.image?.title} - Kristina Kostova`,
    description: data?.image?.description,
    openGraph: {
      type: "website",
      siteName: "Kristina Kostova Portfolio",
      ...(image && { images: [image] }),
    },
    keywords: generateKeywords(data?.image as ImageResponse),
  };
}

const generateKeywords = (image?: ImageResponse): string[] | undefined => {
  if (!image) return;

  const words = new Map<string, number>();

  image.categories
    .filter(Boolean)
    .forEach((category) => incrementWord(words, (category as Gallery).name, 2));

  image.title.split(" ").forEach((word) => incrementWord(words, word));
  image.description.split(" ").forEach((word) => incrementWord(words, word));
  image.tags.forEach((tag) => incrementWord(words, tag.name, 3));

  return Array.from(words.keys());
};

const incrementWord = (
  source: Map<string, number>,
  word: string,
  aggregator: number = 1
) => {
  const bridgeWords = [
    "of",
    "the",
    "in",
    "or",
    "and",
    "to",
    "with",
    "for",
    "on",
    "at",
    "by",
    "done",
    "-",
    "#1",
  ];
  const key = word.toLowerCase();

  if (bridgeWords.includes(key) || /(?:https?:\/\/|www\.)\S+/.test(key)) return;

  source.set(key, (source.get(key) ?? 0) + aggregator);
};
