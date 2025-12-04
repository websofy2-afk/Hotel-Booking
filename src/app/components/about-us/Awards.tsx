import { awards } from '@/utils/constant';
import Image from 'next/image';
import { useState } from 'react'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const Awards = () => {
    const [awardIndex, setAwardIndex] = useState(0);

    const nextAward = () => setAwardIndex((awardIndex + 1) % awards.length);
    const prevAward = () =>
        setAwardIndex((awardIndex - 1 + awards.length) % awards.length);
    return (
        <section className="py-20 bg-white">
            <div className="max-w-screen-md mx-auto container px-4 text-center">
                <h2 className="text-4xl font-bold mb-12 text-center text-midnight_text" data-aos="fade-up">
                    Awards & Recognition
                </h2>
                <div className="relative flex items-center justify-center">
                    <button
                        onClick={prevAward}
                        className="absolute left-0 flex items-center justify-center w-12 h-12 bg-light rounded-full shadow hover:bg-light/90"
                    >
                        <MdArrowBackIos size={20} />
                    </button>
                    <div
                        className="p-6 bg-light w-96 rounded-xl shadow-lg"
                        data-aos="zoom-in"
                    >
                        <Image
                            src={awards[awardIndex].img}
                            width={3000}
                            height={3000}
                            alt="Award"
                            className="mx-auto mb-4 rounded-lg"
                        />
                        <p className="font-semibold">{awards[awardIndex].title}</p>
                    </div>
                    <button
                        onClick={nextAward}
                        className="absolute right-0 flex items-center justify-center w-12 h-12 bg-light rounded-full shadow hover:bg-light/90"
                    >
                        <MdArrowForwardIos size={20} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Awards