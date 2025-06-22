import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { getImageUrl } from "@/lib/pixabay";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Safari Navigator to plan your dream safari. Contact us via our inquiry form, email, phone, or WhatsApp.",
};

export default async function ContactPage() {
    const [heroImage, mapImage] = await Promise.all([
        getImageUrl("path forest", 1280, 512),
        getImageUrl("arusha map", 600, 400),
    ]);
  return (
    <div>
      <section className="relative h-[40vh] w-full flex items-center justify-center">
        <Image
          src={heroImage}
          alt="A path leading into the forest"
          fill
          className="object-cover brightness-50"
          data-ai-hint="path forest"
        />
        <div className="relative z-10 text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-headline font-bold !text-primary-foreground">Contact Us</h1>
          <p className="mt-2 text-lg md:text-xl !text-primary-foreground/90">We're here to help you plan your perfect adventure.</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-headline font-semibold text-foreground mb-4">Send us an Inquiry</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="you@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Inquiry about Serengeti Safari" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your dream safari..." rows={6} />
                </div>
                <Button type="submit" size="lg" className="w-full">Send Message</Button>
              </form>
            </div>

            <div className="space-y-8">
               <h2 className="text-3xl font-headline font-semibold text-foreground mb-4">Contact Information</h2>
               <div className="space-y-4 text-lg">
                <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-primary"/>
                    <a href="mailto:contact@safarinavigator.com" className="text-muted-foreground hover:text-primary">contact@safarinavigator.com</a>
                </div>
                <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-primary"/>
                    <a href="tel:+255754000000" className="text-muted-foreground hover:text-primary">+255 754 000 000</a>
                </div>
                <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1"/>
                    <p className="text-muted-foreground">
                        Sokoine Road<br/>
                        Arusha, Tanzania
                    </p>
                </div>
               </div>
               
                <div className="space-y-4">
                    <h3 className="text-xl font-headline font-semibold text-foreground">Connect on WhatsApp</h3>
                    <Button asChild className="bg-green-500 hover:bg-green-600 text-white">
                        <Link href="https://wa.me/255754000000" target="_blank" rel="noopener noreferrer">
                            <WhatsappIcon className="w-5 h-5 mr-2" /> Chat with us
                        </Link>
                    </Button>
                </div>

               <div className="space-y-4">
                <h3 className="text-xl font-headline font-semibold text-foreground">Follow Us</h3>
                <div className="flex gap-4">
                  <Link href="#" aria-label="Facebook"><Facebook className="w-8 h-8 text-muted-foreground hover:text-primary"/></Link>
                  <Link href="#" aria-label="Instagram"><Instagram className="w-8 h-8 text-muted-foreground hover:text-primary"/></Link>
                  <Link href="#" aria-label="Twitter"><Twitter className="w-8 h-8 text-muted-foreground hover:text-primary"/></Link>
                </div>
               </div>

               <div className="mt-8">
                <Image src={mapImage} width={600} height={400} alt="Map showing office location in Arusha" className="rounded-lg shadow-lg" data-ai-hint="arusha map" />
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
