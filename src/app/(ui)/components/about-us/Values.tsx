import { values } from '@/utils/constant'

const Values = () => {
  return (
     <section className="flex justify-center items-center">
                    <div className="lg:max-w-screen-xl md:max-w-screen-md mx-auto text-midnight_text container px-4">
                        <h2 className="text-4xl font-bold mb-12 text-center text-midnight_text">
                            Our Values
                        </h2>
    
                        <div className="grid items-center justify-center grid-cols-1 sm:grid-cols-4 gap-6">
                            {values?.map((v, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-center gap-4"
                                    data-aos="fade-up"
                                    data-aos-delay={i * 100}
                                >
                                    <div className="p-3 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg text-xl text-skyBlue">
                                        {v.icon}
                                    </div>
    
                                    <div className="flex flex-col items- justify-center">
                                        <h4 className="font-semibold text-lg">{v.title}</h4>
                                        <p className="text-gray text-sm">{v.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>            
                </section>
  )
}

export default Values