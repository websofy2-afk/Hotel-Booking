import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaPeopleGroup } from "react-icons/fa6";

import "@/app/style/index.css"
import { RoomCardProps } from "@/app/types/rooms/rooms";
import { IoBedOutline } from "react-icons/io5";
import HotelBookingForm from "@/utils/BookingForm";
import ScrollImageModal from "../shared/scrollImageModel";
import { FaStar } from "react-icons/fa";

const RoomCard: React.FC<RoomCardProps> = ({ property, viewMode }) => {
    const [openAmenities, setOpenAmenities] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);
    const [openModal, setOpenModal] = useState(false);
    const [openGallery, setOpenGallery] = useState(false);


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setOpenAmenities(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (

        <>
            <div
                key={property.id}
                className="bg-white shadow-property dark:bg-darklight rounded-lg"
                data-aos="fade-up"
            >
                <Link
                    href="#"
                    // href={`/properties/properties-list/${property.slug}`}
                    onClick={() => setOpenModal(true)}

                    className={`group ${viewMode === "list" && "flex"}`}>
                    <div className={`relative ${viewMode === "list" && "w-[30%]"}`}>
                        <div
                            className={`imageContainer h-[250px] w-full ${viewMode === "list" && "h-full md:h-52"
                                }`}
                            onClick={() => setOpenGallery(true)}
                        >
                            <Image
                                src={property.thumbnail}
                                alt={property.name}
                                width={400}
                                height={250}
                                className="w-full h-full object-cover group-hover:scale-125 duration-500"
                            />
                        </div>

                        {property.tag && (
                            <p className="absolute top-2 left-2 py-1 px-4 bg-white rounded-md text-primary"
                                onClick={() => setOpenGallery(true)}
                            >
                                 +{property.images.length} Photos
                            </p>
                        )}
                    </div>

                    <div
                        className={`p-5 sm:p-8 dark:text-white ${viewMode === "list" && "w-[70%] flex flex-col justify-center"
                            }`}
                    >
                        <div className="flex flex-col gap-1 border-b border-border dark:border-dark_border mb-6">

                            <div className="text-xs bg-red-500 w-16 text-center text-white py-1 px-2 rounded-md font-semibold">
                                    54 % off
                                </div>
                            <div className="flex justify-between items-center pb-4">
                                <div className="font-bold text-2xl text-midnight_text dark:text-white group-hover:text-primary">
                                    ₹{property.pricePerNight} / night
                                </div>

                                <p className="text-sm text-[10px] text-midnight_text ">
                        + ₹431 taxes & fees <br /> <span className="font-bold text-gray ">Per Night</span>  
                    </p>

                                
                            </div>
                        </div>

                        <div className="flex gap-3 items-center justify-between">
                            <div className="flex flex-col">
                                <p className="md:text-xl text-midnight_text text-lg font-bold">
                                    {property.room_type}
                                </p>
                                <p className="text-sm text-gray">Room Type</p>
                            </div>

                            <div>
                                <p className="md:text-xl text-midnight_text text-lg font-bold flex items-center gap-2">
                                    <FaPeopleGroup className="text-gray" />
                                    {property.maxAdults + property.maxChildren}
                                </p>
                                <p className="text-sm text-gray">Guests</p>
                            </div>
                        </div>

                        <div className="flex justify-between mt-4">
                            <div className="flex flex-col">
                                <p className="md:text-xl text-midnight_text text-lg font-bold items-center flex gap-2">
                                    <IoBedOutline className="text-gray" />
                                    {property.bedType}
                                </p>
                                <p className="text-sm text-gray">Bed Type</p>
                            </div>
                            {property.rating && (
                                <div className="flex flex-col">
                                    <p className="md:text-xl text-midnight_text text-lg font-bold flex items-center gap-2">
                                        <FaStar size={15} className="text-yellow-400" /> {property.rating}
                                    </p>
                                    <p className="text-sm text-gray">Rating</p>
                                </div>
                            )}
                        </div>


                        <div className="flex items-center justify-evenly gap-2 mt-4 relative overflow-visible">
                            {property.amenities?.slice(0, 2).map((amenity, index) => (
                                <span key={index} className="text-xs text-midnight_text">
                                    {amenity}
                                </span>
                            ))}
                            {property.amenities && property.amenities.length > 2 && (
                                <div className="relative inline-block overflow-visible" ref={popupRef}>
                                    <span
                                        className="text-xs text-primary cursor-pointer"
                                        onMouseEnter={() => setOpenAmenities(!openAmenities)}
                                        onMouseLeave={() => setOpenAmenities(false)}
                                    >
                                        + more
                                    </span>
                                    {openAmenities && (
                                        <div className="absolute -translate-x-40 -translate-y-40  top-0 left-0 z-50 bg-white dark:bg-gray-900 shadow-xl shadow-midnight_text rounded-md p-3 w-32">
                                            {property.amenities.map((item, i) => (
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
                        <button
                            onClick={() => setOpenModal(true)}
                            className="w-full mt-2 font-semibold hover:bg-primary hover:text-white text-primary py-2 rounded-lg border border-primary transition"
                        >
                            Book Your Room
                        </button>
                    </div>
                </Link>
            </div>

            {openModal && (
                <div
                    onClick={() => setOpenModal(false)}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
                >
                    <div
                        className=" p-6 rounded-xl "
                        onClick={(e) => e.stopPropagation()}
                    >
                        <HotelBookingForm closeModal={() => setOpenModal(false)} />
                    </div>
                </div>
            )}

            {openGallery && (
                <ScrollImageModal
                    images={property.images}
                    startIndex={0}
                    onClose={() => setOpenGallery(false)}
                />
            )}


        </>
    );
};

export default RoomCard;


const roomNav = [
    {
        id : "rooms", item : "Rooms Options"
    },
    {
        id : "amenities", item : "Amenities"
    },
    {
        id : "food&dining", item : "Food & Dining"
    },
    {
        id : "guestReveiws", item : "Guest Reveiws"
    },
    {
        id : "propertyPolicies", item : "Property Policies"
    },
    {
        id : "location", item : "Location"
    },
];


export const RoomCardNav = ()=>{
    return (
        <div className="flex bg-white border border-border shadow-lg shadow-skyBlue/20
                  p-4  items-center justify-center gap-10 flex-wrap sticky bg-gray-100 py-3 z-20">
                            {roomNav.map((nav, index) => (
                                <button
                                    key={index}
                                    onClick={() => document.getElementById(`${nav.id}`)?.scrollIntoView({ behavior: "smooth" })}
                                >
                                    {nav.item}
                                </button>
                            ))}
                           
                        </div>
    )
}