import Image from "next/image";
import type { Metadata } from "next";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore the breathtaking landscapes and majestic wildlife of East Africa through our gallery of photos and videos from our safari tours.",
};

export default function GalleryPage() {
  const images = [
    { src: "https://placehold.co/600x400.png", alt: "A lion resting on a rock", hint: "lion resting" },
    { src: "https://placehold.co/400x600.png", alt: "A giraffe eating from a tall acacia tree", hint: "giraffe acacia" },
    { src: "https://placehold.co/600x400.png", alt: "A herd of elephants by a waterhole", hint: "elephants waterhole" },
    { src: "https://placehold.co/600x400.png", alt: "The summit of Mount Kilimanjaro at sunrise", hint: "kilimanjaro sunrise" },
    { src: "https://placehold.co/600x400.png", alt: "Wildebeest crossing the Mara River", hint: "wildebeest migration" },
    { src: "https://placehold.co/400x600.png", alt: "A Maasai warrior in traditional clothing", hint: "maasai warrior" },
    { src: "https://placehold.co/600x400.png", alt: "A beautiful sunset over the Serengeti plains", hint: "serengeti sunset" },
    { src: "https://placehold.co/600x400.png", alt: "A leopard lounging on a tree branch", hint: "leopard tree" },
    { src: "https://placehold.co/600x400.png", alt: "Flamingos in Lake Manyara", hint: "flamingos lake" },
    { src: "https://placehold.co/400x600.png", alt: "A stunning view of the Ngorongoro Crater", hint: "ngorongoro crater" },
    { src: "https://placehold.co/600x400.png", alt: "A traditional dhow boat on the coast of Zanzibar", hint: "zanzibar dhow" },
    { src: "https://placehold.co/600x400.png", alt: "A family of cheetahs on the savannah", hint: "cheetahs savannah" },
  ];

  return (
    <div>
      <section className="relative h-[40vh] w-full flex items-center justify-center">
        <Image
          src="https://placehold.co/1920x600.png"
          alt="A colorful sunset over the savannah"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
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
            {images.map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="overflow-hidden rounded-lg cursor-pointer block transform hover:scale-105 transition-transform duration-300">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                      data-ai-hint={image.hint}
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 border-0">
                  <Image
                    src={image.src.replace(/(\d+x\d+)/, '1200x800')/*.replace('&', '&amp;')*/ /*Removed this line, as it doesn't seem necessary anymore*/ }
                    alt={image.alt}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain rounded-lg"
                    data-ai-hint={image.hint}
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
