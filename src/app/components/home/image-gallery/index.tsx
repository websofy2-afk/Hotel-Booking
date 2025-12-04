"use client";

import { useState } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import { images } from "@/utils/constant";

export default function ImageGallery() {
    const [selectedImg, setSelectedImg] = useState<string | null>(null);
    const galleryImages = images.slice(0, 4);

    return (
        <section className="flex justify-center items-center">
            <div className="lg:max-w-screen-xl md:max-w-screen-md mx-auto container px-4">
                <h1 className="text-4xl font-bold mb-12 text-midnight_text dark:text-white" data-aos="fade-up">Photo Gallery</h1>
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    data-aos="fade-up"
                >
                    {
                        galleryImages.map((img, i) => (
                            <div
                                key={i}
                                className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
                                onClick={() => setSelectedImg(img)}
                            >
                                <Image
                                    src={img}
                                    alt={`Hotel Room ${i + 1}`}
                                    width={500}
                                    height={350}
                                    className="rounded-xl group-hover:scale-110 transition duration-300 object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>
                            </div>
                        ))

                    }
                </div>
                {selectedImg && (
                    <div
                        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
                        onClick={() => setSelectedImg(null)}
                    >
                        <Image
                            src={selectedImg}
                            alt="Selected Room Image"
                            width={1200}
                            height={800}
                            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl object-contain"
                        />
                    </div>
                )}
            </div>
        </section>
    );
}

