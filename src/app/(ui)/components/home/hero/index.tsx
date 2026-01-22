"use client";
import SearchLocation from "../search-location";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter(); 

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center">
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/video/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 container mx-auto px-6 top-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div data-aos="fade-right" className="text-white space-y-6">
          <h1 className="text-white font-bold leading-tight">
            LuxeLeaf A Luxury Hotel
          </h1>
          <p className="text-lg  opacity-90">
            Experience luxurious comfort with world-class amenities, peaceful surroundings,
            and an unforgettable stay tailored just for you.
          </p>
          <button
            onClick={()=>router.push("/category")}
            className="inline-block font-semibold py-2 md:py-4 text-lg md:text-xl px-4 md:px-8 bg-skyBlue/80 border border-transparent text-white rounded-lg hover:bg-skyBlue transition duration-300 text-nowrap">
            Explore Hotels
          </button>
        </div>
        <SearchLocation />
      </div>
    </section>
  );
};

export default Hero;
