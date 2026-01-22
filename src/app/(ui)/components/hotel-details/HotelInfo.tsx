"use client";
import { BiSolidChevronsDown } from "react-icons/bi";
import { IoBedOutline, IoPeople } from "react-icons/io5";
import { TbBadgeOff } from "react-icons/tb";


export default function HotelInfo({ roomName, price, noOfRooms }: { roomName: string, price: number, noOfRooms : number }) {
    const scrollToRooms = () => {
        document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" });
    };

    return (

        <div className="flex flex-col gap-4">
        <div className="border border-border shadow-sm shadow-skyBlue rounded-xl p-5 sticky">
            <p className="font-bold text-[15px]">{roomName} with Free Wi-Fi</p>
            <div className="flex items-center gap-2">
                <p className="flex items-center gap-2 text-sm border-r-[1px] border-gray">
                    <IoPeople className="text-gray" /> <span className="text-midnight_text  mr-1">2 Guests</span>
                </p>
                <p className="flex items-center gap-2 text-sm">
                    <IoBedOutline className="text-gray" /> <span className="text-midnight_text  ">1 Room</span> </p>
            </div>

            <div className="flex items-center justify-between gap-10">
                <div className="flex items-center gap-2 text-[12px] text-green-500">
                    <TbBadgeOff size={30}/>

                    <p className="font-semibold">Free Cancellation till 22-Dec-2025 11:59</p>
                </div>

                <div className="text-end">
                    
                    <p className="text-2xl font-bold">₹{price}</p>
                    <p className="text-sm text-gray-500 text-gray text-[12px]">
                        +431 taxes & fees <span className="font-semibold ">Room</span>  per night
                    </p>
                </div>
            </div>
            <button
                onClick={scrollToRooms}
                className="w-full bg-primary mt-5 flex items-center gap-1 justify-center text-white py-3 rounded-lg  font-semibold border border-primary hover:bg-blue-700 transition"
            >
                <span className="font-bold">VIEW {noOfRooms} ROOM OPTIONS</span>
                <BiSolidChevronsDown size={25} />
            </button>
        </div>
        <div className="border border-border shadow-sm shadow-skyBlue cursor-pointer rounded-xl p-5 sticky">
            <p className="font-bold text-blue-800 text-[12px]">ICICI EMI Code applied</p>
            <div className="flex items-center justify-between gap-10">
                <div className="flex items-center gap-2 text-[12px]">
                    <p className="font-semibold">You saved ₹434</p>
                </div>

                <div className="text-end">
                    <p className="text-sm text-gray-500 text-primary font-bold text-[12px]">
                        +2 more offers
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
}
