"use client";

import { createContext, useState, useEffect, ReactNode, Dispatch, SetStateAction, useContext } from 'react';
import { CategoryFilters } from '@/app/types/category/categorytypes';
import { Filters } from '@/app/types/property/filtertypes';
import { roomsProps } from '@/app/types/rooms/rooms';
import { roomData } from '@/utils/roomData';

interface HotelContextType {
    property: roomsProps[];
    setHotels: Dispatch<SetStateAction<roomsProps[]>>;
    filters: CategoryFilters;
    setFilters: Dispatch<SetStateAction<CategoryFilters>>;
    updateFilter: (key: keyof Filters, value: string) => void;
    hotelLocation: any[];
    photos: any[];
    videos: any[];
    testimonial: any[];
    faq: any[];
    hotel: any[];
    room: any[];
    roomCategory: any[];
}

export const CategoryContext = createContext<HotelContextType | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [allHotel, setAllHotel] = useState<roomsProps[]>([]);
    const [hotels, setHotels] = useState<roomsProps[]>([]);
    const [filters, setFilters] = useState<CategoryFilters>({
        keyword: '',
        hotel_name: "",
        city: "",
        room_type: "",
        tag: "",
        rating: 1,
    });

    const [hotelLocation, setHotelLocation] = useState<any[]>([]);
    const [photos, setPhotos] = useState<any[]>([]);
    const [videos, setVideos] = useState<any[]>([]);
    const [testimonial, setTestimonial] = useState<any[]>([]);
    const [faq, setFaq] = useState<any[]>([]);
    const [hotel, setHotel] = useState<any[]>([]);
    const [room, setRoom] = useState<any[]>([]);
    const [roomCategory, setRoomCategory] = useState<any[]>([]);

    const fetchData = async () => {
        try {
            const [hotelLocationRes, photosRes, videosRes, testimonialRes, faqRes, hotelRes, roomRes, roomCategoryRes] = await Promise.all([fetch("/api/auth/hotel-location"), fetch("/api/auth/gallery/photo"), fetch("/api/auth/gallery/video"), fetch("/api/auth/testimonial"), fetch("/api/auth/faq"), fetch("/api/auth/hotel"), fetch("/api/auth/room"), fetch("/api/auth/room-category")]);

            if (!hotelLocationRes.ok || !photosRes.ok || !videosRes || !testimonialRes || !faqRes) throw new Error("Failed to fetch");
            const hotelLocationJson = await hotelLocationRes.json();
            const photosResJson = await photosRes.json();
            const videosResJson = await videosRes.json();
            const testimonialResJson = await testimonialRes.json();
            const faqResJson = await faqRes.json();
            const hotelResJson = await hotelRes.json();
            const roomResJson = await roomRes.json();
            const roomCategoryResJson = await roomCategoryRes.json();

            setHotelLocation(hotelLocationJson?.data);
            setPhotos(photosResJson?.data);
            setVideos(videosResJson?.data);
            setTestimonial(testimonialResJson?.data);
            setFaq(faqResJson?.data);
            setHotel(hotelResJson?.data);
            setRoom(roomResJson?.data);
            setRoomCategory(roomCategoryResJson?.data);
        } catch (error) {
            console.error("Error fetching data records :", error);
        }
    }

    useEffect(() => {
        const filteredHotels = roomData?.filter((hotel) => {
            return (
                (!filters.keyword || hotel.hotel_name.toLowerCase().includes(filters.keyword.toLowerCase())) &&

                (!filters.hotel_name ||
                    hotel.hotel_name.toLowerCase().includes(filters.hotel_name.toLowerCase())) &&

                (!filters.city ||
                    hotel.city.toLowerCase() === filters.city.toLowerCase()) &&

                (!filters.room_type ||
                    hotel.room_type.toLowerCase() === filters.room_type.toLowerCase()) &&

                (!filters.tag ||
                    hotel.tag.toLowerCase() === filters.tag.toLowerCase()) &&

                (!filters.rating ||
                    hotel.rating === Number(filters.rating))
            );
        });
        setHotels(filteredHotels);
    }, [filters, allHotel]);

    useEffect(() => {
        fetchData();
    }, []);

    const updateFilter = (key: keyof Filters, value: string) => {
        setFilters((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    return (
        <CategoryContext.Provider
            value={{
                property: roomData,
                setHotels,
                filters,
                setFilters,
                updateFilter,
                hotelLocation,
                photos,
                videos,
                testimonial,
                faq,
                hotel,
                room, 
                roomCategory
            }}
        >
            {children}
        </CategoryContext.Provider>
    );
};

export const useHotel = () => {
    const dataContext = useContext(CategoryContext);
    if (!dataContext) {
        throw new Error("useHotel must be used within HotelProvider");
    } else {
        return dataContext;
    }
}