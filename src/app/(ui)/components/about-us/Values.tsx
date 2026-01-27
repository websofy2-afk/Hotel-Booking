import { values } from '@/utils/constant'

const Values = () => {
    return (
        <section>
            <div className="lg:max-w-screen-xl md:max-w-screen-md mx-auto px-4 text-midnight_text container">
                <h2 className="uppercase mb-12 text-center text-midnight_text">
                    Our{" "}
                    <span className='text-skyBlue'>Values</span>
                </h2>
                <div className="grid items-center justify-center grid-cols-1 sm:grid-cols-4 gap-6">
                    {values?.map((v, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-4"
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                        >
                            <div className="p-3 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg text-xl text-skyBlue">
                                {v.icon}
                            </div>

                            <div className="flex flex-col items- justify-center">
                                <h4 className="font-semibold text-xl">{v.title}</h4>
                                <p className="text-midnight_text text-opacity-80 text-md">{v.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Values