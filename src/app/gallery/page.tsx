import Image from "next/image";
import type { Metadata } from "next";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { getImageUrl } from "@/lib/pixabay";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore the breathtaking landscapes and majestic wildlife of East Africa through our gallery of photos and videos from our safari tours.",
};

export default async function GalleryPage() {
    const imageQueries = [
      { query: "lion resting", alt: "A lion resting on a rock", orientation: "landscape" },
      { query: "giraffe acacia", alt: "A giraffe eating from a tall acacia tree", orientation: "portrait" },
      { query: "elephants waterhole", alt: "A herd of elephants by a waterhole", orientation: "landscape" },
      { query: "kilimanjaro sunrise", alt: "The summit of Mount Kilimanjaro at sunrise", orientation: "landscape" },
      { query: "wildebeest migration", alt: "Wildebeest crossing the Mara River", orientation: "landscape" },
      { query: "maasai warrior", alt: "A Maasai warrior in traditional clothing", orientation: "portrait" },
      { query: "serengeti sunset", alt: "A beautiful sunset over the Serengeti plains", orientation: "landscape" },
      { query: "leopard tree", alt: "A leopard lounging on a tree branch", orientation: "landscape" },
      { query: "flamingos lake", alt: "Flamingos in Lake Manyara", orientation: "landscape" },
      { query: "ngorongoro crater view", alt: "A stunning view of the Ngorongoro Crater", orientation: "portrait" },
      { query: "zanzibar dhow boat", alt: "A traditional dhow boat on the coast of Zanzibar", orientation: "landscape" },
      { query: "cheetahs savannah", alt: "A family of cheetahs on the savannah", orientation: "landscape" },
    ];

    const [heroImage, ...galleryImages] = await Promise.all([
        getImageUrl("savannah sunset", 1280, 512),
        ...imageQueries.map(async (img) => {
            const isPortrait = img.orientation === 'portrait';
            const width = isPortrait ? 400 : 600;
            const height = isPortrait ? 600 : 400;
            const url = await getImageUrl(img.query, width, height);
            return { ...img, src: url };
        })
    ]);
    
    const images = galleryImages;

  return (
    <div>
      <section className="relative h-[40vh] w-full flex items-center justify-center">
        <Image
          src={heroImage}
          alt="A colorful sunset over the savannah"
          fill
          className="object-cover brightness-50"
          data-ai-hint="savannah sunset"
        />
        <div className="relative z-10 text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-headline font-bold !text-primary-foreground">Our Gallery</h1>
          <p className="mt-2 text-lg md:text-xl !text-primary-foreground/90">A Glimpse into the Wild</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map((image, index) => {
              const isPortrait = image.orientation === 'portrait';
              const width = isPortrait ? 400 : 600;
              const height = isPortrait ? 600 : 400;

              return (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="overflow-hidden rounded-lg cursor-pointer block transform hover:scale-105 transition-transform duration-300">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={width}
                      height={height}
                      className="w-full h-auto object-cover"
                      data-ai-hint={image.query}
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 border-0">
                  <DialogHeader>
                    <DialogTitle className="sr-only">{image.alt}</DialogTitle>
                    <DialogDescription className="sr-only">A larger view of the image: {image.alt}</DialogDescription>
                  </DialogHeader>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain rounded-lg"
                    data-ai-hint={image.query}
                  />
                </DialogContent>
              </Dialog>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
