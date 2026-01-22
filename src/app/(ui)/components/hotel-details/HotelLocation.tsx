import { BiCurrentLocation } from "react-icons/bi";
import { GiNothingToSay } from "react-icons/gi";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlinePreview } from "react-icons/md";


const HotelLocation = ({ location, hotelName }: { location: string, hotelName: string }) => {

    const total = ratings.reduce((a, b) => a + b.count, 0);

    return (
        <section id='location' className="px-12 pt-0 pb-6 bg-light ">
            <div className="bg-white rounded-lg">
                <div className="px-6 py-4 border-b border-border">
                    <h2 className="text-xl font-bold">
                        Location of {hotelName}
                    </h2>
                    <div className='flex items-center gap-2 mt-2' >
                        <div className='flex items-center gap-2  border-r-[1px] h-5 border-gray'>
                            <FaMapLocationDot size={12} className='text-primary/80' />
                            <p className='mr-1 text-sm text-gray'>{location}</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <BiCurrentLocation size={12} className='text-amber-600' />
                            <p className='text-sm text-gray'>2.5 km drive to Indira Nagar Metro Station</p>
                        </div>
                    </div>
                </div>


                <div className="p-6">
                    <div className="">
                        <div className="bg-white rounded-xl border border-border  shadow-sm">
                            <div className="flex gap-3 p-4 items-center">
                                <span><GiNothingToSay size={18} className="text-green-500" /></span>
                                <h2 className="text-xl font-bold">
                                    What guests said
                                </h2>
                            </div>

                            <p className="px-4 pb-4 text-midnight_text leading-relaxed text-justify text-sm md:text-base">
                                Guests consistently praise the property's prime location in Lucknow, highlighting its easy access to nearby attractions, shopping areas, and transport links. Many appreciate the convenience of being near Charbagh railway station and Hussainganj metro station. The central positioning allows for a smooth exploration of the city, with guests noting it as a key reason for their choice to stay. Overall, the location greatly enhances the guests' experience.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="px-6 pb-10">
                    <div className="rounded-xl h-96 overflow-hidden shadow-xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.8574202278924!2d81.00377597409413!3d26.90801976029461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd55b9550647%3A0x5136d6cdaa695c2c!2sWebsofy%20Software%20Private%20Limited%20%7C%20Software%20Development%20%7C%20Website%20Development%20%7C%20Digital%20Marketing%20Company%20in%20Lucknow!5e0!3m2!1sen!2sin!4v1765007566134!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default HotelLocation;



const ratings = [
    { star: 5, count: 1082, color: "bg-emerald-500" },
    { star: 4, count: 691, color: "bg-green-500" },
    { star: 3, count: 286, color: "bg-yellow-500" },
    { star: 2, count: 166, color: "bg-orange-400" },
    { star: 1, count: 165, color: "bg-red-500" },
];



