import { getTourBySlug, tours } from "@/lib/tours";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, MapPin, Mountain, Waves, X } from "lucide-react";
import type { Metadata } from "next";
import { InquiryModal } from "@/components/inquiry-modal";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tour = getTourBySlug(params.slug);
  if (!tour) {
    return {
      title: "Tour Not Found"
    }
  }
  return {
    title: tour.name,
    description: `Details for the ${tour.duration}-day ${tour.name}. ${tour.description}`,
  };
}

export async function generateStaticParams() {
    return tours.map((tour) => ({
      slug: tour.slug,
    }));
}


export default function TourDetailPage({ params }: Props) {
  const tour = getTourBySlug(params.slug);

  if (!tour) {
    notFound();
  }
  
  const getIcon = (activity: string) => {
    switch(activity.toLowerCase()) {
        case 'wildlife safari': return <Mountain className="w-4 h-4 mr-2"/>;
        case 'mountain climbing': return <Mountain className="w-4 h-4 mr-2"/>;
        case 'beach relaxation': return <Waves className="w-4 h-4 mr-2"/>;
        default: return <Mountain className="w-4 h-4 mr-2"/>;
    }
  }

  return (
    <div>
      <section className="relative h-[50vh] w-full">
        <Image
          src={tour.heroImage}
          alt={tour.name}
          layout="fill"
          objectFit="cover"
          className="brightness-60"
          data-ai-hint={tour.destinations[0]}
        />
        <div className="relative z-10 flex flex-col items-start justify-end h-full text-white p-8 md:p-16">
          <h1 className="text-4xl md:text-6xl font-headline font-bold !text-primary-foreground drop-shadow-lg max-w-4xl">
            {tour.name}
          </h1>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2 text-lg !text-primary-foreground/90">
              <Clock className="w-5 h-5" /> {tour.duration} Days
            </div>
            <div className="flex items-center gap-2 text-lg !text-primary-foreground/90">
                <MapPin className="w-5 h-5" /> {tour.destinations.join(', ')}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
                <div className="prose lg:prose-lg max-w-none">
                    <p className="lead text-xl text-muted-foreground">{tour.description}</p>
                </div>
                
                <div className="my-8">
                    <h2 className="text-3xl font-headline font-semibold text-foreground mb-4">Activities</h2>
                    <div className="flex flex-wrap gap-2">
                        {tour.activities.map(activity => (
                             <Badge key={activity} variant="secondary" className="text-base py-1 px-3 bg-accent/20 text-accent-foreground border-accent">
                                {getIcon(activity)}
                                {activity}
                            </Badge>
                        ))}
                    </div>
                </div>

                <div className="my-12">
                  <h2 className="text-3xl font-headline font-semibold text-foreground mb-6">Daily Itinerary</h2>
                  <div className="flex flex-col">
                    {tour.itinerary.map((day, index) => (
                      <div key={day.day} className="flex">
                        <div className="flex flex-col items-center mr-6">
                          <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold font-headline z-10 flex-shrink-0">
                            {day.day}
                          </div>
                          {index < tour.itinerary.length - 1 && (
                            <div className="w-0.5 h-full bg-primary/20"></div>
                          )}
                        </div>
                        <div className={index < tour.itinerary.length - 1 ? 'pb-8' : ''}>
                          <h3 className="text-2xl font-headline text-foreground pt-1">{day.title}</h3>
                          <p className="mt-2 text-muted-foreground">{day.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="my-12">
                     <h2 className="text-3xl font-headline font-semibold text-foreground mb-4">Photo Gallery</h2>
                     <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {tour.images.map((img, index) => (
                            <div key={index} className="overflow-hidden rounded-lg">
                                <Image src={img} alt={`${tour.name} gallery image ${index+1}`} width={400} height={300} className="object-cover w-full h-full aspect-video transform hover:scale-110 transition-transform duration-300"/>
                            </div>
                        ))}
                     </div>
                </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
                <div className="sticky top-24 bg-secondary/50 p-6 rounded-lg shadow-lg">
                    <p className="text-2xl font-bold text-foreground">From ${tour.price.toLocaleString()}</p>
                    <p className="text-muted-foreground">per person</p>
                    
                    <InquiryModal tourName={tour.name} />
                    
                    <div className="mt-8">
                        <h3 className="text-xl font-headline font-semibold text-foreground mb-4">What's Included</h3>
                        <ul className="space-y-2">
                            {tour.inclusions.map(item => (
                                <li key={item} className="flex items-start">
                                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0"/>
                                    <span className="text-muted-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                     <div className="mt-8">
                        <h3 className="text-xl font-headline font-semibold text-foreground mb-4">What's Excluded</h3>
                        <ul className="space-y-2">
                            {tour.exclusions.map(item => (
                                <li key={item} className="flex items-start">
                                    <X className="w-5 h-5 text-red-500 mr-2 mt-0.5 shrink-0"/>
                                    <span className="text-muted-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </aside>
        </div>
      </div>
    </div>
  );
}
