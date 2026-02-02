import { FaHandPointRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const PropertyCard = ({ location }: { location: any }) => {

  const { hotelLocation, focusOn, whyChooseLocation, image, locationFeatures } = location
  // const noOfHotels = location ? hotelData[hotelLocation].hotels.length : null;
  const noOfHotels = 2;
  const featureImage = image || "/images/properties/prop-1.jpg";

  return (
    <>
      <div
        className="bg-white shadow-property rounded-lg"
        data-aos="fade-up"
      >
        <Link
          href={{
            pathname: "/hotel-list",
            query: { location: hotelLocation }
          }}

          className="group">
          <div className={`relative`}>
            {
              featureImage && <div
                className={`imageContainer rounded-t-lg h-[350px] w-full`}
              >
                <Image
                  src={image}
                  alt={`Feature image of ${hotelLocation}`}
                  width={400}
                  height={250}
                  className="w-full h-full group-hover:scale-125 duration-500"
                />
              </div>
            }
            <p className="absolute top-2 left-2 py-1 px-4 bg-white rounded-md text-primary">
              {noOfHotels! - 1}+ Hotels
            </p>
          </div>
          <div
            className={`p-5 sm:p-8 dark:text-white`}
          >
            <div className="flex flex-col gap-1 border-b border-border mb-6">

              <div className="pb-4 space-y-3">
                <div className="font-bold text-2xl text-midnight_text dark:text-white group-hover:text-primary">
                  {hotelLocation}
                </div>
                <p className="text-sm bg-[#DAE7FF] text-midnight_text text-opahotelLocation-80 py-1 px-2 rounded-md ">
                  {focusOn}
                </p>
              </div>
            </div>

            <div className="h-48">
              {
                locationFeatures?.map((item: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 mt-2">
                    <FaHandPointRight size={15} className="text-skyBlue" />
                    <p className="text-midnight_text text-opahotelLocation-80 text-[15px]">{item}</p>
                  </div>
                ))
              }
            </div>
            <div>

              <h3 className="text-midnight_text font-semibold text-justify text-opahotelLocation-80 text-[15px] h-16 mb-2 before:content-['“'] after:content-['”']">{whyChooseLocation}</h3>
            </div>
            <button
              className="w-full mt-2 bg-primary text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Book Your Room Now..!
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default PropertyCard;



