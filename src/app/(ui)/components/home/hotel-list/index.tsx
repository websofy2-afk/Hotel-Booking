"use client";
import { ThreeCircles } from 'react-loader-spinner';
import PropertyCard from './property-card';
import { useHotel } from '@/context-api/CategoryContext';

export const LocationListing = ({ locationPage }: { locationPage?: boolean }) => {
  const { hotelLocation } = useHotel();
  const filterLocation = locationPage ? hotelLocation : hotelLocation.slice(0, 3);

  return (
    <section className={`flex justify-center items-center ${locationPage ? "py-16" : ""}`}>
      <div className="lg:max-w-screen-xl md:max-w-screen-md mx-auto px-4 container">
        <h2 className="mb-12 text-midnight_text text-center uppercase" data-aos="fade-up">
          Discover Your{" "}
          <span className='text-skyBlue'>Perfect Stay</span>
        </h2>
        {
          filterLocation?.length === 0 ? <div className="flex justify-center items-center h-72">
            <ThreeCircles
              visible={true}
              height="100"
              width="100"
              color="#35B4F6"
              ariaLabel="three-circles-loading"
            />
          </div>
            :
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filterLocation?.map((loc, index) => (
                <div key={loc._id} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                  <PropertyCard location={loc} />
                </div>
              ))}
          </div>
        }
      </div>
    </section>
  );
};


