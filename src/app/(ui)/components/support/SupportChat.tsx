import Link from 'next/link'
import { FaEnvelope, FaHeadset, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

const SupportChat = () => {
    const whatsappNumber = "919876543210"
    const whatsAppApi = `https://wa.me/${whatsappNumber}?text=Hi%20Support%2C%20I%20need%20help`

    return (
        <div className="bg-light border rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6" data-aos="fade-right">
            <div className="flex items-center gap-4">
                <FaHeadset className="text-blue-500 text-4xl" />
                <div>
                    <h3 className="text-midnight_text font-semibold">Customer{" "}
                        <span className='text-skyBlue'>Support</span></h3>
                    <p className="text-lg text-midnight_text text-opacity-80 text-justify">
                        Need help? Contact us directly on WhatsApp.
                    </p>
                    <div className='flex items-center mt-2 gap-6'>
                        <Link href="tel:+9198765432" className="text-gray flex items-center gap-2 font-medium"><FaPhoneAlt className="text-red-500" /> <span>+91-98765432</span> </Link>
                        <Link href="mailto:info@luxeleaf.com" className="font-medium text-gray flex items-center gap-2"><FaEnvelope className="text-skyBlue" /> <span>info@luxeleaf.com</span> </Link>
                    </div>
                </div>
            </div>
            <Link
                href={whatsAppApi}
                target="_blank"
                className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition"
            >
                <FaWhatsapp className="text-2xl" />
                WhatsApp
            </Link>
        </div>
    )
}

export default SupportChat