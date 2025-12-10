"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { hotelDetails } from "@/utils/constant";
import { GrLocationPin } from "react-icons/gr";
import { FaEnvelope, FaPhoneAlt, FaStar } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import Image from "next/image";
import Link from "next/link";

export default function HotelDetails() {
    const params = useSearchParams();
    const location = params.get("location");
    const hotel = params.get("hotel");
    const router = useRouter();
    const selectedHotel = hotel ? hotelDetails[hotel] : null;
    if (!selectedHotel) return <p>No hotel found!</p>;

    return (
        <div>
            {selectedHotel?.map((item, index) => (
                <div key={index} className="w-full min-h-screen bg-gray-100">
                    <div
                        className="w-full h-[350px] md:h-[480px] relative"
                        data-aos="fade-up"
                    >
                        <Image
                            src={item.thumbnailImag!}
                            alt={item.name}
                            width={500}
                            height={300}
                            className="w-full h-full"
                        />
                        <div className="absolute inset-0 flex items-end p-8">
                            <h1
                                className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg"
                                data-aos="fade-up"
                            >
                                {hotel}
                            </h1>
                        </div>
                    </div>

                    <div className="max-w-5xl mx-auto p-6 -mt-10 relative z-10">
                        <div
                            className="bg-white rounded-2xl shadow-lg p-8"
                            data-aos="fade-up"
                        >
                            <div data-aos="fade-right">
                                <p className="text-xl text-midnight_text flex items-center gap-2 font-semibold text-gray-700">
                                    <GrLocationPin color="#1877F2" />
                                    {location}
                                </p>

                                <p
                                    className="mt-4 text-gray leading-relaxed"
                                    data-aos="fade-up"
                                >
                                    {item.description}
                                </p>
                            </div>
                            <div
                                className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
                                data-aos="fade-up"
                            >
                                <div className="space-y-2">
                                    <p className="text-gray flex items-center gap-2">
                                        <FaPhoneAlt className="text-red-600" />
                                        <Link href={`tel:+91${item.contact}`}>{item.contact}</Link>
                                    </p>
                                    <p className="text-gray flex items-center gap-2">
                                        <FaEnvelope className="text-primary" />{" "}
                                        <Link href={`mailto:${item.email}`}>{item.email}</Link>
                                    </p>
                                </div>
                                <div
                                    className="flex items-center gap-2"
                                    data-aos="zoom-in"
                                >
                                    <p className="text-lg flex items-center gap-2 font-semibold text-yellow-600">
                                        <FaStar />
                                        {item.rating}
                                    </p>
                                    <span className="text-gray">/ 5 Rating</span>
                                </div>
                            </div>
                            <div className="mt-8" data-aos="fade-up">
                                <h2 className="text-2xl font-bold mb-4">
                                    Amenities
                                </h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {item.amenities.map(
                                        (amenity: string, i: number) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg shadow"
                                                data-aos="zoom-in"
                                            >
                                                <TiTick
                                                    size={25}
                                                    className="text-green-600"
                                                />
                                                <p>{amenity}</p>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                        <button
                            className="mt-8 w-full font-semibold transition text-xl bg-primary py-3 px-8 text-white rounded-lg me-3 mb-2 border border-primary hover:bg-blue-700
                            "
                            data-aos="fade-up"

                            onClick={() =>
                                router.push(
                                    `/hotel-list/${item.location.toLowerCase()}/${item.name.replace(/\s+/g, "-").toLowerCase()}/${String(item.id)}`
                                )
                            }
                        >
                            Book Your Room Here
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
