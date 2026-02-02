import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Testimonials from "@/models/admin-model/Testimonials";

export async function GET() {
    await dbConnect();
    const testimonilal = await Testimonials.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: testimonilal });
}

export async function POST(req: Request) {
    try {
        await dbConnect();
        const { fullName, review, rating, image, image_public_Id } = await req.json();

        if (!fullName || !review || !rating || !image || !image_public_Id) {
            return NextResponse.json({ success: false, message: "All fields are required!" }, { status: 400 });
        }
        const testimonial = await Testimonials.create({ fullName, review, rating, image, image_public_Id });
        return NextResponse.json({ message: "Testimonial created successfully.", success: true, data: testimonial });
    }
    catch (error) {
        const err = error as Error;
        console.error("Error creating testimonial.  :", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}
