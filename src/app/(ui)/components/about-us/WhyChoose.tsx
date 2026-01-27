import { whychoose } from '@/utils/constant'
import { reasons } from '@/utils/whyChooseUs'

const WhyChoose = () => {
    return (
        <section className="bg-white">
            <div className="max-w-screen-xl mx-auto container px-4">
                <h2
                    className=" uppercase mb-12 text-center"
                    data-aos="fade-up"
                >
                    Why Choose{" "}
                    <span className='text-skyBlue'>LuxeLeaf</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {reasons?.map((item, i) => (
                        <div
                            key={i}
                            className="p-6 border rounded-xl border-midnight_text shadow-md hover:shadow-xl transition bg-light"
                            data-aos="fade-up"
                            data-aos-delay={i * 150}
                        >
                            <div className='flex items-center gap-3 mb-2'>
                                <div className='text-skyBlue'>{item.icon}</div>
                                <h4 className="font-semibold text-xl">{item.title}</h4>
                            </div>
                            <p className="text-midnight_text text-opacity-80 text-md">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyChoose