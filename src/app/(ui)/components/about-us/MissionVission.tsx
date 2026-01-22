import { missionVision } from '@/utils/constant'

const MissionVission = () => {
  return (
    <section className="py-20 bg-light">
                    <div className="max-w-screen-xl mx-auto container px-4">
                        <h2 className="text-4xl font-bold mb-12 text-center text-midnight_text" data-aos="fade-up">
                            Mission & Vision
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {
                                missionVision?.map((item, index) => (
                                    <div
                                        className="p-6 bg-white shadow-midnight_text rounded-xl shadow-lg"
                                        data-aos="fade-right"
                                        key={index}
                                    >
                                        <h3 className="text-midnight_text text-xl  font-semibold mb-4">{item.title}</h3>
                                        <p className="text-gray leading-relaxed">{item.desc}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
  )
}

export default MissionVission