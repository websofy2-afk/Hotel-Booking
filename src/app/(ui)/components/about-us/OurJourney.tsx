import { journey } from '@/utils/constant'

const OurJourney = () => {
  return (
     <section>
                    <div className="max-w-screen-xl mx-auto container px-4">
                       <h2 className="mb-12 uppercase text-center text-midnight_text" data-aos="fade-up">
                            Our{" "}
                            <span className='text-skyBlue'>Journey</span> 
                        </h2>
    
                        <div className="border-l-4 border-primary space-y-10">
                            {journey?.map((t, i) => (
                                <div key={i} className="relative pl-6" data-aos="fade-up">
                                    <span className="absolute -left-[14] top-1 w-6 h-6 bg-skyBlue rounded-full"></span>
                                    <h4 className="font-bold text-lg text-midnight_text">{t.year}</h4>
                                    <p className="text-midnight_text text-opacity-80 text-md">{t.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
  )
}

export default OurJourney