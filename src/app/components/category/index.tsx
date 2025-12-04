"use client";

import { useState, useEffect } from "react";
import { hotelsData } from "@/utils/constant";
import AdvanceSearch from "../property-list/search";
import CategoryList from "./CategoryList";
import { useHotel } from "@/context-api/CategoryContext";

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
    // <section className="min-h-screen bg-light">
    //   <div className="max-w-screen-xl mx-auto px-4 py-10 flex gap-10">
    //     <FilterSidebar setHotels={setHotels} />
    //     <div className="flex-1">
    //       <SortBar setSortOption={setSortOption} />
    //       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
    //         {loading
    //           ? [...Array(6)].map((_, i) => <HotelSkeleton key={i} />)
    //           : paginatedHotels.map((hotel) => (
    //               <HotelCard key={hotel.id} hotel={hotel} />
    //             ))}
    //       </div>
    //       <Pagination
    //         currentPage={page}
    //         totalItems={sortedHotels.length}
    //         perPage={perPage}
    //         onPageChange={setPage}
    //       />
    //     </div>
    //   </div>
    // </section>
    <>
      <CategoryList />
    </>
  );
}
