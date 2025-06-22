import type { Tour } from '@/types';
import { getImageUrl } from './pixabay';

// Raw tour data with image queries instead of URLs
const toursData = [
  {
    id: 1,
    slug: 'serengeti-migration-safari',
    name: 'Serengeti Migration Safari',
    description: "Witness the Great Wildebeest Migration, one of nature's most spectacular events, across the vast plains of the Serengeti.",
    heroImageQuery: 'serengeti migration',
    imageQueries: ['wildebeest river', 'lion serengeti', 'ngorongoro crater'],
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
    heroImageQuery: 'kilimanjaro snow',
    imageQueries: ['kilimanjaro trekking', 'kilimanjaro sunrise', 'africa mountain landscape'],
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
    heroImageQuery: 'zanzibar beach',
    imageQueries: ['zanzibar dhow boat', 'stone town zanzibar', 'snorkeling ocean'],
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
    heroImageQuery: 'tarangire elephants',
    imageQueries: ['lake manyara flamingos', 'leopard tree tanzania', 'zebra serengeti'],
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

async function hydrateTour(tourData: (typeof toursData)[0], imageSize: { heroWidth: number; heroHeight: number; galleryWidth: number; galleryHeight: number }): Promise<Tour> {
  const [heroImage, ...galleryImages] = await Promise.all([
    getImageUrl(tourData.heroImageQuery, imageSize.heroWidth, imageSize.heroHeight),
    ...tourData.imageQueries.map(query => getImageUrl(query, imageSize.galleryWidth, imageSize.galleryHeight))
  ]);
  
  const { heroImageQuery, imageQueries, ...rest } = tourData;

  return {
    ...rest,
    heroImage,
    images: galleryImages,
  };
}


export async function getTourBySlug(slug: string): Promise<Tour | undefined> {
  const tourData = toursData.find(tour => tour.slug === slug);
  if (!tourData) {
    return undefined;
  }
  return hydrateTour(tourData, { heroWidth: 1280, heroHeight: 720, galleryWidth: 400, galleryHeight: 300 });
}

export async function getFeaturedTours(): Promise<Tour[]> {
    const featuredToursData = toursData.filter(tour => tour.featured);
    return Promise.all(
      featuredToursData.map(tourData => 
        hydrateTour(tourData, { heroWidth: 400, heroHeight: 250, galleryWidth: 400, galleryHeight: 300 })
      )
    );
}

export async function getAllTours(): Promise<Tour[]> {
    return Promise.all(
      toursData.map(tourData => 
        hydrateTour(tourData, { heroWidth: 400, heroHeight: 250, galleryWidth: 400, galleryHeight: 300 })
      )
    );
}

// this is a static list for generating static pages
export const tours = toursData;
