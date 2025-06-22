export interface Tour {
  id: number;
  slug: string;
  name: string;
  description: string;
  heroImage: string;
  images: string[];
  price: number;
  duration: number; // in days
  destinations: string[];
  activities: string[];
  itinerary: { day: number; title: string; description: string }[];
  inclusions: string[];
  exclusions: string[];
  featured?: boolean;
}
