import HotelLocation from "@/models/admin-model/HotelLocation";
import dbConnect from "./dbConnect"

export const HotelLocationData = async () => {
    await dbConnect();
    const hotelLocation = await HotelLocation.find().sort({ createdAt: -1 });
    return hotelLocation;
}