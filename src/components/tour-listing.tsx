
"use client";

import { useState, useMemo } from 'react';
import { TourCard } from "@/components/tour-card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from '@/components/ui/label';
import type { Tour } from '@/types';

export function TourListing({ tours }: { tours: Tour[] }) {
  const [destinationFilter, setDestinationFilter] = useState<string>('all');
  const [durationFilter, setDurationFilter] = useState<string>('all');

  const allDestinations = useMemo(() => {
    const destinations = new Set<string>();
    tours.forEach(tour => tour.destinations.forEach(dest => destinations.add(dest)));
    return Array.from(destinations);
  }, [tours]);

  const filteredTours = useMemo(() => {
    let newFilteredTours = tours;

    if (destinationFilter !== 'all') {
      newFilteredTours = newFilteredTours.filter(tour => tour.destinations.includes(destinationFilter));
    }

    if (durationFilter !== 'all') {
        const [min, max] = durationFilter.split('-').map(Number);
        newFilteredTours = newFilteredTours.filter(tour => tour.duration >= min && tour.duration <= (max || Infinity));
    }

    return newFilteredTours;
  }, [tours, destinationFilter, durationFilter]);
  

  return (
    <>
      <div className="bg-secondary/50 p-6 rounded-lg mb-12 flex flex-col sm:flex-row gap-4 items-center">
        <h3 className="font-headline text-lg font-semibold mr-4">Filter Tours:</h3>
        <div className='flex flex-wrap gap-4 items-center'>
          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor="destination-filter">Destination</Label>
            <Select value={destinationFilter} onValueChange={setDestinationFilter}>
              <SelectTrigger id="destination-filter" className="w-[180px]">
                <SelectValue placeholder="All Destinations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Destinations</SelectItem>
                {allDestinations.map(dest => <SelectItem key={dest} value={dest}>{dest}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
            <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor="duration-filter">Duration</Label>
            <Select value={durationFilter} onValueChange={setDurationFilter}>
              <SelectTrigger id="duration-filter" className="w-[180px]">
                <SelectValue placeholder="Any Duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Duration</SelectItem>
                <SelectItem value="1-3">1 - 3 Days</SelectItem>
                <SelectItem value="4-7">4 - 7 Days</SelectItem>
                <SelectItem value="8-100">8+ Days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      {filteredTours.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      ) : (
        <div className='text-center py-16'>
            <h2 className='text-2xl font-headline font-semibold'>No Tours Found</h2>
            <p className='text-muted-foreground mt-2'>Try adjusting your filters to find your perfect adventure.</p>
        </div>
      )}
    </>
  );
}
