import Image from 'next/image'


const Founder = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-screen-lg mx-auto container px-4 text-center">
                <h2 className="text-4xl font-bold mb-12 text-center text-midnight_text" data-aos="fade-up">
                    Message From Our Founder
                </h2>
                <div
                    className="p-8 bg-light rounded-xl shadow-lg"
                    data-aos="zoom-in"
                >
                    <Image
                        src="/images/founder/founder-profile1.png"
                        width={125}
                        height={125}
                        alt="Founder"
                        className="rounded-full mx-auto mb-6 shadow-lg"
                    />
                    <p className="text-xl italic text-midnight_text mb-4">
                        “At LuxeLeaf, we believe that every guest deserves to feel valued,
                        cared for, and at home—even while traveling.”
                    </p>
                    <p className="font-semibold text-gray">— Alex Morison</p>
                    <p className="text-gray text-sm">Founder, LuxeLeaf Hotels</p>
                </div>
            </div>
        </section>
    )
}

export default Founder