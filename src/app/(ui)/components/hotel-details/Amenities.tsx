import { CheckmarkIcon } from "react-hot-toast"

const Amenities = ({ amenities, hotelName }: { amenities: string[], hotelName: string }) => {
    return (
        <section id='amenities' className="px-12 pt-0 pb-6 bg-light ">

        
        <div className="bg-white rounded-lg">
            <div className="px-6 py-4 border-b border-border">
                <h2 className="text-xl font-bold">
                    Amenities at {hotelName}
                </h2>
            </div>
            {/* Popular Amenities */}
            <div className="px-6 py-5 border-b border-border">
                <span className="inline-block bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded">
                    POPULAR AMENITIES
                </span>

                <div className="flex flex-wrap gap-6 mt-5 items-center">
                    {amenities.map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <span className="w-7 h-7 rounded-full flex items-center justify-center">
                                <CheckmarkIcon className="text-white" />
                            </span>
                            <p className="font-medium text-midnight_text">{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Amenities List */}
            <div className="px-6 py-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-gray-700">

                    {/* Column 1 */}
                    <div>
                        <h4 className="font-bold text-midnight_text mb-3 text-xl">Basic Facilities</h4>
                        <ul className="space-y-2 text-gray">
                            <li>• Housekeeping</li>
                            <li>• Wi-Fi</li>
                            <li>• Smoking Rooms</li>
                            <li>• Elevator/Lift</li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h4 className="font-bold text-midnight_text mb-3 text-xl">General Services</h4>
                        <ul className="space-y-2 text-gray">
                            <li>• Ticket/Tour Assistance</li>
                            <li>• Multilingual Staff</li>
                            <li>• Concierge</li>
                            <li>• Wheelchair</li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h4 className="font-bold text-midnight_text mb-3 text-xl">Health and wellness</h4>
                        <ul className="space-y-2 text-gray">
                            <li>• First-aid Services</li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h4 className="font-bold text-midnight_text mb-3 text-xl">Transfers</h4>
                        <ul className="space-y-2 text-gray">
                            <li>• Shuttle Service</li>
                            <li>• Paid Railway Transfers</li>
                            <li>• Paid Bus Station Transfers</li>
                            <li>• Airport Transfers</li>
                        </ul>
                    </div>

                    {/* Column 5 */}
                    <div>
                        <h4 className="font-bold text-midnight_text mb-3 text-xl">Room Amenities</h4>
                        <ul className="space-y-2 text-gray">
                            <li>• Sofa</li>
                            <li>• Mini Fridge</li>
                            <li>• Toiletries</li>
                            <li>• Air Conditioning</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>

        </section>
    )
}

export default Amenities