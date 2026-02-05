import dbConnect from "@/lib/dbConnect"
import RoomCategory from "@/models/admin-model/RoomCategory"
import { NextResponse } from "next/server"

export const GET = async () => {
    await dbConnect()
    const roomCategory = await RoomCategory.find().sort({ createdAt: -1 })
    return NextResponse.json({ success: true, data: roomCategory });
}

export const POST = async (req: Request) => {
    try {
        await dbConnect();
        const { category } = await req.json();
        if (!category) {
            return NextResponse.json({ success: false, message: "Category required!" }, { status: 400 });
        }
        const newCategory = await RoomCategory.create({ category });
        return NextResponse.json({ message: "Room category added successfylly.", success: true, data: newCategory });
    } catch (error) {
        const err = error as Error;
        console.error("Error adding room category :", error);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}