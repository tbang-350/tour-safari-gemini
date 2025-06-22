import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getFeaturedTours } from "@/lib/tours";
import { TourCard } from "@/components/tour-card";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  const featuredTours = getFeaturedTours();

  const testimonials = [
    {
      name: "Alex Johnson",
      avatar: "https://source.unsplash.com/100x100?man,portrait",
      avatarHint: "man portrait",
      text: "The Serengeti migration safari was a dream come true. Our guide, Joseph, was incredibly knowledgeable and made the experience unforgettable. I can't recommend Safari Navigator enough!",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      avatar: "https://source.unsplash.com/100x100?woman,portrait",
      avatarHint: "woman portrait",
      text: "Climbing Kilimanjaro was the hardest and most rewarding thing I've ever done. The support from the Safari Navigator team was phenomenal from start to finish.",
      rating: 5,
    },
    {
      name: "David Smith",
      avatar: "https://source.unsplash.com/100x100?man,portrait,smiling",
      avatarHint: "man portrait smiling",
      text: "A perfect blend of adventure and relaxation. The Ngorongoro Crater was breathtaking, and the Zanzibar beaches were paradise. Flawless organization.",
      rating: 5,
    },
  ];

  const partners = [
    { name: "TripAdvisor", logo: "https://placehold.co/150x50.png", hint: "TripAdvisor logo" },
    { name: "Tanzania Tourist Board", logo: "https://placehold.co/150x50.png", hint: "Tanzania Tourist Board logo" },
    { name: "Serena Hotels", logo: "https://placehold.co/150x50.png", hint: "Serena Hotels logo" },
    { name: "Asilia Africa", logo: "https://placehold.co/150x50.png", hint: "Asilia Africa logo" },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh] w-full">
        <Image
          src="https://source.unsplash.com/1920x1080?safari,sunset"
          alt="Elephants on a safari in Tanzania"
          fill
          className="object-cover brightness-50"
          data-ai-hint="safari sunset"
          priority
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold !text-primary-foreground drop-shadow-lg">
            Your Adventure Awaits
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-2xl !text-primary-foreground/90">
            Discover the untamed beauty of East Africa with our expert-led safaris.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/tours">Explore Our Tours</Link>
          </Button>
        </div>
      </section>

      <section id="welcome" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground">
            Welcome to Safari Navigator
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a premier tour and safari company based in Arusha, Tanzania, dedicated to providing you with an authentic and unforgettable journey through the heart of East Africa. From the vast plains of the Serengeti to the peak of Mount Kilimanjaro, we create bespoke experiences that connect you with nature and culture.
          </p>
        </div>
      </section>

      <section id="featured-tours" className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground">
              Featured Safari Packages
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Handpicked adventures to inspire your next journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="link" className="text-lg text-primary">
              <Link href="/tours">
                View All Tours <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground">
              What Our Adventurers Say
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Stories from those who've journeyed with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border shadow-md transform hover:-translate-y-2 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <div className="flex items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

       <section id="partners" className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-headline font-semibold text-muted-foreground mb-8">
            Our Trusted Partners
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {partners.map((partner, index) => (
              <div key={index} className="opacity-60 hover:opacity-100 transition-opacity">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={150}
                  height={50}
                  className="object-contain"
                  data-ai-hint={partner.hint}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
