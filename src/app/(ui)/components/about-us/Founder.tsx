import Image from 'next/image'


const Founder = () => {
    return (
        <section className="py-20 bg-light">
            <div className="max-w-screen-lg mx-auto container px-4 text-center">
                <h2 className="uppercase font-bold mb-12 text-center text-midnight_text" data-aos="fade-up">
                    Message From{" "}<span className='text-skyBlue'>Our Founder</span> 
                </h2>
                <div
                    className="p-8 bg-white rounded-xl shadow-lg"
                    data-aos="zoom-in"
                >
                    <Image
                        src="/images/founder/founder-profile1.png"
                        width={125}
                        height={125}
                        alt="Founder"
                        className="rounded-full mx-auto mb-6 shadow-lg"
                    />
                    <h4 className="text-xl font-semibold sm:text-center text-justify text-midnight_text mb-4">
                        “At LuxeLeaf, we believe that every guest deserves to feel valued,
                        cared for, and at home—even while traveling.”
                    </h4>
                    <p className="font-semibold text-midnight_text text-opacity-80 text-md">— Alex Morison</p>
                    <p className="text-gray text-sm">Founder, LuxeLeaf Hotels</p>
                </div>
            </div>
        </section>
    )
}

export default Founder