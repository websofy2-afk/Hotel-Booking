"use client";
import { locationList } from "@/utils/constant";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import { MdLocationOn } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { CiLocationOn } from "react-icons/ci";


export default function SearchLocation({ closeModal }: { closeModal?: () => void; }) {
    const [location, setLocation] = useState("Lucknow");
    const [inputPlaceholder, setInputPlaceholder] = useState("");
    const [showLocation, setShowLocation] = useState(false);
    const router = useRouter();

    const filteredLocations = useMemo(() => {
        if (!location) return locationList;
        return locationList.filter((loc) =>
            loc.toLowerCase().includes(location.toLowerCase())
        );
    }, [location]);

    const handleLocation = (loc: string) => {
        setLocation(loc);
        setShowLocation(false);
    };

    const handleSubmit = () => {
        if (!location) return;
        const query = new URLSearchParams({ location }).toString();
        router.push(`/hotel-list?${query}`);
    };

    return (
        <div className="relative w-full">
            <div className="bg-herobg/60 relative rounded-xl pt-6 px-6 shadow-xl bg-opacity-90"
                onClick={() => setShowLocation(false)}
            >
                {closeModal && (
                    <button
                        onClick={closeModal}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-black/20 cursor-pointer">
                        <RxCross1 className="text-black" />
                    </button>
                )}

                <div className="p-3 w-full max-w-6xl mx-auto">
                    <form onClick={(e) => e.stopPropagation()}>
                        <fieldset className="border flex items-center gap-2 border-midnight_text rounded-lg p-4 relative">
                            <legend className="px-2 text-midnight_text text-2xl font-semibold">Where to</legend>
                            <MdLocationOn className="text-midnight_text text-3xl" />
                            <input
                                value={location}
                                onChange={(e) => {
                                    setLocation(e.target.value);
                                    if (!showLocation) setShowLocation(true);
                                }}
                                type="text"
                                className="text-3xl font-bold bg-white/40 p-4 min-h-[56px] leading-tight appearance-none text-midnight_text rounded w-full placeholder:text-2xl placeholder:font-semibold placeholder:text-midnight_text cursor-pointer"
                                style={{ fontSize: "30px", lineHeight: "1.05" }}
                                placeholder={inputPlaceholder}
                                onClick={() => {
                                    setShowLocation(true);
                                    setInputPlaceholder("Search location...");
                                    setLocation("");
                                }}
                            />
                        </fieldset>
                    </form>
                    {showLocation && (
                        <div className=" left-0 right-0 mt-2 z-50">
                            <div
                                className="bg-herobg/60 border border-midnight_text shadow-lg p-3 rounded-lg w-full max-h-40 overflow-y-auto"
                                style={{ WebkitOverflowScrolling: "touch" }}
                            >
                                {filteredLocations.length === 0 && (
                                    <p className="text-midnight_text text-center py-3">No matches found</p>
                                )}
                                {filteredLocations.map((loc, index) => (
                                    <p
                                        key={index}
                                        className={`py-2 text-xl px-3 flex items-center border-white/70 gap-2 hover:bg-gray-100 text-midnight_text cursor-pointer ${index !== filteredLocations.length - 1 ? "border-b" : ""}`}
                                        onClick={() => handleLocation(loc)}
                                    ><CiLocationOn />{loc}
                                    </p>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="flex justify-end mt-6">
                        <button
                            className="text-xl px-9 uppercase py-3 border border-midnight_text text-midnight_text rounded-lg"
                            onClick={handleSubmit}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
