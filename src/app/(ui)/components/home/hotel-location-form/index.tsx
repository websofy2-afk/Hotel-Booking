"use client";
import { hotelList, locationList } from "@/utils/constant";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { TiLocationArrowOutline } from "react-icons/ti";

export default function HotelLocationForm({ closeModal }: { closeModal?: () => void; }) {
    const [location, setLocation] = useState("");
    const [showLocation, setShowLocation] = useState(false);
    const [hotel, setHotel] = useState("");
    const [hotelOptions, setHotelOptions] = useState<string[]>([]);
    const [showHotel, setShowHotel] = useState(false);
    const router = useRouter();

    const handleLocation = (loc: string) => {
        const filteredHotel = hotelList?.find(
            (item) => item.location === loc
        )?.hotels ?? [];
        setLocation(loc);
        setShowLocation(false);
        setHotelOptions(filteredHotel);
        setHotel("");
    };

    const handleHotel = (hotelName: string) => {
        setHotel(hotelName);
        setShowHotel(false);
    };

    const handleSubmit = () => {
        if (!location) return;
        const query = new URLSearchParams({
            location: location,
            hotel: hotel || "",
        }).toString();
        router.push(`/hotel-list?${query}`);
    };


    return (
        <div className="relative w-full">
            <div className="bg-herobg/60 relative rounded-xl pt-6 px-6 shadow-xl  bg-opacity-90">
                <div className="flex justify-between">
                    <h3 className="text-2xl text-midnight_text font-semibold mb-4 text-gray-800">Book Your Stay</h3>
                    {
                        closeModal &&
                        <button
                            onClick={closeModal}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-black/20 cursor-pointer">
                            <RxCross1 className="text-black" />
                        </button>
                    }
                </div>

                <div className="p-6 w-full  max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 border border-midnight_text rounded-xl overflow-hidden">
                        <div className="p-5 border-r cursor-pointer" onClick={
                            () => {
                                setShowLocation(!showLocation);
                                setShowHotel(false)
                            }}
                        >
                            <p className="text-xs text-midnight_text">Location</p>
                            <div className="flex w-56 items-center gap-2 mt-1">
                                <MdLocationOn className="text-midnight_text text-xl" />
                                <p className="text-2xl font-bold text-midnight_text">{location || "Select Location"}</p>
                            </div>
                            <p className="text-gray-600 text-sm text-midnight_text">India</p>

                            {showLocation && (

                                <div className="absolute inset-0 flex items-center justify-center z-50">
                                    <div
                                        className="bg-herobg shadow-md p-3 rounded-lg mt-3 w-40 z-50"
                                        style={{
                                            maxHeight: "150px",
                                            overflowY: "auto",
                                            WebkitOverflowScrolling: "touch",
                                        }}
                                    >
                                        {locationList?.map((loc) => (
                                            <p
                                                key={loc}
                                                className="py-2 px-3 flex items-center gap-2 text-midnight_text rounded cursor-pointer"
                                                onClick={() => handleLocation(loc)}
                                            >
                                                <TiLocationArrowOutline />
                                                {loc}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>


                        <div className="p-5 border-r cursor-pointer" onClick={() => {
                            if (hotelOptions.length === 0) return;
                            setShowHotel(!showHotel);
                            setShowLocation(false);
                        }}>
                            <p className="text-xs text-midnight_text">Hotel</p>
                            <div className="flex items-center gap-2 mt-1">
                                <RiHotelLine className="text-midnight_text text-xl" />
                                <p className="text-2xl font-bold text-midnight_text">{hotel || "Select Hotel"}</p>
                            </div>

                            {showHotel && (

                                <div className="absolute inset-0 flex items-center justify-center z-50">
                                    <div
                                        className="bg-herobg shadow-md p-3 rounded-lg mt-3 w-64 z-50"
                                        style={{
                                            maxHeight: "150px",
                                            overflowY: "auto",
                                            WebkitOverflowScrolling: "touch",
                                        }}
                                    >
                                        {hotelOptions.map((ht) => (
                                            <p
                                                key={ht}
                                                className="py-2 flex items-center gap-2 px-3 text-midnight_text rounded cursor-pointer"
                                                onClick={() => handleHotel(ht)}
                                            >
                                                <FaArrowTrendUp />
                                                {ht}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-center mt-6">
                        <button className="text-xl px-9 uppercase py-3 border border-midnight_text text-midnight_text rounded-lg"
                            onClick={handleSubmit}>
                            Find Hotels
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
