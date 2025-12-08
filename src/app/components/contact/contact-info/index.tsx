import React from "react";
import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { contactFormData } from "../ContactFormData";

const ContactInfo = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-8" data-aos="fade-left">
      <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
      {
        contactFormData.contactInfo.map((item, index) => (
          <div key={index} className={`space-y-4 ${item.url.startsWith("https") ? "mb-6":"mb-0"}`}>
            <div className={`flex items-center gap-4 mt-2 ${item.url.startsWith("https") ? "border-b pb-4":"border-none"}`}>
              {item.icon}
              <Link href={item.url} className="text-gray hover:text-midnight_text">{item.title}</Link >
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default ContactInfo;
