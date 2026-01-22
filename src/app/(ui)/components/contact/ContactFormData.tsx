import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";


export const contactFormData = {
    contactInfo: [
        {
            icon: <FaPhoneAlt className="text-skyBlue" />,
            title: "+91-987654322",
            url: "tel:+9198765432"
        },
        {
            icon: <FaEnvelope className="text-skyBlue" />,
            title: "support-lucknow@luxeleaf.com",
            url: "mailto:support-lucknow@luxeleaf.com"
        },
        {
            icon: <FaMapMarkerAlt className="text-skyBlue mt-1" />,
            title: "Lucknow",
            url: `https://www.google.com/maps?q=${encodeURIComponent("Websofy Software Pvt. Ltd., Indira Nagar, Lucknow, Uttar Pradesh")}`
        },

        {
            icon: <FaPhoneAlt className="text-skyBlue" />,
            title: "+91-987658329",
            url: "tel:+987658329"
        },
        {
            icon: <FaEnvelope className="text-skyBlue" />,
            title: "support-jaipur@luxeleaf.com",
            url: "mailto:support-jaipur@luxeleaf.com"
        },
        {
            icon: <FaMapMarkerAlt className="text-skyBlue mt-1" />,
            title: "Jaipur",
            url: `https://www.google.com/maps?q=${encodeURIComponent("Websofy Software Pvt. Ltd., Indira Nagar, Lucknow, Uttar Pradesh")}`
        },
        {
            icon: <FaPhoneAlt className="text-skyBlue" />,
            title: "+91-987654008",
            url: "tel:+9198765432"
        },
        {
            icon: <FaEnvelope className="text-skyBlue" />,
            title: "support-mumbai@luxeleaf.com",
            url: "mailto:support-mumbai@luxeleaf.com"
        },
        {
            icon: <FaMapMarkerAlt className="text-skyBlue mt-1" />,
            title: "Mumbai",
            url: `https://www.google.com/maps?q=${encodeURIComponent("Websofy Software Pvt. Ltd., Indira Nagar, Lucknow, Uttar Pradesh")}`
        },
    ]
}