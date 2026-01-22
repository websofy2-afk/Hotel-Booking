import { TiTick } from "react-icons/ti";


const PropertyPolicies = () => {

    return (
        <section id='propertyPolicies' className="px-12 pt-0 pb-6 bg-light ">
            <div className="bg-white rounded-lg">
                <div className="px-6 flex flex-col sm:flex-row items-center py-4 gap-5 border-b border-border">
                    <h2 className="text-xl font-bold">
                        Hotel Property Policies
                    </h2>
                    <div className="sm:h-10 h-20 bg-herobg/80 text-midnight_text flex items-center flex-col sm:flex-row justify-center sm:gap-5 sm:w-96 w-60 rounded-full">
                        <span>Check-in Time: <strong>2 PM</strong></span>
                        <span>Check-out Time: <strong>11 AM</strong></span>
                    </div>
                </div>

                <div className="p-6">
                    {
                        hotelPolicies?.map((item, index) => (
                            <div key={index} className="flex items-center gap-3 mt-2">
                                <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                    <TiTick size={18} className="text-white" />
                                </span>
                                <p className="text-midnight_text leading-relaxed text-justify text-sm md:text-base">
                                    {item}
                                </p>
                            </div>
                        ))
                    }

                </div>
            </div>

        </section>
    )
}

export default PropertyPolicies;


const hotelPolicies = [
    "Primary guest must be at least 18 years of age.",
    "Passport, Aadhaar, and Driving License are accepted as ID proofs.",
    "Pets are not allowed.",
    "Outside food is not allowed.",
    "Mandatory Christmas Eve (December 24) gala dinner: INR 1499 per adult and INR 1499 per child (6–12 years).",
    "Mandatory New Year's Eve (December 31) gala dinner: INR 1499 per adult and INR 1499 per child (up to 6 years).",
    "Extra-person charges may apply and vary depending on property policy.",
    "Government-issued photo identification and a credit/debit card or cash deposit may be required at check-in for incidental charges.",
    "Special requests are subject to availability at check-in and may incur additional charges.",
    "This property accepts credit cards and cash.",
    "Outdoor spaces such as balconies, patios, and terraces may not be suitable for children.",
    "Cultural norms and guest policies may differ by country and property.",
    "There are no restrictions on alcohol consumption.",
    "Smoking within the premises is allowed.",
    "This property is accessible to wheelchair users; guests are requested to carry their own wheelchair."
];
