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
            }}
        >
            {children}
        </CategoryContext.Provider>
    );
};

export const useHotel = () => {
    const data = useContext(CategoryContext);
    if (!data) {
        return null;
    } else {
        return data;
    }
}