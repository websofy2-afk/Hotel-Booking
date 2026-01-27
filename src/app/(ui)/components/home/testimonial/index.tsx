import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="bg-light">
      <div className="container lg:max-w-screen-xl md:max-w-screen-md mx-auto flex px-4 flex-col-reverse md:flex-row items-center justify-between">
        <div className="flex items-center justify-between w-full">
          <div className="flex-1 lg:block hidden" data-aos="fade-right">
            <Image
              src="/images/testimonial/vector-smart.png"
              alt="testimonial"
              width={500}
              height={500}
              quality={100}
              className="w-84 h-auto"
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
            <p className="text-lg  text-midnight_text text-opacity-80 text-justify mb-6 md:mb-12 leading-relaxed">
              “Staying at LuxeLeaf was an unforgettable experience. From the 
              warm hospitality to the beautifully designed rooms, everything 
              felt premium and incredibly relaxing. The staff went above and 
              beyond to ensure our stay was perfect. Highly recommended!”
            </p>
            <p className="text-xl md:text-2xl font-semibold text-midnight_text">
              Sarah Williams
            </p>
            <p className="text-midnight_text text-opacity-80 text-lg md:text-xl">Travel Blogger & Guest</p>
          </div>
        </div>
      </div>
    </section>
  );
}

