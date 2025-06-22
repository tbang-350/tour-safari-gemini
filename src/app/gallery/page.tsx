import Image from "next/image";
import type { Metadata } from "next";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore the breathtaking landscapes and majestic wildlife of East Africa through our gallery of photos and videos from our safari tours.",
};

export default function GalleryPage() {
    const images = [
      { src: "https://images.unsplash.com/photo-1614027164847-1b28acc15a11?q=80&w=600&h=400&auto=format&fit=crop", alt: "A lion resting on a rock", hint: "lion resting", orientation: "landscape" },
      { src: "https://images.unsplash.com/photo-1555539368-83e2b1464654?q=80&w=400&h=600&auto=format&fit=crop", alt: "A giraffe eating from a tall acacia tree", hint: "giraffe acacia", orientation: "portrait" },
      { src: "https://images.unsplash.com/photo-1593976829468-d0658a4d4a8e?q=80&w=600&h=400&auto=format&fit=crop", alt: "A herd of elephants by a waterhole", hint: "elephants waterhole", orientation: "landscape" },
      { src: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?q=80&w=600&h=400&auto=format&fit=crop", alt: "The summit of Mount Kilimanjaro at sunrise", hint: "kilimanjaro sunrise", orientation: "landscape" },
      { src: "https://images.unsplash.com/photo-1621535263935-5b432a513d29?q=80&w=600&h=400&auto=format&fit=crop", alt: "Wildebeest crossing the Mara River", hint: "wildebeest migration", orientation: "landscape" },
      { src: "https://images.unsplash.com/photo-1529128653609-b5f79a6133a8?q=80&w=400&h=600&auto=format&fit=crop", alt: "A Maasai warrior in traditional clothing", hint: "maasai warrior", orientation: "portrait" },
      { src: "https://images.unsplash.com/photo-1547471080-7cc2d5d88e93?q=80&w=600&h=400&auto=format&fit=crop", alt: "A beautiful sunset over the Serengeti plains", hint: "serengeti sunset", orientation: "landscape" },
      { src: "https://images.unsplash.com/photo-1577558486339-38295627f1b3?q=80&w=600&h=400&auto=format&fit=crop", alt: "A leopard lounging on a tree branch", hint: "leopard tree", orientation: "landscape" },
      { src: "https://images.unsplash.com/photo-1574895624779-79a786a347b0?q=80&w=600&h=400&auto=format&fit=crop", alt: "Flamingos in Lake Manyara", hint: "flamingos lake", orientation: "landscape" },
      { src: "https://images.unsplash.com/photo-1591242379930-b37d465f0b5d?q=80&w=400&h=600&auto=format&fit=crop", alt: "A stunning view of the Ngorongoro Crater", hint: "ngorongoro crater", orientation: "portrait" },
      { src: "https://images.unsplash.com/photo-1619810340209-dec70155a62e?q=80&w=600&h=400&auto=format&fit=crop", alt: "A traditional dhow boat on the coast of Zanzibar", hint: "zanzibar dhow", orientation: "landscape" },
      { src: "https://images.unsplash.com/photo-1601735183499-1a13a8335359?q=80&w=600&h=400&auto=format&fit=crop", alt: "A family of cheetahs on the savannah", hint: "cheetahs savannah", orientation: "landscape" },
    ];

  return (
    <div>
      <section className="relative h-[40vh] w-full flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=1920&auto=format&fit=crop"
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
              const largeWidth = isPortrait ? 800 : 1200;
              const largeHeight = isPortrait ? 1200 : 800;
              const largeSrc = image.src.replace(/w=\d+/, `w=${largeWidth}`).replace(/h=\d+/, `h=${largeHeight}`);

              return (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="overflow-hidden rounded-lg cursor-pointer block transform hover:scale-105 transition-transform duration-300">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={isPortrait ? 400 : 600}
                      height={isPortrait ? 600 : 400}
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
