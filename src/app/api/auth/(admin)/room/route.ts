import dbConnect from "@/lib/dbConnect"
import Room from "@/models/admin-model/Room";
import { NextResponse } from "next/server";

export const GET = async () => {
    await dbConnect();
    const rooms = await Room.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: rooms })
}

export const POST = async (req: Request) => {
    await dbConnect();
    try {
        const { roomType, oldPrice, newPrice, noOfGuest, bedType, rating, roomAmenities, taxesAndFeePerNight, roomRelatedToHotel, hotelLocation, image, image_public_Id } = await req.json();

        if (!roomType || !oldPrice || !noOfGuest || !bedType || !rating || !roomAmenities || !taxesAndFeePerNight || !roomRelatedToHotel || !hotelLocation || !image || !image_public_Id) {
            return NextResponse.json({ success: false, message: "All fields are required!" }, { status: 400 });
        }
        
        const cleanRoomAmenities = roomAmenities?.split(/,(?![^()]*\))/).map((k: string) => k.trim()).filter(Boolean);

        const newRoom = await Room.create({ roomType, oldPrice, newPrice, noOfGuest, bedType, rating, roomAmenities: cleanRoomAmenities, taxesAndFeePerNight, roomRelatedToHotel, hotelLocation, image, image_public_Id })

        return NextResponse.json({ message: "Room added successfully.", success: true, data: newRoom });

    } catch (error) {
        const err = error as Error;
        console.error("Error adding the room.", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}