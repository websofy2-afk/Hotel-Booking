"use client";
import { useState } from "react";
import { SearchLocation } from "../search-location";

export default function RooftopShowcase() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <section
            className="relative flex mt-16 bg-cover bg-center shadow-xl w-full h-[500px] justify-center bg-light items-center"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1500&q=80')",
            }}
        >
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <div className="text-center text-white px-6">
                    <h1 data-aos="fade-down"
                        className="mb-4 text-5xl text-white sm:text-5xl md:text-6xl font-bold leading-tight"
                    >
                        LuxeLeaf Hotel & Rooftop Dining
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="text-lg md:text-xl max-w-2xl mx-auto opacity-90"
                    >
                        Enjoy panoramic city views, signature gourmet dishes, and a refined atmosphere crafted for memorable moments.
                    </p>

                    <button
                        data-aos="zoom-in"
                        data-aos-delay="400"
                        className="mt-6 bg-skyBlue px-8 py-3 rounded-full text-lg font-semibold hover:bg-skyBlue/80 shadow-lg"
                        onClick={() => setOpenModal(true)}
                    >
                        Book Your LuxeLeaf
                    </button>
                </div>
            </div>
            {openModal && (
                <div
                    onClick={() => setOpenModal(false)}
                    className="inset-0 w-full h-[500px] backdrop-blur-md flex items-center justify-center z-50"
                >
                    <div
                        className="p-4 shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* <HotelLocationForm closeModal={() => setOpenModal(false)} /> */}
                        <SearchLocation closeModal={() => setOpenModal(false)} />
                    </div>
                </div>
            )}
        </section>
    );
}
