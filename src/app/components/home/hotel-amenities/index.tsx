'use client';
import { amenities } from '@/utils/amenities';
import Link from 'next/link';

export default function HoteoAmenities() {
    return (
        <section>
            <div className="container lg:max-w-screen-xl md:max-w-screen-md mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-midnight_text" data-aos="fade-left">Hotel Highlights & Amenities
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-4 gap-8">
                    {amenities.map((item, index) => (
                        <div key={index} className="image-item block" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                            <Link 
                            // href={`/properties/properties-list`}
                            href="#"
                             className='group'>
                                <div className='p-4 flex items-center justify-center border-2 rounded-lg border-border mb-6 group-hover:-translate-y-1 text-skyBlue group-hover:duration-500'>
                                    {item.icon}
                                </div>
                                <p className="text-center text-[22px] leading-[1.2] font-semibold mt-2 text-midnight_text text-opacity-80 group-hover:text-opacity-100 mb-1 capitalize">{item.title}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}