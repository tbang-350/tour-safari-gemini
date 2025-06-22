import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import type { Metadata } from "next";
import { CheckCircle, Eye, Shield, Sprout } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Safari Navigator's mission, our expert team, and why we are the best choice for your East African adventure.",
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Josephat 'Joseph' Mmbando",
      role: "Lead Guide & Founder",
      bio: "With over 15 years of experience in the Tanzanian bush, Joseph's passion for wildlife is contagious. He founded Safari Navigator to share the magic of his homeland with the world.",
      avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=200&h=200&auto=format&fit=crop",
      hint: "guide portrait"
    },
    {
      name: "Fatima Al-Jabir",
      role: "Kilimanjaro Specialist",
      bio: "Fatima has summited Kilimanjaro over 50 times. Her expertise in high-altitude trekking and relentless optimism ensures every climber is safe and motivated.",
      avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200&h=200&auto=format&fit=crop",
      hint: "female guide portrait"
    },
    {
      name: "David Chen",
      role: "Cultural Tour Coordinator",
      bio: "David bridges cultures, creating authentic interactions with local communities like the Maasai and Hadzabe. His tours offer a deeper understanding of Tanzanian life.",
      avatar: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=200&h=200&auto=format&fit=crop",
      hint: "guide smiling"
    },
  ];

  const whyChooseUs = [
    {
      icon: <Eye className="w-8 h-8 text-primary" />,
      title: "Local Expertise",
      description: "Our guides are born and raised in Tanzania, offering unparalleled knowledge of the parks, wildlife, and local cultures.",
    },
    {
      icon: <Sprout className="w-8 h-8 text-primary" />,
      title: "Sustainable Tourism",
      description: "We are committed to preserving the beauty of East Africa through responsible travel practices that support conservation and local communities.",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Safety First",
      description: "Your safety is our top priority. We use well-maintained vehicles and our guides are trained in first aid and emergency situations.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Customized Itineraries",
      description: "We don't do one-size-fits-all. Every trip is tailored to your interests, budget, and travel style for a truly personal adventure.",
    },
  ];

  return (
    <div className="bg-background">
      <section className="relative h-[40vh] w-full flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1517088455886-c33a9b2c5893?q=80&w=1920&auto=format&fit=crop"
          alt="Acacia tree at sunset"
          fill
          className="object-cover brightness-50"
          data-ai-hint="acacia tree sunset"
        />
        <div className="relative z-10 text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-headline font-bold !text-primary-foreground">About Safari Navigator</h1>
          <p className="mt-2 text-lg md:text-xl !text-primary-foreground/90">Your Gateway to Authentic Africa</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose lg:prose-lg max-w-none text-muted-foreground">
              <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground">Our Story & Mission</h2>
              <p>
                Founded from a deep love for Tanzania's natural wonders, Safari Navigator was born out of a desire to create more than just tours; we wanted to craft life-changing experiences. We saw an opportunity to offer travelers a more intimate, authentic, and responsible way to explore East Africa.
              </p>
              <p>
                Our mission is simple: to share the breathtaking beauty and rich cultural heritage of our home while actively contributing to its preservation. We believe that tourism, when done right, can be a powerful force for good—empowering local communities, funding conservation efforts, and fostering a global appreciation for our planet's wild places.
              </p>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1525037471780-705806f79093?q=80&w=600&auto=format&fit=crop"
                alt="Safari vehicle with a view of Mount Kilimanjaro"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="safari vehicle kilimanjaro"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground">Why Choose Us?</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
              We go the extra mile to ensure your safari is exceptional in every way.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-headline font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground">Meet the Team</h2>
            <p className="mt-2 text-lg text-muted-foreground">The heart and soul of your adventure.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center border-border shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <CardContent className="p-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary">
                    <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.hint} />
                    <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-headline font-semibold text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="mt-2 text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
