import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Image from "@/models/admin-model/Image";
import HotelLocation from "@/models/admin-model/HotelLocation";

type RouteContext = {
    params: Promise<{ id: string }>;
};

export async function GET(req: Request, context: RouteContext) {
    await dbConnect();
    const { id } = await context.params;

    try {
        const hotelLocation = await HotelLocation.findById(id);
        if (!hotelLocation) {
            return NextResponse.json(
                { success: false, message: "Hotel location not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: hotelLocation });
    }
    catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}

export async function PUT(req: Request, context: RouteContext) {
    await dbConnect();
    const { id } = await context.params;
    const body = await req.json();
    try {
        const existingHotelLocation = await HotelLocation.findById(id);
        if (existingHotelLocation.image_public_Id) {
            await Image.findByIdAndDelete(existingHotelLocation.image_public_Id);
        }

        const cleanLocationFeatures = body.locationFeatures?.split(/,(?![^()]*\))/).map((k: string) => k.trim()).filter(Boolean);
        const updated = await HotelLocation.findByIdAndUpdate(id,
            {
                ...body,
                locationFeatures: cleanLocationFeatures
            },
            {
                new: true,
                runValidators: true,
            });

        if (!updated || !existingHotelLocation) {
            return NextResponse.json(
                { success: false, message: "Hotel location not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ message: "Hotel location updated successfully.", success: true, data: updated });
    }
    catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}

export async function DELETE(req: Request, context: RouteContext) {
    await dbConnect();
    const { id } = await context.params;
    try {
        const existingHotelLocation = await HotelLocation.findById(id);
        if (existingHotelLocation.image_public_Id) {
            await Image.findByIdAndDelete(existingHotelLocation.image_public_Id);
        }
        const deleted = await HotelLocation.findByIdAndDelete(id);
        if (!deleted || !existingHotelLocation) {
            return NextResponse.json(
                { success: false, message: "Hotel location  not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, message: "Hotel location deleted successfully" });
    }
    catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}
