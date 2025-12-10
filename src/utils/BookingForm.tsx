"use client";
import { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { FaPlus, FaMinus, FaCalendarAlt } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

interface HotelBookingFormProps {
    closeModal?: () => void;
}

export default function HotelBookingForm({ closeModal }: HotelBookingFormProps) {
    const [location, setLocation] = useState("Lucknow");
    const [showLocation, setShowLocation] = useState(false);
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [showGuests, setShowGuests] = useState(false);

    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);

    const [tempRooms, setTempRooms] = useState(rooms);
    const [tempAdults, setTempAdults] = useState(adults);
    const [tempChildren, setTempChildren] = useState(children);

    const locationList = ["Lucknow", "Goa", "Mumbai", "Delhi", "Hyderabad", "Bangalore", "Kolkata"];

    return (
        <div className="relative w-full">
            <div className="bg-herobg/80 rounded-xl pt-6 px-6 shadow-xl backdrop-blur-lg bg-opacity-90">

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

                <div className="p-6 w-full max-w-6xl mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-2 border border-midnight_text rounded-xl overflow-hidden">
                        <div className="p-5 border-r border-b cursor-pointer" onClick={() => setShowLocation(!showLocation)}>
                            <p className="text-xs text-midnight_text">Location</p>
                            <div className="flex items-center gap-2 mt-1">
                                <MdLocationOn className="text-midnight_text text-xl" />
                                <p className="text-2xl font-bold text-midnight_text">{location}</p>
                            </div>
                            <p className="text-gray-600 text-sm text-midnight_text">India</p>

                            {showLocation && (
                                <div
                                    className="absolute bg-white shadow-md p-3 rounded-lg mt-3 w-64 z-50"
                                    style={{
                                        maxHeight: "150px",
                                        overflowY: "auto",
                                        WebkitOverflowScrolling: "touch",
                                    }}
                                >
                                    {locationList.map((loc) => (
                                        <p
                                            key={loc}
                                            className="py-2 px-3 text-midnight_text rounded cursor-pointer"
                                            onClick={() => {
                                                setLocation(loc);
                                                setShowLocation(false);
                                            }}
                                        >
                                            {loc}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="p-5 border-b">
                            <p className="text-xs text-gray-500 text-midnight_text">Check-In</p>
                            <div className="flex items-center w-96 gap-3 mt-1">
                                <FaCalendarAlt className="text-midnight_text" />
                                <input
                                    type="date"
                                    className="outline-none text-xl font-semibold text-midnight_text bg-transparent"
                                    value={checkIn}
                                    onChange={(e) => setCheckIn(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="p-5 border-r">
                            <p className="text-xs text-midnight_text">Check-Out</p>
                            <div className="flex items-center w-96 gap-3 mt-1">
                                <FaCalendarAlt className="text-midnight_text" />
                                <input
                                    type="date"
                                    className="outline-none text-midnight_text text-xl font-semibold bg-transparent"
                                    value={checkOut}
                                    onChange={(e) => setCheckOut(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="p-5 cursor-pointer relative" onClick={() => setShowGuests(true)}>
                            <p className="text-xs text-midnight_text">Rooms & Guests</p>
                            <p className="text-xl font-bold text-midnight_text">{rooms} Room • {adults} Adults</p>
                            <p className="text-midnight_text text-sm">{children} Children</p>
                        </div>
                    </div>

                    <div className="flex justify-center mt-6">
                        <button className="text-xl px-9 py-3 border border-midnight_text text-midnight_text rounded-lg">
                            PAY NOW
                        </button>
                    </div>
                </div>
            </div>

            {showGuests && (
                <div
                    className="absolute inset-0 z-50 flex items-center justify-center"
                    onClick={() => setShowGuests(false)}
                >
                    <div
                        className="bg-herobg shadow-xl rounded-xl p-5"
                        style={{ width: "28em", maxWidth: "100%" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-3">
                            <h2 className="text-2xl text-midnight_text font-semibold">Rooms & Guests</h2>
                            <div
                                onClick={() => setShowGuests(false)}
                                className="flex items-center justify-center w-8 h-8 cursor-pointer rounded-full bg-black/20"
                            >
                                <RxCross1 />
                            </div>
                        </div>
                        <div className="flex justify-between items-center text-midnight_text py-3 border-b">
                            <p className="font-medium">Adults</p>
                            <div className="flex items-center gap-3">
                                <button
                                    className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-gray-100"
                                    onClick={() => setTempAdults(Math.max(1, tempAdults - 1))}
                                >
                                    <FaMinus size={10} />
                                </button>
                                <span className="text-lg font-semibold">{tempAdults}</span>
                                <button
                                    className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-gray-100"
                                    onClick={() => setTempAdults(tempAdults + 1)}
                                >
                                    <FaPlus size={10} />
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-between items-center text-midnight_text py-3">
                            <p className="font-medium flex flex-col">
                                Children <span className="text-sm">0–17 Years Old</span>
                            </p>
                            <div className="flex items-center gap-3">
                                <button
                                    className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-gray-100"
                                    onClick={() => setTempChildren(Math.max(0, tempChildren - 1))}
                                >
                                    <FaMinus size={10} />
                                </button>
                                <span className="text-lg font-semibold">{tempChildren}</span>
                                <button
                                    className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-gray-100"
                                    onClick={() => setTempChildren(tempChildren + 1)}
                                >
                                    <FaPlus size={10} />
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between items-center text-midnight_text py-3 border-t">
                            <p className="font-medium">Rooms</p>
                            <div className="flex items-center gap-3">
                                <button
                                    className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-gray-100"
                                    onClick={() => setTempRooms(Math.max(1, tempRooms - 1))}
                                >
                                    <FaMinus size={10} />
                                </button>
                                <span className="text-lg font-semibold">{tempRooms}</span>
                                <button
                                    className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-gray-100"
                                    onClick={() => setTempRooms(tempRooms + 1)}
                                >
                                    <FaPlus size={10} />
                                </button>
                            </div>
                        </div>
                        <p className="text-xs mt-2">
                            Please provide right number of children along with their right age for best options and prices.
                        </p>
                        <button
                            className="w-full font-semibold py-2 text-lg md:text-xl px-4 md:px-8 bg-semidark text-white rounded-lg hover:bg-semidark/80 transition duration-300 mt-4"
                            onClick={() => {
                                setRooms(tempRooms);
                                setAdults(tempAdults);
                                setChildren(tempChildren);
                                setShowGuests(false);
                            }}
                        >
                            Apply
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
