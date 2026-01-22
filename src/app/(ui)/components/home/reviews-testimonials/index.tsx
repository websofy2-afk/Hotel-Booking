"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "aos/dist/aos.css";

export default function Testimonials() {
  const reviews = [
    {
      name: "Sophia Miller",
      text: "LuxeLeaf made my vacation unforgettable. The rooms were spotless, the service was exceptional, and the rooftop dining was magical.",
      rating: 5,
      image: "/images/blog/silicaman.jpg",
    },
    {
      name: "James Carter",
      text: "Amazing hospitality! The staff truly cares about your comfort. Definitely coming back for another stay.",
      rating: 4,
      image: "/images/blog/silicaman.jpg",
    },
    {
      name: "Emily Johnson",
      text: "The ambiance, the views, the food — everything was perfect. Highly recommended!",
      rating: 5,
      image: "/images/blog/silicaman.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="flex justify-center bg-light items-center">
      <div className="lg:max-w-screen-xl md:max-w-screen-md mx-auto container px-4">

        <h2
          className="text-4xl mb-12 text-center text-midnight_text"
          data-aos="fade-up"
        >
          What Our{" "}
          <span className="text-skyBlue">Guests Say</span>
        </h2>

        <div
          className="bg-white/10 shadow-midnight_text rounded-xl shadow-lg p-8 md:p-12 flex items-center justify-center max-w-3xl mx-auto"
          data-aos="fade-up"
        >
          <button
            onClick={prev}
            className="p-3 rounded-full border hover:bg-skyBlue/30 transition"
          >
            <FaChevronLeft className="text-xl" />
          </button>

          <div className="flex flex-col items-center justify-center">

            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg mb-6">
              <Image
                src={reviews[index].image}
                alt={reviews[index].name}
                width={200}
                height={200}
                className="w-full h-full"
              />
            </div>

            <p className="text-xl font-semibold text-center text-midnight_text">
              {reviews[index].name}
            </p>
            <p className="text-midnight_text text-opacity-80 text-center mt-3 text-lg leading-relaxed max-w-xl">
              {reviews[index].text}
            </p>
            <p className="text-yellow-500 text-xl mt-3">
              {"★".repeat(reviews[index].rating)}
            </p>
          </div>

          <button
            onClick={next}
            className="p-3 rounded-full border hover:bg-skyBlue/30 transition"
          >
            <FaChevronRight className="text-xl" />
          </button>

        </div>
      </div>
    </section>
  );
}

