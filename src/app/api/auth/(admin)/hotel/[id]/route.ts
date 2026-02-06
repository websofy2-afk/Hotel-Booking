import dbConnect from "@/lib/dbConnect";
import Hotel from "@/models/admin-model/Hotel";
import Image from "@/models/admin-model/Image";
import { NextResponse } from "next/server";

type RouteContext = {
    params: Promise<{ id: string }>;
};

export const GET = async (req: Request, context: RouteContext) => {
    await dbConnect();
    const { id } = await context.params;
    try {
        const hotels = Hotel.findById(id);
        if (!hotels) {
            return NextResponse.json(
                { success: false, message: "Hotel not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: hotels });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}

export const PUT = async (req: Request, context: RouteContext) => {
    await dbConnect();
    const { id } = await context.params;
    const body = await req.json();
    try {
        const existingHotel = await Hotel.findById(id);
        if (body.image_1 && body.image_1 != existingHotel.image_1) {
            if (existingHotel.image_1_public_Id) {
                await Image.findByIdAndDelete(existingHotel.image_1_public_Id);
            }
        }
        if (body.image_2 && body.image_2 != existingHotel.image_2) {
            if (existingHotel.image_2_public_Id) {
                await Image.findByIdAndDelete(existingHotel.image_2_public_Id);
            }
        }
        if (body.image_3 && body.image_3 != existingHotel.image_3) {
            if (existingHotel.image_3_public_Id) {
                await Image.findByIdAndDelete(existingHotel.image_3_public_Id);
            }
        }

        if (body.image_4 && body.image_4 != existingHotel.image_4) {
            if (existingHotel.image41_public_Id) {
                await Image.findByIdAndDelete(existingHotel.image_4_public_Id);
            }
        }

        let cleanHotelPolicies = null;
        let cleanHotelAmenities = null;

        if (typeof body.hotelPolicies === "string") {
            cleanHotelPolicies = body.hotelPolicies?.split(/,(?![^()]*\))/).map((k: string) => k.trim()).filter(Boolean);
        } else {
            cleanHotelPolicies = body.hotelPolicies;
        }

        if (typeof body.hotelAmenities === "string") {
            cleanHotelAmenities = body.hotelAmenities?.split(/,(?![^()]*\))/).map((k: string) => k.trim()).filter(Boolean);
        } else {
            cleanHotelAmenities = body.hotelAmenities;
        }

        const updated = await Hotel.findByIdAndUpdate(id, {
            ...body,
            hotelPolicies: cleanHotelPolicies,
            hotelAmenities: cleanHotelAmenities,
        },
            {
                new: true,
                runValidators: true
            }
        )

        if (!updated || !existingHotel) {
            return NextResponse.json(
                { success: false, message: "Hotel found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ message: "Hotel updated successfully.", success: true, data: updated });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}

export const DELETE = async (req: Request, context: RouteContext) => {
    await dbConnect();
    const { id } = await context.params;
    try {
        const existingHotel = await Hotel.findById(id);
        if (existingHotel.image_1_public_Id && existingHotel.image_2_public_Id && existingHotel.image_3_public_Id && existingHotel.image_4_public_Id) {
            await Image.findByIdAndDelete(existingHotel.image_1_public_Id);
            await Image.findByIdAndDelete(existingHotel.image_2_public_Id);
            await Image.findByIdAndDelete(existingHotel.image_3_public_Id);
            await Image.findByIdAndDelete(existingHotel.image_4_public_Id);
        }
        const deleted = await Hotel.findByIdAndDelete(id);
        if (!deleted || !existingHotel) {
            return NextResponse.json(
                { success: false, message: "Hotel  not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, message: "Hotel deleted successfully" });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}