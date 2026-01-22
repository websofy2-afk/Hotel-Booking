import Image from "next/image";

export default function HotelCard({ hotel }:{hotel : any}) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
      <div className="relative h-48 w-full mb-4">
        <Image
          src={hotel.image}
          alt={hotel.name}
          fill
          className="rounded-lg object-cover"
        />
      </div>

      <h3 className="text-lg font-semibold">{hotel.name}</h3>
      <p className="text-gray-600">{hotel.location}</p>

      <div className="flex justify-between mt-3">
        <span className="font-bold text-primary">₹{hotel.price}/night</span>
        <span className="text-yellow-500">⭐ {hotel.rating}</span>
      </div>
    </div>
  );
}
