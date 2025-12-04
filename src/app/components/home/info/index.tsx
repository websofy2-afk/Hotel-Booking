export default function CompanyInfo() {
    return (
        <div className="dark:bg-darkmode pt-16">
            <div className="estate-summary-b md:bg-transparent bg-primary">
                <div className="bg-primary container lg:max-w-screen-xl md:max-w-screen-md mx-auto px-8 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div
                            className="flex lg:flex-row flex-col justify-center items-center md:border-r border-border py-10 px-4"
                            data-aos="fade-right"
                        >
                            <p className="text-[60px] leading-[1.2] mr-4 text-white">98%</p>
                            <p className="text-2xl text-white">Guest Satisfaction</p>
                        </div>
                        <div
                            className="flex lg:flex-row flex-col justify-center items-center md:border-r border-border py-10 px-4"
                            data-aos="fade-up"
                        >
                            <p className="text-[60px] leading-[1.2] mr-4 text-white">150K+</p>
                            <p className="text-2xl text-white">Bookings Completed</p>
                        </div>
                        <div
                            className="flex lg:flex-row flex-col justify-center items-center py-10 px-4"
                            data-aos="fade-left"
                        >
                            <p className="text-[60px] leading-[1.2] mr-4 text-white">25+</p>
                            <p className="text-2xl text-white">Award Winning</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
