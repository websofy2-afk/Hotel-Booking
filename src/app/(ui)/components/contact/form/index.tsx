"use client";
import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { RiLoader4Fill } from "react-icons/ri";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNo: "",
    email: "",
    message: "",
    date: "",
    time: ""
  });

  const [loader, setLoader] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const reset = () => {
    formData.name = "";
    formData.contactNo = "";
    formData.email = "";
    formData.message = "";
  };


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoader(true);

    try {
      const data = await fetch("/",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            contactNo: formData.contactNo,
            email: formData.email,
            message: formData.message,
          })
        }
      )

      const res = await data.json();

      if (res.success) {

      } else {

      }
    } catch (err) {
      const error = err as Error;
      console.log("Internal server error -", error.message);
    } finally {
      reset();
      setLoader(false);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-8" data-aos="fade-right">
      <h1 className="md:text-[40px] mb-6 uppercase">Send Us{" "} 
        <span className="text-skyBlue">a Message</span></h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border border-midnight_text rounded-lg p-3"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Contact Number</label>
          <input
            type="tel"
            name="contactNo"
            className="w-full border border-midnight_text rounded-lg p-3"
            placeholder="Enter your contact number"
            value={formData.contactNo}
            onChange={(e) => {
              const sanitized = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
              handleChange({
                target: {
                  name: "contactNo",
                  value: sanitized,
                },
              });
            }}
            required
          />

        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border border-midnight_text rounded-lg p-3"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            className="w-full border resize-none border-midnight_text rounded-lg p-3 h-32"
            placeholder="Write your message..."
            value={formData.message}
            name="message"
            onChange={handleChange}
            required
          />
        </div>
        <button className="bg-midnight_text text-white px-6 py-3 rounded-lg w-full hover:bg-opacity-85 transition">
          {
            loader ?

              <div className="flex items-center justify-center gap-2">
                <span>Submitting Mesasge....</span>
                <RiLoader4Fill size={20} className="animate-spin" />
              </div>
              :
              <div className="flex items-center justify-center gap-2">
                <span>Send Message</span>
                <IoIosSend size={20} />
              </div>
          }
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
