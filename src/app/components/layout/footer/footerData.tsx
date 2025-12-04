import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa";

export const footerData = {
    socialMedia: [
        {
            socialMediaName: "Facebook",
            icon: <FaFacebookF size={18} className="text-[#1877F2] hover:text-[#0E5A8A]" />,
            url: "#"

        },
        {
            socialMediaName: "Instagram",
            icon: <FaInstagram size={18} className="text-[#E4405F] hover:text-[#C13584]" />,
            url: "#"
        },
        {
            socialMediaName: "LinkedIn",
            icon: <FaLinkedin size={18} className="text-[#0A66C2] hover:text-[#004182]" />,
            url: "#"
        },
        {
            socialMediaName: "Twitter",
            icon: <FaTwitter size={18} className="text-[#000000] hover:text-[#1DA1F2]" />,
            url: "#"
        },
        {
            socialMediaName: "Youtube",
            icon: <FaYoutube size={18} className="text-[#FF0000] hover:text-[#CC0000]" />,
            url: "#"
        }
    ],
    quickLinks: [
        {
            title: "Home",
            url: "#"

        },
        {
            title: "About Us",
            url: "#"

        },
        {
            title: "Hotels",
            url: "#"

        },
        {
            title: "Aminities",
            url: "#"

        },
        {
            title: "Gallery",
            url: "#"

        },

        {
            title: "Contact",
            url: "#"
        },

    ],
    services: [
        {
            title: "Luxury Rooms",
            url: "#"

        },
        {
            title: "Rooftop Resturant",
            url: "#"

        },
        {
            title: "Free WiFi",
            url: "#"

        },
        {
            title: "24/7 Room Service",
            url: "#"

        },
        {
            title: "Free Parking",
            url: "#"
        },
        {
            title: "Gym & Fitness Center",
            url: "#"
        },

    ],
    contactDetails: [
        {
            icon: <FaMapMarkerAlt className="text-skyBlue mt-1" size={25} />,
            title: "Websofy Software Pvt. Ltd., Indira Nagar, Lucknow, Uttar Pradesh",
            url: `https://www.google.com/maps?q=${encodeURIComponent("Websofy Software Pvt. Ltd., Indira Nagar, Lucknow, Uttar Pradesh")}`
        },
        {
            icon: <FaPhoneAlt className="text-skyBlue" />,
            title: "+91-7030513954",
            url: "tel:+917030513954"
        },
        {
            icon: <FaEnvelope className="text-skyBlue" />,
            title: "info@gmail.com",
            url: "mailto:info@gmail.com"
        },
    ]
}