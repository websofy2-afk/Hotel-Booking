import dbConnect from "@/lib/dbConnect"
import Image from "@/models/admin-model/Image";
import Room from "@/models/admin-model/Room";
import { NextResponse } from "next/server";

type RouteContext = {
    params: Promise<{ id: string }>
}

export const GET = async (req: Request, context: RouteContext) => {
    await dbConnect();
    const { id } = await context.params;
    try {
        const rooms = await Room.findById(id);
        if (!rooms) {
            return NextResponse.json({ success: false, message: "Room not found." },
                { status: 404 })
        }
        return NextResponse.json({ success: true, data: rooms })
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
        const existingRoom = await Room.findById(id);
        if (existingRoom.image_public_Id) {
            await Image.findByIdAndDelete(existingRoom.image_public_Id);
        }
        let cleanRoomAmenities = null;

        if (typeof body.roomAmenities === "string") {
            cleanRoomAmenities = body.roomAmenities?.split(/,(?![^()]*\))/).map((k: string) => k.trim()).filter(Boolean);
        } else {
            cleanRoomAmenities = body.roomAmenities;
        }

        const updated = await Room.findByIdAndUpdate(id, {
            ...body,
            roomAmenities: cleanRoomAmenities
        },
            {
                new: true,
                runValidators: true
            }
        )
        if (!updated || !existingRoom) {
            return NextResponse.json(
                { success: false, message: "Room not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ message: "Room updated successfully.", success: true, data: updated });
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
        const existingRoom = await Room.findById(id);
        if (existingRoom.image_public_Id) {
            await Image.findByIdAndDelete(existingRoom.image_public_Id);
        }

        const deleted = await Room.findByIdAndDelete(id);
        if (!deleted || !existingRoom) {
            return NextResponse.json(
                { success: false, message: "Room  not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, message: "Room deleted successfully" });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}