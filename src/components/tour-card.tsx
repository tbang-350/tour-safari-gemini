import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Tour } from '@/types';
import { Clock, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg group">
      <CardHeader className="p-0 relative">
        <Link href={`/tours/${tour.slug}`}>
            <Image
              src={tour.heroImage}
              alt={tour.name}
              width={400}
              height={250}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              data-ai-hint={tour.destinations[0]}
            />
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-2xl mb-2 leading-tight">
            <Link href={`/tours/${tour.slug}`} className="hover:text-primary transition-colors">{tour.name}</Link>
        </CardTitle>
        <div className="flex items-center gap-4 text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{tour.duration} Days</span>
            </div>
            <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{tour.destinations.join(', ')}</span>
            </div>
        </div>
        <p className="text-muted-foreground line-clamp-3">{tour.description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <div>
            <span className="text-2xl font-bold text-foreground">${tour.price.toLocaleString()}</span>
            <span className="text-sm text-muted-foreground"> / person</span>
        </div>
        <Button asChild>
          <Link href={`/tours/${tour.slug}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
