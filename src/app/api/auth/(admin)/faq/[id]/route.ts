import dbConnect from "@/lib/dbConnect"
import Faq from "@/models/admin-model/Faq";
import { NextRequest, NextResponse } from "next/server";

type RouteContext = {
    params: Promise<{ id: string }>
}

export const GET = async (req: NextRequest, context: RouteContext) => {
    await dbConnect();
    const { id } = await context.params;
    try {
        const faq = await Faq.findById(id);
        if (!faq) {
            return NextResponse.json(
                { success: false, message: "Faq not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: faq });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}

export const PUT = async (req: NextRequest, context: RouteContext) => {
    await dbConnect();
    const { id } = await context.params;
    const body = await req.json();

    try {
        const updatedFaq = await Faq.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        })

        if (!updatedFaq) {
            return NextResponse.json({ success: false, message: "Faq not found" },
                { status: 404 })
        }
        return NextResponse.json({ message: "Faq updated successfully.", success: true, data: updatedFaq })
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}

export const DELETE = async (req: NextRequest, context: RouteContext) => {
    await dbConnect();
    const { id } = await context.params;
    try {
        const deleted = await Faq.findByIdAndDelete(id);
        if (!deleted) {
            return NextResponse.json(
                { success: false, message: "Faq  not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, message: "Faq deleted successfully" });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }

}