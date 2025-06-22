import Image from "next/image";
import type { Metadata } from "next";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore the breathtaking landscapes and majestic wildlife of East Africa through our gallery of photos and videos from our safari tours.",
};

export default function GalleryPage() {
  const images = [
    { src: "https://source.unsplash.com/600x400?lion,resting", alt: "A lion resting on a rock", hint: "lion resting" },
    { src: "https://source.unsplash.com/400x600?giraffe,acacia", alt: "A giraffe eating from a tall acacia tree", hint: "giraffe acacia" },
    { src: "https://source.unsplash.com/600x400?elephants,waterhole", alt: "A herd of elephants by a waterhole", hint: "elephants waterhole" },
    { src: "https://source.unsplash.com/600x400?kilimanjaro,sunrise", alt: "The summit of Mount Kilimanjaro at sunrise", hint: "kilimanjaro sunrise" },
    { src: "https://source.unsplash.com/600x400?wildebeest,migration", alt: "Wildebeest crossing the Mara River", hint: "wildebeest migration" },
    { src: "https://source.unsplash.com/400x600?maasai,warrior", alt: "A Maasai warrior in traditional clothing", hint: "maasai warrior" },
    { src: "https://source.unsplash.com/600x400?serengeti,sunset", alt: "A beautiful sunset over the Serengeti plains", hint: "serengeti sunset" },
    { src: "https://source.unsplash.com/600x400?leopard,tree", alt: "A leopard lounging on a tree branch", hint: "leopard tree" },
    { src: "https://source.unsplash.com/600x400?flamingos,lake", alt: "Flamingos in Lake Manyara", hint: "flamingos lake" },
    { src: "https://source.unsplash.com/400x600?ngorongoro,crater", alt: "A stunning view of the Ngorongoro Crater", hint: "ngorongoro crater" },
    { src: "https://source.unsplash.com/600x400?zanzibar,dhow", alt: "A traditional dhow boat on the coast of Zanzibar", hint: "zanzibar dhow" },
    { src: "https://source.unsplash.com/600x400?cheetahs,savannah", alt: "A family of cheetahs on the savannah", hint: "cheetahs savannah" },
  ];

  return (
    <div>
      <section className="relative h-[40vh] w-full flex items-center justify-center">
        <Image
          src="https://source.unsplash.com/1920x600?savannah,sunset"
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
              const isPortrait = image.src.includes('400x600');
              const largeWidth = isPortrait ? 800 : 1200;
              const largeHeight = isPortrait ? 1200 : 800;
              const largeSrc = image.src.replace(/\d+x\d+/, `${largeWidth}x${largeHeight}`);

              return (
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
                  <DialogHeader>
                    <DialogTitle className="sr-only">{image.alt}</DialogTitle>
                    <DialogDescription className="sr-only">A larger view of the image: {image.alt}</DialogDescription>
                  </DialogHeader>
                  <Image
                    src={largeSrc}
                    alt={image.alt}
                    width={largeWidth}
                    height={largeHeight}
                    className="w-full h-auto object-contain rounded-lg"
                    data-ai-hint={image.hint}
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
