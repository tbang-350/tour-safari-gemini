import Image from "next/image";
import { getAllTours } from "@/lib/tours";
import { TourListing } from "@/components/tour-listing";

export default async function ToursPage() {
  const allTours = await getAllTours();
  const heroImage = await (await fetch('https://pixabay.com/api/?key=13290727-40073939eb5d4175a5e52b74e&q=safari+vehicle+dusty&image_type=photo&per_page=3')).json().then(d => d.hits[0].largeImageURL);


  return (
    <div>
      <section className="relative h-[40vh] w-full flex items-center justify-center">
        <Image
          src={heroImage}
          alt="Safari vehicle on a dusty road"
          fill
          className="object-cover brightness-50"
          data-ai-hint="safari vehicle dusty"
        />
        <div className="relative z-10 text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-headline font-bold !text-primary-foreground">Tours & Packages</h1>
          <p className="mt-2 text-lg md:text-xl !text-primary-foreground/90">Find Your Perfect African Adventure</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <TourListing tours={allTours} />
        </div>
      </section>
    </div>
  );
}
