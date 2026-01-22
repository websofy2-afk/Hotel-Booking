"use client";
import { faqData } from "./faqData";
import { FaChevronRight } from "react-icons/fa";

const Faq = () => {
    return (
        <div className="mb-12" data-aos="fade-up">
            <h1 className=" text-midnight_text mb-6">
                Frequently Asked Questions
            </h1>
            <div className="space-y-6">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className="group border border-midnight_text rounded-lg p-4 shadow-sm cursor-pointer bg-white transition-all"
                        data-aos="fade-up"
                    >
                        <div className="flex justify-between items-center">
                            <h4 className="font-medium text-lg">{faq.question}</h4>
                            <FaChevronRight className="text-gray-500" />
                        </div>
                        <div
                            className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 ease-in-out"
                        >
                            <p className="text-gray mt-3 leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;

