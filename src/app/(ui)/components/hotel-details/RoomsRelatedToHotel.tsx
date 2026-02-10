'use client'
import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { hotelDetails } from '@/utils/constant';
import HotelGallery from './HotelGallery';
import HotelInfo from './HotelInfo';
import { FaStar } from 'react-icons/fa';
import { LuDot } from 'react-icons/lu';
import { FaHotel } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { BiCurrentLocation } from 'react-icons/bi';
import RoomCard, { RoomCardNav } from './RoomCard';
import Pagination from '../shared/pagination';
import Amenities from './Amenities';
import AboutHotel from './AboutHotel';
import FoodDining from './Food&Dining';
import GuestReveiws from './GuestReveiws';
import PropertyPolicies from './PropertyPolicies';
import HotelLocation from './HotelLocation';
import RelatedHotels from '../hotel-lists/RelatedHotels';
import { useHotel } from '@/context-api/CategoryContext';
import { useParams } from 'next/navigation';
import { toTitleCase } from '@/utils/toTitleCase';

export default function RoomRelatedToHotel({ category, location, hotelName }: { category?: string, location?: string, hotelName?: string }) {
    const [selectedRoomType, setSelectedRoomType] = useState("All Rooms");
    const [currentPage, setCurrentPage] = useState(1);
    const [hotels, setHotels] = useState<any[]>([]);
    const [rooms, setRooms] = useState<any[]>([]);
    const [hotelImage, setHotelImages] = useState<string[]>([]);

    const ITEMS_PER_PAGE = 6;
    // const rooms = hotelDetails[hotelName!];

    const { hotel, room, roomCategory } = useHotel();

    useEffect(() => {
        const filterHotel = hotel?.filter((item: any) => (item.hotelLocation === location && item.hotelName === hotelName));
        const filterRoom = room?.filter((item: any) => (item.hotelLocation === location && item.roomRelatedToHotel === hotelName));
        setHotels(filterHotel);
        setRooms(filterRoom);
    }, [location]);

    console.log("hotel is --> ", hotels)
    console.log("Rooms is --> ", rooms);

    const filteredRooms = useMemo(() => {
        setCurrentPage(1);
        if (selectedRoomType === "All Rooms") return rooms[0]?.property || [];

        return (rooms || []).filter(
            (room) => room.room_type === selectedRoomType
        );
    }, [rooms, selectedRoomType]);

    const paginatedRooms = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredRooms.slice(start, start + ITEMS_PER_PAGE);
    }, [filteredRooms, currentPage]);

    const totalPages = Math.ceil(filteredRooms.length / ITEMS_PER_PAGE);

    return (
        <section className='pb-0'>
            <div className='lg:max-w-screen-xl max-w-screen-md mx-auto'>
                <div
                    className="px-2 flex  m-5 items-center w-20 border-gray/30 bg-gray-100 text-sm rounded border">
                    <span className="flex items-center gap-1">{hotel[0]?.rating}
                        <FaStar size={10} className="text-yellow-500" /></span>
                    <LuDot /> Hotel
                </div>
                <div className="max-w-7xl mx-auto px-4 pb-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                            <div className='flex items-center justify-between p-2 mb-2'>
                                <div className='flex flex-col justify-start w-full'>

                                    <div className='flex items-center justify-start gap-2'>
                                        <FaHotel className='text-skyBlue' />
                                        <h1 className='text-xl text-midnight_text'>{hotelName}</h1>
                                    </div>
                                    <div className='flex items-center gap-2' >
                                        <div className='flex items-center gap-2  border-r-[1px] h-5 border-gray'>
                                            <FaMapLocationDot size={12} className='text-primary/80' />
                                            <p className='mr-1 text-sm text-gray'>{location}</p>
                                        </div>

                                        <div className='flex items-center gap-2'>
                                            <BiCurrentLocation size={12} className='text-amber-600' />
                                            <p className='text-sm text-gray'>Near By {hotel[0]?.nearByHotelLocation}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Hotel Review */}
                                <div className='flex items-center justify-start gap-2 w-56 p-3 rounded-md shadow-sm shadow-skyBlue  h-10 border border-border cursor-pointer'>
                                    <span className="bg-green-500 h-8 font-semibold flex items-center text-white px-2  rounded">
                                        4/5
                                    </span>
                                    <p className='text-sm text-primary'>View Reviews</p>
                                </div>
                            </div>
                            {/* <HotelGallery images={[hotels[0]?.image_1, hotels[0]?.image_2, hotels[0]?.image_3, hotels[0]?.image_4]} /> */}
                            <HotelGallery
                                images={[
                                    hotels[0]?.image_1,
                                    hotels[0]?.image_2,
                                    hotels[0]?.image_3,
                                    hotels[0]?.image_4,
                                ].filter((img): img is string => Boolean(img && img.trim() !== ""))}
                            />
                        </div>

                        {/* Right section */}
                        <div className="lg:col-span-1">
                            <HotelInfo room={rooms[0]} roomName={rooms[0]?.roomType} price={100} noOfRooms={rooms?.length} />
                        </div>
                    </div>
                </div>
            </div>
            <RoomCardNav />
            <div className='lg:grid gap-4 bg-light px-9 py-16'>
                <div className='col-span-12  lg:col-span-8'>
                    <div className="flex lg:flex-nowrap flex-wrap lg:gap-0 gap-6 w-full justify-between items-center pb-8">
                        <div></div>
                        <div className="flex w-full justify-between px-4 flex-1">
                            <h5 className='text-xl'>{rooms?.length} Rooms Found</h5>
                        </div>
                        <div className="flex-1 flex justify-end gap-3 px-4">
                            <select
                                value={selectedRoomType}
                                onChange={(e) => setSelectedRoomType(e.target.value)}
                                className="custom-select border w-64 border-border dark:border-dark_border dark:bg-darkmode cursor-pointer text-midnight_text focus:border-primary rounded-lg p-3 pr-9"
                            >
                                <option value="All Rooms">All Rooms</option>
                                {
                                    roomCategory?.map((room, index) => (
                                        <option key={index} value={room.category}>{room.category}</option>
                                    ))
                                }
                            </select>

                        </div>
                    </div>

                    {paginatedRooms.length > 0 ?
                        <div id="rooms" className={`grid sm:grid-cols-3  gap-6 px-4`}>
                            {paginatedRooms.map((data: any, index: number) => (
                                <RoomCard key={index} property={data} />
                            ))}
                        </div>
                        :
                        <div className='flex flex-col gap-5 items-center justify-center pt-20'>
                            <Image src={"/images/not-found/no-results.png"} alt='no-result' width={100} height={100} />
                            <p className='text-gray'>No result found</p>
                        </div>
                    }
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        // onPageChange={setCurrentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </div>
            {/* <AboutHotel description={rooms[0].description} hotelName={hotelName!} />
            <Amenities amenities={rooms[0].amenities} hotelName={hotelName!} />
            <FoodDining hotelName={hotelName!} />
            <GuestReveiws hotelName={hotelName!} />
            <PropertyPolicies />
            <HotelLocation location={location!} hotelName={hotelName!} /> */}
            {/* <RelatedHotels /> */}
        </section>
    );
}