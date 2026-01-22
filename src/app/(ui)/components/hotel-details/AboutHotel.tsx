import { TiLocationOutline } from "react-icons/ti"
import { CgCap } from "react-icons/cg";
import { MdOutlineCardTravel } from "react-icons/md";



const AboutHotel = ({ description, hotelName }: { description: string, hotelName: string }) => {
    return (
        <section id='amenities' className="px-12 pt-0 pb-6 bg-light ">


            <div className="bg-white rounded-lg">
                <div className="px-6 py-4 border-b border-border">
                    <h2 className="text-xl">
                        About the {hotelName}
                    </h2>
                </div>
                {/* Popular Amenities */}
                <div className="px-6 py-5">
                    <p className="inline-block text-gray font- px-3 py-1 rounded">
                        {description}
                    </p>


                    <div className="grid sm:grid-cols-3 mt-2 grid-cols-1 gap-3">
                        <div className="flex items-center p-3 justify-center gap-2 h-16 border border-border rounded-lg shadow-lg shadow-skyBlue/20">
                            <div className="w-20 h-10 bg-gray/20 rounded-md flex items-center justify-center">
                                <TiLocationOutline size={20} className="text-gray" />
                            </div>
                            <p className="text-[13px]">Centrally located at Arakashan Road, near Shiela Cinema and 1 km from New Delhi Railway Station</p>
                        </div>
                        <div className="flex items-center p-3 justify-center gap-2 h-16 border border-border rounded-lg shadow-lg shadow-skyBlue/20">
                            <div className="w-20 h-10 bg-gray/20 rounded-md flex items-center justify-center">

                                <CgCap size={20} className="text-gray" />
                            </div>
                            <p className="text-[13px]">Experience the best of North Indian cuisines and beverages at an affordable price.</p>
                        </div>
                        <div className="flex items-center p-3 justify-center gap-2 h-16 border border-border rounded-lg shadow-lg shadow-skyBlue/20">
                            <div className="w-20 h-10 bg-gray/20 rounded-md flex items-center justify-center">

                                <MdOutlineCardTravel size={20} className="text-gray" />
                            </div>
                            <p className="text-[13px]">Travelers can explore tourist attractions like Jama Masjid and Red Fort nearby.</p>
                        </div>


                    </div>
                </div>


            </div>

        </section>
    )
}

export default AboutHotel