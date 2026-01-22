import { whychoose } from '@/utils/constant'

const WhyChoose = () => {
    return (
        <section className=" bg-white">
            <div className="max-w-screen-xl mx-auto container px-4">
                <h2
                    className="text-4xl font-bold mb-12 text-center text-midnight_text"
                    data-aos="fade-up"
                >
                    Why Choose LuxeLeaf?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {whychoose?.map((item, i) => (
                        <div
                            key={i}
                            className="p-6 border rounded-xl border-midnight_text shadow-md hover:shadow-xl transition bg-light"
                            data-aos="fade-up"
                            data-aos-delay={i * 150}
                        >
                            <div className="mb-4">{item.icon}</div>
                            <h4 className="font-semibold text-xl mb-2">{item.title}</h4>
                            <p className="text-gray">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyChoose