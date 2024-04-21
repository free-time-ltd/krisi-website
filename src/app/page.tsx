import Image from "next/image";
import getOverview from "@/services/OverviewService";
import Link from "next/link";

export default async function Home() {
  const { data: overviewData, error } = await getOverview();

  if (!overviewData || error) {
    return <main>No gallery</main>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>hahahaha</p>
      {overviewData.overview.map((overview) => (
        <div className="gallery-wrapper" key={overview?.slug}>
          <h1 className="font-title text-3xl pb-2">{overview?.name}</h1>
          <div className="grid grid-cols-3">
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
    </main>
  );
}
