import { FaStar } from "react-icons/fa";
import { MdOutlinePreview } from "react-icons/md";


const GuestReveiws = ({ hotelName }: { hotelName: string }) => {

    const total = ratings.reduce((a, b) => a + b.count, 0);

    return (
        <section id='guestReveiws' className="px-12 pt-0 pb-6 bg-light ">
            <div className="bg-white rounded-lg">
                <div className="px-6 py-4 border-b border-border">
                    <h2 className="text-xl font-bold">
                        Guest Reviews & Rating for {hotelName}
                    </h2>
                </div>

                <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="flex flex-col sm:flex-row gap-6 items-center bg-white p-6 rounded-xl ">
                            {/* Score box */}
                            <div className="bg-green-600 text-white rounded-xl p-3 text-center min-w-[150px]">
                                <h2 className="text-xl font-semibold text-white">Rating</h2>
                                <p className="text-4xl font-bold mt-2">4<span className="text-xl">/5</span></p>
                                <p className="mt-3 text-sm">2390 Ratings</p>
                                <p className="text-sm">831 Reviews</p>
                            </div>

                            {/* Rating bars */}
                            <div className="flex-1 space-y-1">
                                {ratings.map((r) => (
                                    <div key={r.star} className="flex items-center gap-3">
                                        <span className="w-6 text-sm justify-center flex items-center gap-1 font-medium">{r.star}
                                            <FaStar size={10} className="text-yellow-500" />
                                        </span>
                                        <div className="flex-1">
                                            <div className="w-60 rounded-full h-2  bg-gray/15">
                                                <div className={`${r.color} h-2 rounded-full`}
                                                    style={{ width: `${(r.count / total) * 100}%` }} />
                                            </div>
                                        </div>
                                        <span className="w-12 font-medium text-sm text-midnight_text text-right">
                                            {r.count}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT: Guest feedback */}
                        <div className="bg-white rounded-xl border border-border  shadow-sm">
                            <h3 className="text-sm p-4 text-midnight_text border-b border-border mb-4">
                                What our guests say?
                            </h3>
                            <div className="flex flex-wrap gap-3 p-4">
                                {[
                                    "good staff (222)",
                                    "good stay (143)",
                                    "good room (139)",
                                    "awesome food (73)",
                                    "nice location (68)",
                                    "good place (40)",
                                    "+6 more",
                                ].map((tag, i) => (
                                    <span
                                        key={i}
                                        className="border border-green-500 text-midnight_text px-3 py-1.5 rounded-lg text-sm cursor-pointer hover:bg-green-50 transition"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-6 py-4 border-t border-border">

                    <div className="flex gap-3 items-center">
                        <span><MdOutlinePreview size={18} className="text-green-500" /></span>
                        <h2 className="text-xl font-bold">
                            Reviews Summary
                        </h2>
                    </div>
                    <p className="mt-2 text-lg  text-justify text-midnight_text text-opacity-80">The property is popular for its excellent location near Charbagh railway station and metro station, making it convenient for guests. Many appreciate the spacious and clean rooms, along with the courteous and helpful staff, especially during check-in and check-out processes. Breakfast options receive high marks for variety and taste, while some also enjoy the well-maintained gym and swimming pool.</p>

                    {
                        [1, 2, 3, 4, 5].map((item, index) => (
                            <div key={item + index} className="border border-border rounded-xl p-5 md:p-6 bg-white shadow-sm mt-8">
                                {/* Header */}
                                <div className="flex items-start justify-between gap-4">

                                    {/* Left */}
                                    <div className="flex gap-4">

                                        {/* Avatar */}
                                        <div className="w-12 h-12 rounded-full bg-gray/50 flex items-center justify-center text-gray-700 font-semibold">
                                            AR
                                        </div>

                                        {/* User info */}
                                        <div>
                                            <h4 className="font-semibold text-base text-midnight_text">
                                                Akhil Rangi{" "}
                                                <span className="font-normal text-opacity-80">
                                                    (Stayed 28 Dec, 2025)
                                                </span>
                                            </h4>
                                            <p className="text-sm text-gray-500">
                                                Family Traveller | 1 Reviews Written
                                            </p>
                                        </div>
                                    </div>

                                    {/* Rating */}
                                    <div className="bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded">
                                        1/5
                                    </div>
                                </div>

                                {/* Review text */}
                                <p className="mt-4 text-midnight_text leading-relaxed text-justify text-sm md:text-base">
                                    Delayed checkin. Room still not ready. Be prepared to spend an hour
                                    to check in, and another couple of hours following up with housekeeping
                                    to get water, tissue roll and then wait on maintenance to get shower
                                    fixed! They should close the property and first work on room and staff
                                    readiness, then try again. If they continue in this fashion nobody is
                                    going to stay there.
                                </p>
                            </div>
                        ))
                    }

                </div>
            </div>

        </section>
    )
}

export default GuestReveiws;



const ratings = [
    { star: 5, count: 1082, color: "bg-emerald-500" },
    { star: 4, count: 691, color: "bg-green-500" },
    { star: 3, count: 286, color: "bg-yellow-500" },
    { star: 2, count: 166, color: "bg-orange-400" },
    { star: 1, count: 165, color: "bg-red-500" },
];



