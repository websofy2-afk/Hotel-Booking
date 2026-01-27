import { counter } from '@/utils/constant'

const Counter = () => {
    return (
        <section className="bg-light">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-3 text-center gap-10">
                {counter?.map((c, i) => (
                    <div key={i} data-aos="fade-up" data-aos-delay={i * 120}>
                        <p className="text-5xl font-bold text-midnight_text counter">
                            {c.number}+
                        </p>
                        <p className="text-midnight_text text-opacity-80 text-md mt-2">{c.label}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Counter