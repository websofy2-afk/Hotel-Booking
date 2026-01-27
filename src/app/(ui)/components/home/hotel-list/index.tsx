"use client";
import { useEffect, useState } from 'react';
import PropertyCard from './property-card';
import { locationData, roomData } from '@/utils/roomData';
import { useHotel } from '@/context-api/CategoryContext';

const LocationListing = () => {
  const [properties, setProperties] = useState<any[]>([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/propertydata')
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        setProperties(data || [])
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  const { property } = useHotel()!;

  return (
    <section className="flex justify-center items-center">
      <div className="lg:max-w-screen-xl md:max-w-screen-md mx-auto px-4 container">
        <h2 className="mb-12 text-midnight_text text-center uppercase" data-aos="fade-up">
          Discover Your{" "}
          <span className='text-skyBlue'>Perfect Stay</span>
          </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {locationData?.map((loc, index) => (
            <div key={loc.id} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
              <PropertyCard location={loc}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationListing;


