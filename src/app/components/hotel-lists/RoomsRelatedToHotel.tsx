'use client'
import React, { useEffect, useState } from 'react';
import { Icon } from "@iconify/react";
import Image from 'next/image';
import PropertyCard from '../home/hotel-list/property-card';
import { useHotel } from '@/context-api/CategoryContext';
import { hotelDetails } from '@/utils/constant';

export default function RoomRelatedToHotel({ category, location, hotelName, id }: { category?: string, location?: string, hotelName?: string, id?: string }) {
    const [price, setPrice] = useState(50);
    const [price1, setPrice1] = useState(50);
    const [sortOrder, setSortOrder] = useState("none");
    const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
    const [searchData, setSearchData] = useState<any>([]);
    const { property, updateFilter, filters } = useHotel()!;


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/pagedata')
                if (!res.ok) throw new Error('Failed to fetch')

                const data = await res.json()
                setSearchData(data?.searchOptions || [])
            } catch (error) {
                console.error('Error fetching services:', error)
            }
        }
        fetchData()
    }, [])
    const rooms = hotelDetails[hotelName!]


    console.log("Location, hotelName, id --> ", rooms[0].property)

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(event.target.value));
    };

    const handlePriceChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice1(Number(event.target.value));
    };

    const handleSelectChange = (key: any, value: any) => {
        updateFilter(key, value);
    };

    const toggleOffCanvas = () => {
        setIsOffCanvasOpen(!isOffCanvasOpen);
    };

    const normalize = (str: string) => str.toLowerCase().replace(/s$/, '');

    const filteredProperties = category
        ? property.filter((data: any) =>
            normalize(data.category) === normalize(category)
        )
        : rooms[0].property;

    const sortedProperties = [...(filteredProperties ?? [])].sort((a, b) => {
        const titleA = a.hotel_name?.toLowerCase() || "";
        const titleB = b.hotel_name?.toLowerCase() || "";

        if (sortOrder === "asc") {
            return titleA.localeCompare(titleB);
        } else if (sortOrder === "desc") {
            return titleB.localeCompare(titleA);
        }
        return 0;
    });


    console.log("soerted properties -->", sortedProperties)

    return (
        <>
            <section className='dark:bg-darkmode px-4'>
                <div className='lg:max-w-screen-xl max-w-screen-md mx-auto'>

                    {/* For Mobile view */}
                    <div className='flex lg:hidden justify-between items-center mb-4'>
                        <span className='text-2xl ml-4 '>Advance Filter</span>
                        <button onClick={toggleOffCanvas} className='bg-blue-500 mr-4 text-white py-3 px-6 text-base rounded-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" d="M21.25 12H8.895m-4.361 0H2.75m18.5 6.607h-5.748m-4.361 0H2.75m18.5-13.214h-3.105m-4.361 0H2.75m13.214 2.18a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm-9.25 6.607a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm6.607 6.608a2.18 2.18 0 1 0 0-4.361a2.18 2.18 0 0 0 0 4.36Z" />
                            </svg>
                        </button>
                    </div>
                    {isOffCanvasOpen && (
                        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50" />
                    )}
                    <div onClick={toggleOffCanvas} className={`fixed inset-0 top-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 transition-transform transform ${isOffCanvasOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
                        <div className='absolute top-0 right-0 w-3/4 max-w-xs bg-white dark:bg-semidark shadow-lg h-full'>
                            <div className='py-14 px-8'>
                                <button onClick={toggleOffCanvas} className='absolute top-4 right-4 text-gray dark:text-gray-500'>
                                    ✕
                                </button>
                                <p className='mb-6 text-2xl font-semibold'>Advanced Search</p>
                                <div className='flex flex-col gap-6'>
                                    {/* Map through keywords */}
                                    {searchData?.keywords?.map((option: any, index: any) => (
                                        <div key={`keyword-${index}`} className="relative inline-block">
                                            <input
                                                placeholder={option.placeholder}
                                                type='text'
                                                className='py-3 w-full pl-3 pr-9 border border-border dark:bg-semidark dark:border-dark_border dark:focus:border-primary  !rounded-lg focus-visible:outline-none focus:border-primary'
                                                onChange={(e) => updateFilter('keyword', e.target.value)}
                                            />
                                        </div>
                                    ))}

                                    {/* Render Location dropdown */}
                                    <div className="relative inline-block">
                                        <select
                                            className='custom-select py-3 text-gray dark:text-gray w-full pl-3 pr-9 mr-2 border border-border dark:border-dark_border dark:focus:border-primary dark:bg-semidark  rounded-lg focus:border-primary'
                                            onChange={(e) => updateFilter('location', e.target.value)}
                                        >
                                            {searchData?.locations?.map((option: any, index: any) => (
                                                <option key={`location-${index}`} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Example for range input */}
                                    <div>
                                        <p className='text-gray dark:text-gray font-medium'>
                                            Distance: {price} miles
                                        </p>
                                        <input
                                            type="range"
                                            min="50"
                                            max="750"
                                            step=""
                                            value={price}
                                            onChange={handlePriceChange}
                                            className="w-full h-0.5 bg-lightborder dark:bg-dark_border mt-2 rounded-lg appearance-none cursor-pointer"
                                        />
                                    </div>

                                    {/* Map through selects (regions, statuses, etc.) */}
                                    {Object.entries(searchData).map(([key, options]) => (
                                        key !== 'keywords' && key !== 'locations' && (
                                            <div key={key} className="relative inline-block">
                                                <select
                                                    className='custom-select py-3 text-gray dark:text-gray w-full pl-3 pr-9 mr-2 border border-border dark:border-dark_border dark:focus:border-primary dark:bg-semidark  rounded-lg focus:border-primary'
                                                    onChange={(e) => handleSelectChange(key, e.target.value)}
                                                >
                                                    {(options as { value: string; label: string }[])?.map((option, index) => (
                                                        'value' in option && (
                                                            <option key={`${key}-${index}`} value={option.value}>
                                                                {option.label}
                                                            </option>
                                                        )
                                                    ))}

                                                </select>
                                            </div>
                                        )
                                    ))}

                                    {/* Example for another range input */}
                                    <div>
                                        <p className='text-gray dark:text-gray'>
                                            From ${price1} to $8000
                                        </p>
                                        <input
                                            type="range"
                                            min="50"
                                            max="8000"
                                            step=""
                                            value={price1}
                                            onChange={handlePriceChange1}
                                            className="w-full h-0.5 bg-lightborder dark:bg-dark_border mt-2 rounded-lg appearance-none cursor-pointer"
                                        />
                                    </div>

                                    {/* Example button */}
                                    <div>
                                        <button className='bg-blue-500 text-white w-full py-3 px-6 text-base rounded-lg'>
                                            Find Property
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* For Large screen */}
                    <div className='lg:grid lg:grid-cols-12 gap-4'>
                        <div className='hidden lg:block lg:col-span-4'>
                            <div className='py-14 px-8 bg-white dark:bg-semidark shadow-property rounded-lg'>
                                <p className='mb-6 text-2xl font-semibold'>Advanced Search</p>
                                <div className='flex flex-col gap-6'>
                                    {/* Map through keywords */}
                                    {searchData?.keywords?.map((option: any, index: any) => (
                                        <div key={`keyword-${index}`} className="relative inline-block">
                                            <input
                                                placeholder={option.placeholder}
                                                type='text'
                                                className='py-3 w-full pl-3 pr-9 border border-border dark:bg-semidark dark:border-dark_border dark:focus:border-primary  !rounded-lg focus-visible:outline-none focus:border-primary'
                                                onChange={(e) => updateFilter('keyword', e.target.value)}
                                            />
                                        </div>
                                    ))}

                                    {/* Render Location dropdown */}
                                    <div className="relative inline-block">
                                        <select
                                            value={filters.city}
                                            className='custom-select py-3 text-gray dark:text-gray w-full pl-3 pr-9 mr-2 border border-border dark:border-dark_border dark:focus:border-primary dark:bg-semidark  rounded-lg focus:border-primary'
                                            onChange={(e) => updateFilter('location', e.target.value)}
                                        >
                                            {searchData?.locations?.map((option: any, index: any) => (
                                                <option key={`location-${index}`} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Map through selects (regions, statuses, etc.) */}
                                    {Object.entries(searchData).map(([key, options]) => (
                                        key !== 'keywords' && key !== 'locations' && (
                                            <div key={key} className="relative inline-block">
                                                <select
                                                    value={filters[key as keyof typeof filters] || ''}
                                                    className='custom-select py-3 text-gray dark:text-gray w-full pl-3 pr-9 mr-2 border border-border dark:border-dark_border dark:focus:border-primary dark:bg-semidark  rounded-lg focus:border-primary'
                                                    onChange={(e) => handleSelectChange(key, e.target.value)}
                                                >
                                                    {(options as { value: string; label: string }[])?.map((option, index) => (
                                                        <option key={`${key}-${index}`} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        )
                                    ))}

                                    {/* Example button */}
                                    <div>
                                        <button className='bg-primary hover:bg-blue-700 text-white w-full py-3 px-6 text-base rounded-lg'>
                                            Find Property
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-8'>
                            <div className="flex lg:flex-nowrap flex-wrap lg:gap-0 gap-6 w-full justify-between items-center pb-8">
                                <div className="flex w-full justify-between px-4 flex-1">
                                    <h5 className='text-xl '>{rooms[0].property?.length} Rooms Found</h5>
                                    <p className='flex text-gray dark:text-gray gap-2 items-center'>
                                        Sort by
                                        <span>
                                            <Icon
                                                icon="fa6-solid:arrow-trend-up"
                                                width="20"
                                                height="20"
                                                className=""
                                            />
                                        </span>
                                    </p>
                                </div>

                                <div className="flex-1 flex gap-3 px-4">
                                    <select
                                        name="short"
                                        className="custom-select border border-border dark:border-dark_border dark:bg-darkmode cursor-pointer text-midnight_text focus:border-primary rounded-lg p-3 pr-9"
                                        value={sortOrder}
                                        onChange={(e) => setSortOrder(e.target.value)}
                                    >
                                        <option value="none">Sort by Rooms Type</option>
                                        {/* <option value="asc">Title (A-Z)</option>
                                        <option value="desc">Title (Z-A)</option> */}

                                        {
                                            rooms?.[0]?.property?.map((rm, index) => (
                                                <option key={index} value="asc">{rm.room_type}</option>
                                            ))
                                        }
                                    </select>                                    
                                </div>
                            </div>
                            {filteredProperties!.length > 0 ?
                                <div className={` grid sm:grid-cols-2 gap-6 px-4`}>
                                    {(sortOrder ? sortedProperties : property).map((data: any, index: any) => (
                                        <PropertyCard key={index} property={data} />
                                    ))}
                                </div>
                                :
                                <div className='flex flex-col gap-5 items-center justify-center pt-20'>
                                    <Image src={"/images/not-found/no-results.png"} alt='no-result' width={100} height={100} />
                                    <p className='text-gray'>No result found</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}