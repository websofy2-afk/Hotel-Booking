
"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import ImageModal from "./ImageModal";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";





export default function HotelGallery({images} : {images? : string[]}) {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollByImage = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const container = sliderRef.current;
    const imageWidth = container.firstElementChild?.clientWidth || 0;

    container.scrollBy({
      left: direction === "left" ? -imageWidth : imageWidth,
      behavior: "smooth",
    });
  };


  return (
    <>
     <div className="relative overflow-hidden rounded-xl">
        {/* Left Arrow */}
        <button
          onClick={() => scrollByImage("left")}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full"
        >
          <BiChevronLeft size={22} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scrollByImage("right")}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full"
        >
          <BiChevronRight size={22} />
        </button>

        {/* Image Strip (NO manual scroll) */}
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-hidden"
        >
           {images && images.map((img, i) => (
            <div
              key={i}
              className="min-w-[80%] sm:min-w-[100%] cursor-pointer"
              onClick={() => setActiveImage(img)}
            >
              <Image
                src={img}
                alt="Hotel"
                width={800}
                height={500}
                className="rounded-xl h-[320px] sm:h-[420px]"
              />
            </div>
          ))}
        </div>
      </div>

      {activeImage && (
        <ImageModal image={activeImage} onClose={() => setActiveImage(null)} />
      )}
    </>
  );
}
