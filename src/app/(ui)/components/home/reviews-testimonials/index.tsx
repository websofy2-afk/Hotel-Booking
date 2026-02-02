"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useHotel } from "@/context-api/CategoryContext";
import { ThreeCircles } from "react-loader-spinner";

export const TestimonialsReviews = () => {

  const [index, setIndex] = useState(0);
  const { testimonial } = useHotel();

  const next = () => setIndex((prev) => (prev + 1) % testimonial.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonial.length) % testimonial.length);
  return (
    <section className="flex justify-center bg-light items-center">
      <div className="lg:max-w-screen-xl md:max-w-screen-md mx-auto px-4 container">

        <h2
          className="uppercase mb-12 text-center text-midnight_text"
          data-aos="fade-up">
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

          {
            testimonial.length === 0 ? <div className="flex justify-center items-center w-full">
              <div className="flex justify-center items-center h-72">
                <ThreeCircles
                  visible={true}
                  height="100"
                  width="100"
                  color="#35B4F6"
                  ariaLabel="three-circles-loading"
                />
              </div>
            </div> :
              <div className="flex flex-col items-center justify-center">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg mb-6">
                  <Image
                    src={testimonial[index].image}
                    alt={`Image of ${testimonial[index].name}`}
                    width={200}
                    height={200}
                    className="w-full h-full"
                  />
                </div>

                <p className="text-xl font-semibold text-center text-midnight_text">
                  {testimonial[index].fullName}
                </p>
                <p className="text-midnight_text text-opacity-80 text-center mt-3 text-lg leading-relaxed max-w-xl">
                  {testimonial[index].review}
                </p>
                <p className="text-yellow-500 text-xl mt-3">
                  {"★".repeat(testimonial[index].rating)}
                </p>
              </div>
          }
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

