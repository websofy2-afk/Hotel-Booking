"use client";
import ContactForm from "./form";
import ContactInfo from "./contact-info";
import Location from "./office-location";

export default function Contact() {
    return (
        <section className="flex justify-center items-center py-20 bg-light">
            <div className="lg:max-w-screen-xl md:max-w-screen-md mx-auto container px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <ContactForm />
                    <ContactInfo />
                </div>
                <div className="mt-12" data-aos="fade-left"><Location /></div>
            </div>
        </section>
    );
}
