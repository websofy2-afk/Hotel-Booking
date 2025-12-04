import Image from 'next/image'

const HotelStory = () => {
  return (
     <section className="flex justify-center items-center py-20 bg-light">
            <div className="lg:max-w-screen-xl md:max-w-screen-md mx-auto container px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right">
                        <Image
                            src="/images/image-gallery/rooms/room-2.avif"
                            width={600}
                            height={500}
                            alt="Luxury Hotel"
                            className="rounded-2xl h-auto shadow-xl"
                        />
                    </div>
                    <div data-aos="fade-left">
                        <h1 className="text-[3em] font-semibold mb-4 text-midnight_text">
                            Our Story – The LuxeLeaf Experience
                        </h1>

                        <p className="text-gray mb-6 leading-relaxed">
                            LuxeLeaf was born with a passion for redefining hospitality. We
                            create elegant spaces infused with warmth and luxury—crafted for
                            travelers seeking memorable stays.
                        </p>
                        <p className="text-gray mb-6 leading-relaxed">
                            Every detail—from interior aesthetics to personalized guest
                            service—is designed to make your stay unforgettable.
                        </p>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default HotelStory