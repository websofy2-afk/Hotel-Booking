import Image from "next/image"
import Link from "next/link";
import "@/app/style/index.css"

export default function History() {
  return (
    <section className="history-bg">
      <div className="container lg:max-w-screen-xl md:max-w-screen-md mx-auto grid grid-cols-1 lg:grid-cols-12 px-4">
        <div className="col-span-1 lg:col-span-7 5xl:col-span-8 pr-4" data-aos="fade-right">
          <h2 className="text-midnight_text mb-8 uppercase">
            Inspired by Comfort{" "}
            <span className="text-skyBlue">Perfected for Your Stay</span>
          </h2>
          <p className="mb-4 text-lg text-midnight_text text-opacity-80 text-justify">
            LuxeLeaf is where elegance meets comfort. Designed for travelers who seek
            luxury, peace, and memorable experiences, our hotel blends modern
            architecture with warm hospitality. Whether you're here for a relaxing
            getaway, a family vacation, or a business trip, LuxeLeaf promises a stay
            that feels effortless and elevated.
          </p>
          <p className="mb-8 text-lg text-midnight_text text-opacity-80 text-justify">
            From premium rooms and world-class dining to spa wellness and breathtaking
            views, we ensure every moment is crafted with care. At LuxeLeaf, your comfort
            is our highest priority.
          </p>
          <div className="mt-20">
            <Link
              href="/about-us"
              className="text-xl px-9 py-3 border border-primary text-primary hover:text-white hover:bg-primary rounded-lg"
            >
              Read More
            </Link>
          </div>
        </div>
        <div
          className="hidden lg:block 5xl:col-span-4 5xl:ml-11 col-span-1 lg:col-span-5"
          data-aos="fade-left"
        >
          <div className="bg-white p-4 max-w-60 border-4 border-primary rounded-lg">
            <p className="mb-16 text-3xl text-midnight_text font-bold">
              About LuxeLeaf
            </p>
            <div className="flex justify-between">
              <div>
                <p className="text-black text-opacity-60">
                  Years Experience
                </p>
                <p className="text-[65px] leading-[1.2] -mt-1 text-midnight_text font-bold mb-2">
                  14
                </p>
              </div>
              <div>
                <Image
                  src="/images/history/logo.svg"
                  alt="company"
                  width={93}
                  height={130}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
