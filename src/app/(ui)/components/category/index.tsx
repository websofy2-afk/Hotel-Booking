"use client";

import { useState, useEffect } from "react";
import { hotelsData } from "@/utils/constant";
import AdvanceSearch from "../property-list/search";
import CategoryList from "./CategoryList";
import { useHotel } from "@/context-api/CategoryContext";
import FilterSidebar from "./FilterSidebar";
import SortBar from "./SortBar";
import HotelSkeleton from "./HotelSkeleton";
import HotelCard from "./CotegorylCard";
import Pagination from "./Pagination";
import { locationData } from "@/utils/roomData";
import PropertyCard from "../home/hotel-list/property-card";

export default function HotelsPage() {
  const [hotels, setHotels] = useState(hotelsData);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState("popular");
  const [page, setPage] = useState(1);
  const perPage = 6;

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [sortOption, page]);

  // Sorting Logic
  const sortedHotels = [...hotels].sort((a, b) => {
    if (sortOption === "price_low") return a.price - b.price;
    if (sortOption === "price_high") return b.price - a.price;
    if (sortOption === "rating") return b.rating - a.rating;
    return 0;
  });

  const paginatedHotels = sortedHotels.slice(
    (page - 1) * perPage,
    page * perPage
  );

  return (

    <section>
      {/* <CategoryList /> */}


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:max-w-screen-xl md:max-w-screen-md mx-auto container px-4">
        {locationData?.map((loc, index) => (
          <div key={loc.id} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
            <PropertyCard location={loc} />
          </div>
        ))}
      </div>
    </section>
  );
}
