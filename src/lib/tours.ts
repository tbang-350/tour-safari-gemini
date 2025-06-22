import type { Tour } from '@/types';

export const tours: Tour[] = [
  {
    id: 1,
    slug: 'serengeti-migration-safari',
    name: 'Serengeti Migration Safari',
    description: "Witness the Great Wildebeest Migration, one of nature's most spectacular events, across the vast plains of the Serengeti.",
    heroImage: 'https://cdn.pixabay.com/photo/2014/09/27/00/23/wildebeest-462833_1280.jpg',
    images: [
        'https://cdn.pixabay.com/photo/2017/08/01/10/05/buffalo-2564848_1280.jpg', 
        'https://cdn.pixabay.com/photo/2016/01/02/01/29/lion-1117144_1280.jpg', 
        'https://cdn.pixabay.com/photo/2018/06/03/14/21/ngorongoro-crater-3450917_1280.jpg'
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
    heroImage: 'https://cdn.pixabay.com/photo/2018/11/13/21/44/kilimanjaro-3814324_1280.jpg',
    images: [
        'https://cdn.pixabay.com/photo/2017/01/21/20/49/hiker-1998341_1280.jpg', 
        'https://cdn.pixabay.com/photo/2012/12/28/10/22/kilimanjaro-72793_1280.jpg', 
        'https://cdn.pixabay.com/photo/2016/09/19/23/07/kilimanjaro-1681286_1280.jpg'
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
    heroImage: 'https://cdn.pixabay.com/photo/2016/10/21/20/55/zanzibar-1759235_1280.jpg',
    images: [
        'https://cdn.pixabay.com/photo/2017/01/05/11/47/zanzibar-1955217_1280.jpg', 
        'https://cdn.pixabay.com/photo/2021/04/22/09/24/zanzibar-6198939_1280.jpg', 
        'https://cdn.pixabay.com/photo/2020/06/17/09/25/turtle-5308693_1280.jpg'
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
    heroImage: 'https://cdn.pixabay.com/photo/2022/04/10/12/28/tarangire-7123328_1280.jpg',
    images: [
        'https://cdn.pixabay.com/photo/2018/05/29/22/23/africa-3440121_1280.jpg', 
        'https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg', 
        'https://cdn.pixabay.com/photo/2021/11/11/17/11/zebra-6787163_1280.jpg'
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
