import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Image from "@/models/admin-model/Image";
import Testimonials from "@/models/admin-model/Testimonials";

type RouteContext = {
    params: Promise<{ id: string }>;
};

export async function GET(req: Request, context: RouteContext) {
    await dbConnect();
    const { id } = await context.params;
    try {
        const testimonial = await Testimonials.findById(id);
        if (!testimonial) {
            return NextResponse.json(
                { success: false, message: "Testimonial not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: testimonial });
    }
    catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}

export async function PUT(
    req: Request,
    context: RouteContext
) {
    await dbConnect();
    const { id } = await context.params;
    const body = await req.json();
    try {
        const existingTestimonial = await Testimonials.findById(id);
        if (existingTestimonial.image_public_Id) {
            await Image.findByIdAndDelete(existingTestimonial.image_public_Id);
        }
        const updated = await Testimonials.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        if (!updated || !existingTestimonial) {
            return NextResponse.json(
                { success: false, message: "Testimonial not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({
            message: "Testimonial updated successfully.",
            success: true,
            data: updated,
        });
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
        const existingTestimonial = await Testimonials.findById(id);
        if (existingTestimonial.image_public_Id) {
            await Image.findByIdAndDelete(existingTestimonial.image_public_Id);
        }
        const deleted = await Testimonials.findByIdAndDelete(id);
        if (!deleted || !existingTestimonial) {
            return NextResponse.json(
                { success: false, message: "Testimonial not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, message: "Testimonial deleted successfully" });
    }
    catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}


