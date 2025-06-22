import Image from "next/image";
import { getAllTours } from "@/lib/tours";
import { TourListing } from "@/components/tour-listing";
import { getImageUrl } from "@/lib/pixabay";

export default async function ToursPage() {
  const allTours = await getAllTours();
  const heroImage = await getImageUrl("safari jeep", 1280, 512);


  return (
    <div>
      <section className="relative h-[40vh] w-full flex items-center justify-center">
        <Image
          src={heroImage}
          alt="Safari vehicle on a dusty road"
          fill
          className="object-cover brightness-50"
          data-ai-hint="safari jeep"
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
