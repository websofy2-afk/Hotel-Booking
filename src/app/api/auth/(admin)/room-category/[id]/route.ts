import dbConnect from "@/lib/dbConnect"
import RoomCategory from "@/models/admin-model/RoomCategory";
import { NextResponse } from "next/server";

type RouteContext = {
    params: Promise<{ id: string }>
}

export const GET = async (req: Request, context: RouteContext) => {
    await dbConnect();
    const { id } = await context.params;
    try {
        const category = await RoomCategory.findById(id);
        if (!category) {
            return NextResponse.json(
                { success: false, message: "Room category not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: category });
    } catch (err) {
        const error = err as Error;
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}

export const PUT = async (req: Request, context: RouteContext) => {
    await dbConnect();
    const { id } = await context.params;
    const body = await req.json();
    try {
        const updated = await RoomCategory.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        });

        if (!updated) {
            return NextResponse.json(
                { success: false, message: "Room category not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ message: "Category updated successfully", success: true, data: updated });
    } catch (err) {
        const error = err as Error;
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}

export const DELETE = async (req: Request, context: RouteContext) => {
    await dbConnect();
    const { id } = await context.params;
    try {
        const deleted = await RoomCategory.findByIdAndDelete(id);
        if (!deleted) {
            return NextResponse.json(
                { success: false, message: "Room category not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, message: "Room category deleted successfully" });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}