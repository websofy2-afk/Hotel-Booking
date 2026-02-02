"use client";
import { Photos } from "../../gallery/photos/Photos";

export const ImageGallery = () => {
    
    return (
        <section className="flex justify-center items-center">
            <div className="lg:max-w-screen-xl md:max-w-screen-md mx-auto px-4 container">
                <h2 className="mb-12 text-center text-midnight_text uppercase" data-aos="fade-up">
                    Photo{" "}
                    <span className="text-skyBlue">Gallery</span>
                </h2>
                <Photos/>
            </div>
        </section>
    );
}

