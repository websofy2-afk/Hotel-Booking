import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import HotelLocation from "@/models/admin-model/HotelLocation";

export async function GET() {
  await dbConnect();
  const hotelLocation = await HotelLocation.find().sort({ createdAt: -1 });
  return NextResponse.json({ success: true, data: hotelLocation });
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { hotelLocation, focusOn, locationFeatures, whyChooseLocation, image,
      image_public_Id } = await req.json();

    if (!hotelLocation || !focusOn || !locationFeatures || !whyChooseLocation || !image || !image_public_Id){
      return NextResponse.json({ success: false, message: "All fields are required!" }, { status: 400 });
    }
    
    const cleanLocationFeatures = locationFeatures?.split(/,(?![^()]*\))/).map((k: string) => k.trim()).filter(Boolean);

    const newHotelLocation = await HotelLocation.create({ hotelLocation, focusOn, whyChooseLocation, locationFeatures: cleanLocationFeatures, image, image_public_Id });
    return NextResponse.json({ message: "Hotel location created successfylly.", success: true, data: newHotelLocation });
  }
  catch (error) {
    const err = error as Error;
    console.error("Error creating hotel location:", err);
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}
