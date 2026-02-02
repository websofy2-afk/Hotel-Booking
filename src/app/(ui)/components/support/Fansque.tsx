"use client";
import { useHotel } from "@/context-api/CategoryContext";
import { FaChevronRight } from "react-icons/fa";
import { ThreeCircles } from "react-loader-spinner";

const Faq = () => {
    const { faq } = useHotel();

    return (
        <div className="mb-12" data-aos="fade-up">
            <h1 className=" text-midnight_text mb-6 text-center md:text-[40px]">
                Frequently{" "}
                <span className="text-skyBlue">Asked Questions</span>
            </h1>
            {
                faq.length === 0 ?
                    <div className="flex justify-center items-center h-72">
                        <ThreeCircles
                            visible={true}
                            height="100"
                            width="100"
                            color="#35B4F6"
                            ariaLabel="three-circles-loading"
                        />
                    </div>
                    :
                    <div className="space-y-6">
                        {[...faq]?.reverse().map((item, index) => (
                            <div
                                key={index}
                                className="group border border-midnight_text rounded-lg p-4 shadow-sm cursor-pointer bg-white transition-all"
                                data-aos="fade-up"
                            >
                                <div className="flex justify-between items-center">
                                    <h4 className="font-semibold text-lg">{item.question}</h4>
                                    <FaChevronRight className="text-midnight_text" />
                                </div>
                                <div
                                    className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 ease-in-out"
                                >
                                    <p className="text-lg text-gray text-justify mt-3 leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
            }


        </div>
    );
};

export default Faq;

