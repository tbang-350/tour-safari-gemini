import type { Tour } from '@/types';

export const tours: Tour[] = [
  {
    id: 1,
    slug: 'serengeti-migration-safari',
    name: 'Serengeti Migration Safari',
    description: "Witness the Great Wildebeest Migration, one of nature's most spectacular events, across the vast plains of the Serengeti.",
    heroImage: 'https://images.unsplash.com/photo-1561049282-303bcec3b8a1?q=80&w=800&auto=format&fit=crop',
    images: [
        'https://images.unsplash.com/photo-1527488053901-a6b1898c60f2?q=80&w=400&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1549688403-1a851926639d?q=80&w=400&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1590483803561-83b68078df25?q=80&w=400&auto=format&fit=crop'
    ],
    price: 3500,
    duration: 7,
    destinations: ['Serengeti', 'Ngorongoro Crater'],
    activities: ['Wildlife Safari', 'Cultural Tour'],
    itinerary: [
      { day: 1, title: 'Arrival in Arusha', description: 'Arrive at Kilimanjaro International Airport (JRO), transfer to your lodge in Arusha.' },
      { day: 2, title: 'To Ngorongoro Crater', description: 'Descend into the Ngorongoro Crater for a full day game drive.' },
      { day: 3, title: 'Central Serengeti', description: 'Drive to the central Serengeti, known for its abundant wildlife.' },
      { day: 4, title: 'Following the Migration', description: 'Spend the day tracking the Great Migration herds.' },
      { day: 5, title: 'Northern Serengeti & Mara River', description: 'Explore the northern plains and the famous Mara River, hoping to see a river crossing.'},
      { day: 6, title: 'Final Game Drive', description: 'Enjoy a final morning game drive before flying back to Arusha.'},
      { day: 7, title: 'Departure', description: 'Transfer to JRO for your flight home.'}
    ],
    inclusions: ['All park fees', 'Accommodation', 'Professional guide', '4x4 safari vehicle', 'All meals'],
    exclusions: ['International flights', 'Visa fees', 'Tips', 'Personal items'],
    featured: true,
  },
  {
    id: 2,
    slug: 'kilimanjaro-climb-lemosho',
    name: 'Kilimanjaro Climb - Lemosho Route',
    description: 'Conquer the roof of Africa via the beautiful and scenic Lemosho route, known for its high success rates and stunning vistas.',
    heroImage: 'https://images.unsplash.com/photo-1589983973875-9cb14e74751a?q=80&w=800&auto=format&fit=crop',
    images: [
        'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=400&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1601724041724-4f4a64392a84?q=80&w=400&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?q=80&w=400&auto=format&fit=crop'
    ],
    price: 2800,
    duration: 8,
    destinations: ['Mount Kilimanjaro'],
    activities: ['Mountain Climbing'],
    itinerary: [
        { day: 1, title: 'Lemosho Gate to Mti Mkubwa', description: 'Start the trek through the lush rainforest.'},
        { day: 2, title: 'Shira 1 Camp', description: 'Cross the Shira Plateau with views of Kibo Peak.'},
        { day: 3, title: 'Shira 2 Camp', description: 'Acclimatization day with a walk to Lava Tower.'},
        { day: 4, title: 'Barranco Camp', description: 'Trek up to the iconic Lava Tower and then descend to Barranco Camp.'},
        { day: 5, title: 'Karanga Camp', description: 'Conquer the Barranco Wall and traverse to Karanga Valley.'},
        { day: 6, title: 'Barafu Camp (Base Camp)', description: 'Reach the base camp and prepare for the summit push.'},
        { day: 7, title: 'Summit Day & Mweka Camp', description: 'Midnight start for the summit! Reach Uhuru Peak and descend to Mweka.'},
        { day: 8, title: 'Descend & Depart', description: 'Final descent to Mweka Gate and transfer back to your hotel.'},
    ],
    inclusions: ['All park fees', 'Experienced mountain crew', 'All meals on the mountain', 'Camping equipment'],
    exclusions: ['Trekking gear rental', 'Tips for the crew', 'Personal expenses'],
    featured: true,
  },
  {
    id: 3,
    slug: 'zanzibar-beach-escape',
    name: 'Zanzibar Beach Escape',
    description: 'Relax and unwind on the pristine white-sand beaches of Zanzibar. Explore historic Stone Town and enjoy the turquoise waters.',
    heroImage: 'https://images.unsplash.com/photo-1602164478153-34533924f115?q=80&w=800&auto=format&fit=crop',
    images: [
        'https://images.unsplash.com/photo-1578326236940-94a1d955169a?q=80&w=400&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1595152762214-e53805373a0e?q=80&w=400&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1507690325780-f62f451f28f1?q=80&w=400&auto=format&fit=crop'
    ],
    price: 1200,
    duration: 5,
    destinations: ['Zanzibar'],
    activities: ['Beach Relaxation', 'Cultural Tour', 'Snorkeling'],
    itinerary: [
        { day: 1, title: 'Arrival in Zanzibar', description: 'Arrive at Zanzibar airport and transfer to your beach resort.'},
        { day: 2, title: 'Beach Relaxation', description: 'Enjoy a full day at leisure on the beautiful beaches of Nungwi or Kendwa.'},
        { day: 3, title: 'Stone Town & Spice Farm', description: 'Take a guided tour of historic Stone Town and a fragrant spice farm.'},
        { day: 4, title: 'Blue Lagoon Snorkeling', description: 'Go on a boat trip to the Blue Lagoon for fantastic snorkeling.'},
        { day: 5, 'title': 'Departure', description: 'Enjoy a final morning at the beach before transferring to the airport.'},
    ],
    inclusions: ['Accommodation', 'Airport transfers', 'Guided tours as specified', 'Breakfasts'],
    exclusions: ['Flights to Zanzibar', 'Lunches and dinners', 'Optional activities'],
    featured: true,
  },
   {
    id: 4,
    slug: 'tarangire-manyara-ngorongoro',
    name: 'Tanzania Classic Safari',
    description: "A short but intense safari visiting three of Tanzania's northern circuit gems: Tarangire, Lake Manyara, and the Ngorongoro Crater.",
    heroImage: 'https://images.unsplash.com/photo-1617938356396-bb3991222446?q=80&w=800&auto=format&fit=crop',
    images: [
        'https://images.unsplash.com/photo-1593531142194-e0c1274e1d75?q=80&w=400&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1575496009477-88992314a480?q=80&w=400&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1591242379930-b37d465f0b5d?q=80&w=400&auto=format&fit=crop'
    ],
    price: 1800,
    duration: 4,
    destinations: ['Tarangire', 'Lake Manyara', 'Ngorongoro Crater'],
    activities: ['Wildlife Safari'],
    itinerary: [
        { day: 1, title: 'Tarangire National Park', description: 'Game drive in Tarangire, famous for its large elephant herds and baobab trees.'},
        { day: 2, title: 'Lake Manyara National Park', description: 'Explore Lake Manyara, known for its tree-climbing lions and flamingos.'},
        { day: 3, title: 'Ngorongoro Crater', description: 'Full day game drive in the Ngorongoro Crater, a UNESCO World Heritage Site.'},
        { day: 4, title: 'Return to Arusha', description: 'Morning visit to a Maasai village before driving back to Arusha for your departure.'},
    ],
    inclusions: ['All park fees', 'Accommodation', 'Professional guide', '4x4 safari vehicle', 'All meals'],
    exclusions: ['International flights', 'Visa fees', 'Tips', 'Personal items'],
    featured: false,
  },
];

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find(tour => tour.slug === slug);
}

export function getFeaturedTours(): Tour[] {
    return tours.filter(tour => tour.featured);
}
