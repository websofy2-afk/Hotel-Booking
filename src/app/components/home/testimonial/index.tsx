import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="px-4 md:px-0 bg-light dark:bg-darkmode">
      <div className="container lg:max-w-screen-xl md:max-w-screen-md px-8 mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="flex items-center justify-between w-full">
          <div className="flex-1 lg:block hidden" data-aos="fade-right">
            <Image
              src="/images/testimonial/vector-smart.png"
              alt="testimonial"
              width={451}
              height={470}
              quality={100}
              className="w-auto h-auto"
            />
          </div>
          <div className="flex-1" data-aos="fade-left">
            <Image
              src="/images/testimonial/quote.svg"
              alt="quote"
              className="mb-4 md:mb-6"
              height={135}
              width={135}   
            />
            <p className="text-lg md:text-2xl text-gray mb-6 md:mb-12 leading-relaxed">
              “Staying at LuxeLeaf was an unforgettable experience. From the 
              warm hospitality to the beautifully designed rooms, everything 
              felt premium and incredibly relaxing. The staff went above and 
              beyond to ensure our stay was perfect. Highly recommended!”
            </p>
            <p className="text-xl md:text-2xl font-semibold text-midnight_text dark:text-white">
              Sarah Williams
            </p>
            <p className="text-gray text-lg md:text-xl">Travel Blogger & Guest</p>
          </div>
        </div>
      </div>
    </section>
  );
}

