import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { WhatsappIcon } from "./icons/whatsapp-icon";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-headline font-semibold text-foreground">Safari Navigator</h3>
            <p className="mt-2 text-muted-foreground">
              Crafting unforgettable safari experiences in the heart of East Africa.
            </p>
          </div>
          <div>
            <h4 className="font-headline font-semibold text-foreground">Quick Links</h4>
            <ul className="mt-2 space-y-1">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/tours" className="text-muted-foreground hover:text-primary">Tours</Link></li>
              <li><Link href="/gallery" className="text-muted-foreground hover:text-primary">Gallery</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold text-foreground">Contact</h4>
            <ul className="mt-2 space-y-1 text-muted-foreground">
              <li>contact@safarinavigator.com</li>
              <li>+255 754 000 000</li>
              <li>Arusha, Tanzania</li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold text-foreground">Follow Us</h4>
            <div className="flex gap-4 mt-2">
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary"><Instagram /></Link>
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
              <Link href="https://wa.me/255754000000" target="_blank" aria-label="WhatsApp" className="text-muted-foreground hover:text-primary"><WhatsappIcon /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Safari Navigator. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
