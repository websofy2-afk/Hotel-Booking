const FoodDining = ({hotelName }: { hotelName: string }) => {
    return (
        <section id='food&dining' className="px-12 pt-0 pb-6 bg-light ">
            <div className="bg-white rounded-lg">
                <div className="px-6 py-4 border-b border-border">
                    <h2 className="text-xl font-bold">
                        Food & Dining at {hotelName}
                    </h2>
                </div>

                {/* Amenities List */}
                <div className="p-6">
                    <div className="border rounded-lg gap-8 text-gray-700">
                        <h4 className="font-bold h-16 rounded-lg p-3 bg-herobg/80 text-midnight_text mb-3">Room dining available at the {hotelName}
                        </h4>
                        <div className="p-3">
                            <p>Food will be served in the room</p>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default FoodDining