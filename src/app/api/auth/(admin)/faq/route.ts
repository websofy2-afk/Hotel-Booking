import dbConnect from "@/lib/dbConnect";
import Faq from "@/models/admin-model/Faq";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    await dbConnect();
    const faq = await Faq.find().sort({ createdAt: -1 })
    return NextResponse.json({ success: true, data: faq })
}

export const POST = async (req: NextRequest) => {
    try {
        await dbConnect();
        const { question, answer } = await req.json();
        if (!question || !answer) {
            return NextResponse.json({ success: false, message: "All fields are required!" }, { status: 400 });
        }
        const newFaq = await Faq.create({ question, answer });
        return NextResponse.json({ message: "Faq created successfully.", success: true, data: newFaq });
    } catch (error) {
        const err = error as Error;
        console.error("Error creating faq :", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}
