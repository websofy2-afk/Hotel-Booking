"use client";
import React, { useState } from "react";
import Link from "next/link";
import { calculator } from "@/utils/constant";

export default function StayCalculator() {
  const [activeTab, setActiveTab] = useState("deluxe");
  const [price, setPrice] = useState(5000);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  };
  
  return (
    <section>
      <div
        className="container lg:max-w-screen-xl mx-auto flex flex-col lg:flex-row px-4 gap-16 justify-between items-center"
        data-aos="fade-left"
      >
        {/* Left Section */}
        <div className="max-w-xl" data-aos="fade-right">
          <h2 className=" mb-4 text-midnight_text uppercase">
            Save More{" "}
            <span className="text-skyBlue">with LuxeLeaf</span>
          </h2>
          <p className="text-lg text-midnight_text text-opacity-80 mb-12 text-justify">
            Experience luxury stays at the best prices. The longer you stay, the
            more you save—perfect for a relaxing vacation, romantic getaway, or
            family trip.
          </p>

          {/* DISCOUNT HIGHLIGHTS */}
          <div className="relative-container">
            <div className="main-div mb-16 pt-8">
              <div className="child-container flex w-full justify-between">
                {
                  calculator?.map((item, index) => (
                    <div key={index} className="money-dot" data-aos="fade-left" data-aos-delay="100">
                      <p className="text-3xl text-midnight_text dark:text-white">
                        {item.off}
                      </p>
                      <p className="text-midnight_text text-opacity-80">{item.night}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div data-aos="fade-up">
            <Link
              href="/hotel-location"
              className="text-xl hover:bg-primary hover:text-white py-3 px-8 text-primary border border-primary rounded-lg me-3 mb-2"
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-auto w-full" data-aos="fade-right">
          <div className="bg-primary rounded-t-lg p-16 w-full">
            <p className="text-4xl text-white mb-6 font-bold flex items-center justify-center">
              Stay Cost Estimator
            </p>

            {/* TABS */}
            <div className="flex justify-center">
              <div className="flex p-3 border-4 rounded-full bg-transparent border-cyan items-center justify-center">
                <button
                  className={`px-6 py-2 text-base ${activeTab === "deluxe"
                    ? "text-white bg-cyan rounded-full"
                    : "text-white"
                    }`}
                  onClick={() => handleTabChange("deluxe")}
                >
                  Deluxe
                </button>

                <button
                  className={`px-6 py-2 text-base ${activeTab === "suite"
                    ? "text-white bg-cyan rounded-full"
                    : "text-white"
                    }`}
                  onClick={() => handleTabChange("suite")}
                >
                  Suite
                </button>
              </div>
            </div>

            {/* CALCULATOR */}
            <div className="items-center justify-center mt-12">
              <p className="text-white flex items-center justify-center font-bold">
                ESTIMATED PRICE
              </p>
              <p className="my-6 text-white flex items-center justify-center font-bold text-[50px]">
                ₹{price}
              </p>

              <input
                type="range"
                min="3000"
                max="25000"
                value={price}
                onChange={handlePriceChange}
                className="w-full h-2 bg-blue-800 rounded-lg cursor-pointer"
              />
            </div>

            <div className="flex justify-between text-sm text-white mt-2 font-bold">
              <p>₹3,000</p>
              <p>₹25,000</p>
            </div>
          </div>

          {/* Bottom Contact Box */}
          <div className="p-4 bg-blue-700 text-white text-xl rounded-b-lg">
            <p className="text-center mb-1 opacity-70">Need Booking Help?</p>
            <Link href="tel:+919090909090" className="text-center font-bold block">
              <span className="opacity-70 font-normal">Call Us: </span>
              +91 90909 09090
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

