import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { hotelDetails, hotelList } from '@/utils/constant';
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useRouter, useSearchParams } from 'next/navigation';
import { MdOutlineStarRate } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

const RelatedHotels = () => {
    const [openAmenitiesIndex, setOpenAmenitiesIndex] = useState<number | null>(null);
    const params = useSearchParams();
    const router = useRouter();
    const location = params.get("location");
    const hotel = params.get("hotel");

    const relatedHotels = hotelList?.find(
        item => item.location === location
    )?.hotels?.filter(item => item !== hotel)

    const hotelData = relatedHotels?.map(item => hotelDetails[item])
    const arr = hotelData?.flat() ?? [];

    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setOpenAmenitiesIndex(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const settings = {
        dots: false,
        infinite: arr.length > 1,
        speed: 500,
        slidesToShow: Math.min(arr.length, 3),
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="flex justify-center items-center py-20 bg-light">
            <div className="lg:max-w-screen-xl md:max-w-screen-md mx-auto container px-4">
                <h1>
                    Related Hotels at {location}
                </h1>
                <div className="px-4 py-8">
                    <Slider {...settings}>
                        {hotelData?.flat().map((item, index) => (
                            <div key={index} className="p-4">
                                <div
                                    className={`bg-white ${arr.length === 1 ? "w-96" : ""
                                        } rounded-lg shadow-lg overflow-hidden`}
                                >
                                    <div className="relative w-full h-48">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-4 space-y-3">
                                        <h3 className="text-lg font-semibold text-midnight_text">
                                            {item.name}
                                        </h3>
                                        <p className="text-gray-600">{item.description}</p>
                                        <p className="text-sm flex items-center gap-2">
                                            <FaPhoneAlt className="text-skyBlue" />
                                            <span className="font-semibold text-midnight_text">Contact:</span >

                                            <Link href={`tel:+91${item.contact}`} className="text-gray">
                                                {item.contact}
                                            </Link>
                                        </p>

                                        <p className="text-sm flex items-center gap-2">
                                            <FaEnvelope className="text-skyBlue" />
                                            <span className="font-semibold text-midnight_text">Email:</span >

                                            <Link href={`mailto:+91${item.email}`} className="text-gray">
                                                {item.email}
                                            </Link>
                                        </p>
                                        <p className="text-sm flex items-center gap-2">
                                            <MdOutlineStarRate className="text-skyBlue" />
                                            <span className="font-semibold text-midnight_text">Rating:</span >

                                            <span className="text-gray">⭐ {item.rating ?? "No rating"}</span>
                                        </p>
                                        <div className="flex items-center justify-evenly gap-2 mt-4 relative overflow-visible">
                                            {item.amenities?.slice(0, 2).map((amenity, index) => (
                                                <span key={index} className="text-xs text-midnight_text">
                                                    {amenity}
                                                </span>
                                            ))}
                                            {item.amenities && item.amenities.length > 2 && (
                                                <div className="relative inline-block overflow-visible" ref={popupRef}>
                                                    <span
                                                        className="text-xs text-primary cursor-pointer"
                                                        onClick={() =>
                                                            setOpenAmenitiesIndex(openAmenitiesIndex === index ? null : index)
                                                        }
                                                    >
                                                        + more
                                                    </span>
                                                    {openAmenitiesIndex === index && (
                                                        <div className="absolute -translate-x-40 -translate-y-40  top-0 left-0 z-50 bg-herobg dark:bg-gray-900  shadow-xl rounded-md p-3 w-32">
                                                            {item.amenities.map((item, i) => (
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
                                        <button onClick={()=>router.push("#")} className="w-full mt-2 bg-primary text-white py-2 rounded-md hover:bg-blue-700 transition">
                                            Book Your Room
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default RelatedHotels