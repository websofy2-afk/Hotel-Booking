"use client";
import { hotelData, hotelDetails } from "@/utils/constant";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import { MdPeopleAlt } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { BiSolidOffer } from "react-icons/bi";

export default function HotelListPage() {
    const params = useSearchParams();
    const location = params.get("location");
    const selectedHotel = location ? hotelData[location] : null;
    const hotel = selectedHotel?.hotels;
    const [openAmenitiesIndex, setOpenAmenitiesIndex] = useState<number | null>(null);
    const popupRef = useRef<HTMLDivElement>(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setOpenAmenitiesIndex(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const b = hotel!.map(item => hotelDetails[item]).flat()

    if (!selectedHotel) return <p>No hotel found!</p>;
    const filterOptions = [
        "Price - Low to High",
        "Price - High to Low",
        "Rating - High to Low",
    ];

    const [activeFilter, setActiveFilter] = useState(filterOptions[0]);
    const router = useRouter();
    const [openFilter, setOpenFilter] = useState<string | null>(null);
    const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
    const [selectedRating, setSelectedRating] = useState<number | null>(null);

    const priceRanges = [
        { id: "2000-3000", label: "₹2000 to ₹3000", min: 2000, max: 3000 },
        { id: "3000-5000", label: "₹3000 to ₹5000", min: 3000, max: 5000 },
        { id: "5000-6500", label: "₹5000 to ₹6500", min: 5000, max: 6500 }
    ];

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const t = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(t);
    }, []);

    const filterHotels = b.filter((hotel) => {
        let ok = true;
        if (selectedPrices.length > 0) {
            ok = selectedPrices.some((rangeId) => {
                const range = priceRanges.find((p) => p.id === rangeId);
                return hotel.price >= range!.min && hotel.price <= range!.max;
            });
        }

        if (selectedRating) ok = hotel.rating >= selectedRating;
        if (searchTerm.trim()) {
            ok = ok && hotel.name.toLowerCase().includes(searchTerm.toLowerCase());
        }
        return ok;
    });

    const sortedHotels = [...filterHotels].sort((a, b) => {
        if (activeFilter === "Price - Low to High") return a.price - b.price;
        if (activeFilter === "Price - High to Low") return b.price - a.price;
        if (activeFilter === "Rating - High to Low") return b.rating - a.rating;
        return 0;
    });

    const [visibleCount, setVisibleCount] = useState(2);
    const loaderRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setVisibleCount((v) => v + 2);
            }
        });
        if (loaderRef.current) observer.observe(loaderRef.current);
        return () => observer.disconnect();
    }, []);

    const visibleHotels = sortedHotels.slice(0, visibleCount);

    const [hoverImage, setHoverImage] = useState<{ [key: number]: string }>({});

    return (
        <div className="px-6 mt-24 py-8 bg-gray-100 min-h-screen flex gap-6">
            <div className="w-72 bg-white border border-border p-4 rounded-xl shadow-lg shadow-skyBlue/20 hidden lg:block h-fit sticky top-24">
                <div className="flex justify-between">
                    <h2 className="text-xl">FILTERS</h2>
                    <button
                        className="text-primary text-sm"
                        onClick={() => {
                            setSelectedPrices([]);
                            setSelectedRating(null);
                        }}
                    >
                        CLEAR
                    </button>
                </div>

                {/* PRICE FILTER */}
                <div className="mt-5 border-b pb-3  border-midnight_text">
                    <button
                        className="flex justify-between text-midnight_text items-center w-full"
                        onClick={() =>
                            setOpenFilter(openFilter === "price" ? null : "price")
                        }
                    >
                        <span className="font-semibold">Price</span>
                        {openFilter === "price" ? <FiChevronUp /> : <FiChevronDown />}
                    </button>

                    {openFilter === "price" && (
                        <div className="mt-3 space-y-2">
                            {priceRanges.map((p) => (
                                <label key={p.id} className="flex items-center text-midnight_text gap-2 text-sm">
                                    <input
                                        type="checkbox"
                                        checked={selectedPrices.includes(p.id)}
                                        onChange={() =>
                                            setSelectedPrices((prev) =>
                                                prev.includes(p.id)
                                                    ? prev.filter((q) => q !== p.id)
                                                    : [...prev, p.id]
                                            )
                                        }
                                    />
                                    {p.label}
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                {/* RATING FILTER */}
                <div className="mt-5">
                    <button
                        className="flex justify-between items-center w-full text-midnight_text"
                        onClick={() =>
                            setOpenFilter(openFilter === "rating" ? null : "rating")
                        }
                    >
                        <span className="font-semibold">Rating</span>
                        {openFilter === "rating" ? <FiChevronUp /> : <FiChevronDown />}
                    </button>

                    {openFilter === "rating" && (
                        <div className="mt-3 space-y-2 text-sm">
                            {[5, 4.5, 4, 3.5].map((r) => (
                                <label key={r} className="flex text-midnight_text items-center gap-2">
                                    <input
                                        type="checkbox"
                                        name="rating"
                                        checked={selectedRating === r}
                                        onChange={() => setSelectedRating(r)}
                                    />
                                    {r}+ Rating
                                </label>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            {/* ---------------- RIGHT SECTION (ONLY THIS SCROLLS) ---------------- */}
            <div className="flex-1 h-[80vh] overflow-y-auto pr-3">
                {/* SORT STRIP */}

                <div className="flex bg-white border border-border shadow-lg shadow-skyBlue/20
          p-4 rounded-2xl items-center gap-3 flex-wrap mb-6 sticky top-0 bg-gray-100 py-3 z-20">
                    <span className="text-lg font-semibold text-midnight_text">Sort By :</span>
                    {filterOptions.map((opt) => (
                        <button
                            key={opt}
                            onClick={() => setActiveFilter(opt)}
                            className={`px-4 py-2 rounded-full border text-sm transition 
              ${activeFilter === opt
                                    ? "bg-primary/10 text-primary border-primary"
                                    : "border-gray text-midnight_text"
                                }`}
                        >
                            {opt}
                        </button>
                    ))}
                    <div className="flex items-center justify-end mt-4 w-full">

                        <h2 className="text-3xl">Showing hotels in {location}</h2>
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-midnight_text ml-auto">
                            <CiSearch className="text-gray-500 text-xl" />
                                                       <input
                                type="text"
                                placeholder="Search Hotel"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="outline-none text-sm bg-transparent"
                            />

                        </div>
                    </div>
                </div>

                {/* SHIMMER */}
                {isLoading &&
                    Array(3)
                        .fill(null)
                        .map((_, i) => (
                            <div
                                key={i}
                                className="bg-white p-4 rounded-xl shadow animate-pulse flex gap-6 mb-6"
                            >
                                <div className="w-64 h-40 bg-gray/20 rounded" />
                                <div className="flex-1 space-y-3">
                                    <div className="h-5 w-40 bg-gray/20" />
                                    <div className="h-4 w-28 bg-gray/20" />
                                    <div className="h-3 w-full bg-gray/20" />
                                </div>
                            </div>
                        ))}

                {/* HOTEL CARDS */}
                {!isLoading &&
                    visibleHotels.map((hotel) => (
                        <div key={hotel.id} className="bg-white p-4 border-2 border-border cursor-pointer rounded-xl shadow-md shadow-skyBlue/20 mb-6 hover:border-skyBlue hover:border-2"
                            onClick={() => router.push(`/hotel-list/${hotel.location.toLowerCase()}/${hotel.name.replace(/\s+/g, "-").toLowerCase()}`)}
                        >
                            <div className="flex flex-col lg:flex-row gap-6">

                                <div className="w-full flex flex-col lg:w-64 relative">
                                    <Image
                                        src={hoverImage[hotel.id] || hotel.thumbnailImag!}
                                        alt={"Hotel Image"}
                                        width={500}
                                        height={400}
                                        className="w-full h-full object-cover rounded-lg transition-all"
                                    />

                                    {/* THUMBNAILS */}
                                    <div className="flex items-center  justify-between mt-2">
                                        {hotel.images.map((img, i) => {
                                            const isLast = i === hotel.images.length - 1;
                                            return (
                                                <div key={i} className="relative">
                                                    <Image
                                                        src={img}
                                                        alt="Thumbnail"
                                                        width={80}
                                                        height={60}
                                                        onMouseEnter={() =>
                                                            setHoverImage((p) => ({ ...p, [hotel.id]: img }))
                                                        }
                                                        onMouseLeave={() =>
                                                            setHoverImage((p) => ({ ...p, [hotel.id]: hotel.thumbnailImag! }))
                                                        }
                                                        className="w-[3.5em] h-14 object-cover rounded cursor-pointer"
                                                    />

                                                    {/* VIEW ALL TEXT ON LAST THUMBNAIL */}
                                                    {isLast && (
                                                        <div
                                                            onMouseEnter={() =>
                                                                setHoverImage((p) => ({ ...p, [hotel.id]: img }))
                                                            }
                                                            onMouseLeave={() =>
                                                                setHoverImage((p) => ({ ...p, [hotel.id]: hotel.thumbnailImag! }))
                                                            }
                                                            className="absolute inset-0 bg-black/30 cursor-pointer flex items-center justify-center rounded text-white text-xs font-semibold">
                                                            View All
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                {/* INFO */}
                                <div className="flex-1 border-r-2 border-skyBlue/80">
                                    <div className="flex items-center justify-between pr-2 gap-2 mb-2">
                                        <div
                                            className="px-2 flex border-gray/30 items-center bg-gray-100 text-sm rounded border"
                                        >
                                            <span className="flex items-center gap-1">{hotel.tag}
                                                <FaStar size={10} className="text-yellow-500" /></span>
                                            <LuDot /> Hotel

                                        </div>

                                        <p className="text-gray-500 text-sm">
                                            <span className="border-r-[1px] border-gray mr-1  ">{hotel.totalRating} Ratings{" "}</span>

                                            <span className="bg-green-500 text-white px-2 py rounded">
                                                {hotel.rating}/5
                                            </span>
                                        </p>
                                    </div>

                                    <h2 className="text-xl font-bold">{hotel.name}</h2>
                                    <p className="text-blue-600 text-sm">{hotel.location}</p>

                                    <div className="flex items-center justify gap-3 mt-4 relative overflow-visible">
                                        {hotel.amenities?.slice(0, 2).map((amenity, index) => (
                                            <span key={index} className="text-xs border px-1 border-gray/30 rounded-sm text-midnight_text">
                                                {amenity}
                                            </span>
                                        ))}
                                        {hotel.amenities && hotel.amenities.length > 2 && (
                                            <div className="relative inline-block overflow-visible" ref={popupRef}>
                                                <span
                                                    className="text-xs text-primary cursor-pointer"
                                                    onMouseEnter={() =>
                                                        setOpenAmenitiesIndex(openAmenitiesIndex === hotel.id ? null : hotel.id)
                                                    }
                                                    onMouseLeave={() =>
                                                        setOpenAmenitiesIndex(openAmenitiesIndex === hotel.id ? null : hotel.id)
                                                    }
                                                >
                                                    & more
                                                </span>
                                                {openAmenitiesIndex === hotel.id && (
                                                    <div className="absolute translate-x-14 translate-y-2  top-0 left-0 z-50 bg-gray/5  shadow-xl rounded-md p-3 w-32">
                                                        <p className="font-semibold pl-2">Amenities</p>
                                                        {hotel.amenities.map((item, i) => (
                                                            <div
                                                                key={i}
                                                                className="text-xs text-midnight_text dark:text-gray-200 py-1"
                                                            >
                                                                {item}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex items-center justify gap-3 mt-6 overflow-hidden">
                                        {
                                            facilities.map((item, index) => (
                                                <div key={index}>
                                                    {
                                                        item.tag && <div className="flex items-center gap-1 text-[12px] text-skyBlue"><MdPeopleAlt /> {item.tag}</div>
                                                    }

                                                    {
                                                        item.fac.map((f, index) => (
                                                            <div key={index} className="flex items-center gap-1 text-[12px] "><TiTick size={15} className="text-green-500" />{f}</div>
                                                        ))
                                                    }


                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="h-52 flex flex-col justify-between">
                                        <div>
                                            {
                                                hotel.offer && <div className="rounded-md border border-border shadow-lg shadow-skyBlue/20">
                                                    <div className="border-b-[1px] border-border flex items-center justify-end gap-1 px-2 text-[10px] h-6">
                                                        <BiSolidOffer size={15} className="text-gray" /><p> <span className="border-r-[1px] border-gray mr-1">Bank Ofer </span>₹431 off</p>
                                                    </div>
                                                    <p className="text-[11px] px-2 text-end">
                                                        Pay using RBL Bank Credit Cards <br /> EMI option & get No Cost EMI</p>
                                                </div>
                                            }
                                        </div>
                                        <div className={`flex flex-col ${hotel.offer ? "mt-16" : "mt-[8.6em]"} justify-end`}>
                                            <div className="flex items-center justify-end gap-2">
                                                <p className="line-through text-gray-400 text-sm">
                                                    ₹{hotel.oldPrice}
                                                </p>
                                                <p className="text-2xl font-bold">₹{hotel.price}</p>
                                            </div>

                                            <div className="flex text-gray justify-end text-[13px]">
                                                <p className="mr-1">
                                                    ₹431
                                                </p>
                                                <p>taxes & fee <br /> per niight</p>
                                            </div>

                                            <button className="text-primary text-end font-semibold text-[12px]">
                                                Login now & save more
                                            </button>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    ))}
                <div ref={loaderRef} className="h-10"></div>
            </div>
        </div>
    );
}

const facilities = [{
    tag: "Couple Friendly",
    fac: ["Free Cancellation", "Breakfast available at extra charges", "Enjoy Happy Hours with 1+1 offer"]
}]