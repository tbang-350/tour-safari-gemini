import Image from "next/image";
import type { Metadata } from "next";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore the breathtaking landscapes and majestic wildlife of East Africa through our gallery of photos and videos from our safari tours.",
};

export default function GalleryPage() {
    const images = [
      { src: "https://cdn.pixabay.com/photo/2018/05/11/15/28/lion-3390315_1280.jpg", alt: "A lion resting on a rock", hint: "lion resting", orientation: "landscape" },
      { src: "https://cdn.pixabay.com/photo/2015/10/06/22/09/giraffe-974513_1280.jpg", alt: "A giraffe eating from a tall acacia tree", hint: "giraffe acacia", orientation: "portrait" },
      { src: "https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg", alt: "A herd of elephants by a waterhole", hint: "elephants waterhole", orientation: "landscape" },
      { src: "https://cdn.pixabay.com/photo/2016/09/01/18/59/kilimanjaro-1636829_1280.jpg", alt: "The summit of Mount Kilimanjaro at sunrise", hint: "kilimanjaro sunrise", orientation: "landscape" },
      { src: "https://cdn.pixabay.com/photo/2019/10/29/18/51/wildebeest-4588267_1280.jpg", alt: "Wildebeest crossing the Mara River", hint: "wildebeest migration", orientation: "landscape" },
      { src: "https://cdn.pixabay.com/photo/2015/04/14/11/38/maasai-722129_1280.jpg", alt: "A Maasai warrior in traditional clothing", hint: "maasai warrior", orientation: "portrait" },
      { src: "https://cdn.pixabay.com/photo/2017/10/22/10/16/serengeti-2877477_1280.jpg", alt: "A beautiful sunset over the Serengeti plains", hint: "serengeti sunset", orientation: "landscape" },
      { src: "https://cdn.pixabay.com/photo/2013/04/06/11/33/leopard-101116_1280.jpg", alt: "A leopard lounging on a tree branch", hint: "leopard tree", orientation: "landscape" },
      { src: "https://cdn.pixabay.com/photo/2017/02/18/13/55/flamingos-2077378_1280.jpg", alt: "Flamingos in Lake Manyara", hint: "flamingos lake", orientation: "landscape" },
      { src: "https://cdn.pixabay.com/photo/2019/11/02/05/52/ngorongoro-4595228_1280.jpg", alt: "A stunning view of the Ngorongoro Crater", hint: "ngorongoro crater", orientation: "portrait" },
      { src: "https://cdn.pixabay.com/photo/2013/03/02/02/41/zanzibar-88989_1280.jpg", alt: "A traditional dhow boat on the coast of Zanzibar", hint: "zanzibar dhow", orientation: "landscape" },
      { src: "https://cdn.pixabay.com/photo/2019/09/04/08/24/cheetah-4450418_1280.jpg", alt: "A family of cheetahs on the savannah", hint: "cheetahs savannah", orientation: "landscape" },
    ];

  return (
    <div>
      <section className="relative h-[40vh] w-full flex items-center justify-center">
        <Image
          src="https://cdn.pixabay.com/photo/2017/10/22/10/16/serengeti-2877477_1280.jpg"
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
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={800}
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
