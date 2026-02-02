import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import BlogCategory from "@/models/admin-model/BlogCategory";

type RouteContext = {
    params: Promise<{ id: string }>;
};

export async function GET(req: Request, context: RouteContext) {
    await dbConnect();
    const { id } = await context.params;

    try {
        const blogCategory = await BlogCategory.findById(id);
        if (!blogCategory) {
            return NextResponse.json(
                { success: false, message: "Category not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: blogCategory });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (error: any) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}

export async function PUT(req: Request, context: RouteContext) {
    await dbConnect();
    const { id } = await context.params;
    const body = await req.json();

    try {       
        const updated = await BlogCategory.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        if (!updated) {
            return NextResponse.json(
                { success: false, message: "Category not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ message: "Category updated successfully.", success: true, data: updated });
    } 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (error: any) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}

export async function DELETE(req: Request, context: RouteContext) {
    await dbConnect();
    const { id } = await context.params;

    try {
        
        const deleted = await BlogCategory.findByIdAndDelete(id);
        if (!deleted) {
            return NextResponse.json(
                { success: false, message: "Category not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, message: "Category deleted successfully" });
    } 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (error: any) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}
