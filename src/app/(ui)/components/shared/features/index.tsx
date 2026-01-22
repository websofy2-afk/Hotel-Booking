"use client";
import { reasons } from '@/utils/whyChooseUs';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Features() {
    const [propertiesData, setPropertiesData] = useState<any[]>([]);
    const [pageData, setPageData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [resProperties, resPage] = await Promise.all([
                    fetch('/api/propertydata'),
                    fetch('/api/pagedata'),
                ]);

                if (!resProperties.ok || !resPage.ok) {
                    throw new Error('Failed to fetch one or more APIs');
                }

                const properties = await resProperties.json();
                const page = await resPage.json();

                setPropertiesData(properties || []);
                setPageData(page.features || {});
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const value = propertiesData.filter((item) => {
        return !item.check;
    });

    return (
        <section className='bg-light'>
            <div className="container px-4 lg:max-w-screen-xl md:max-w-screen-md mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex lg:flex-row flex-col lg:gap-0 gap-8 justify-between">
                    <div className='mb-8 md:mb-0 flex-1'>
                        <div className='relative' data-aos="fade-right">
                             <div className="absolute inset-0 bg-black/40"></div>
                            <Image
                                src="/images/whychooseus/hotel-featured.avif"
                                alt='property'
                                width={640}
                                height={615}
                                style={{ width: "100%", height: "auto" }}
                            />
                        </div>
                    </div>

                    <div className='flex-1 w-[55em]'>
                        <div className="lg:pl-16 flex flex-col justify-center h-full w-[45em]">
                            <h2 className='mb-8 text-4xl text-midnight_text' data-aos="fade-left">Why People{" "}
                                <span className='text-skyBlue'>Choose Our Hotel</span> 
                                </h2>
                            {reasons?.map((feature, index) => (
                                <div key={index} className='flex mb-6 items-center gap-8' data-aos="fade-left" data-aos-delay="100">
                                    <div className="bg-primary/20 text-skyBlue p-4 rounded-full flex justify-center items-start">
                                        {feature.icon}
                                    </div>
                                    <div className='flex-col'>
                                        <p className='text-2xl mb-2'>{feature.title}</p>
                                        <p className='text-midnight_text text-opacity-80 text-lg'>{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
