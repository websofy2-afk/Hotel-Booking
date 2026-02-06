import dbConnect from "@/lib/dbConnect"
import Hotel from "@/models/admin-model/Hotel";
import { NextResponse } from "next/server";

export const GET = async () => {
    await dbConnect();
    const hotels = await Hotel.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: hotels });
}

export const POST = async (req: Request) => {
    await dbConnect();
    try {
        const { hotelName, hotelLocation, rating, hotelAmenities, suitableFor, nearByHotelLocation, aboutOfHotel, hotelFoodTitle, hotelFoodDescription, hotelPolicies, whatGuestSaid, googleMapUrl, image_1, image_1_public_Id, image_2, image_2_public_Id, image_3, image_3_public_Id, image_4, image_4_public_Id, } = await req.json();

        if (!hotelName || !hotelLocation || !rating || !hotelAmenities || !suitableFor || !nearByHotelLocation || !aboutOfHotel || !hotelFoodTitle || !hotelFoodDescription || !hotelPolicies || !whatGuestSaid || !googleMapUrl || !image_1 || !image_1_public_Id
            || !image_2 || !image_2_public_Id || !image_3 || !image_3_public_Id || !image_4 || !image_4_public_Id) {
            return NextResponse.json({ success: false, message: "All fields are required!" }, { status: 400 });
        }

        const cleanHotelPolicies = hotelPolicies?.split(/,(?![^()]*\))/).map((k: string) => k.trim()).filter(Boolean);
        const cleanHotelAmenities = hotelAmenities?.split(/,(?![^()]*\))/).map((k: string) => k.trim()).filter(Boolean);

        const newImages = new Array();
        newImages.push({ image: image_1, image_public_Id: image_1_public_Id });
        newImages.push({ image: image_2, image_public_Id: image_2_public_Id });
        newImages.push({ image: image_3, image_public_Id: image_3_public_Id });
        newImages.push({ image: image_4, image_public_Id: image_4_public_Id });
        
        const newHotel = await Hotel.create({
            hotelName, hotelLocation, rating, hotelAmenities: cleanHotelAmenities, suitableFor, nearByHotelLocation, aboutOfHotel, hotelFoodTitle, hotelFoodDescription, hotelPolicies: cleanHotelPolicies, whatGuestSaid, googleMapUrl, image_1, image_1_public_Id, image_2, image_2_public_Id, image_3, image_3_public_Id, image_4, image_4_public_Id
        });

        return NextResponse.json({ message: "Hotel added successfully.", success: true, data: newHotel });
    } catch (error) {
        const err = error as Error;
        console.error("Error creating hotel :", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}