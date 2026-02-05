import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Blog from "@/models/admin-model/Blog";
import Image from "@/models/admin-model/Image";

type RouteContext = {
    params: Promise<{ id: string }>;
};

export async function GET(req: Request, context: RouteContext) {
    await dbConnect();
    const { id } = await context.params;
    try {
        const blog = await Blog.findById(id);
        if (!blog) {
            return NextResponse.json(
                { success: false, message: "Blog not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: blog });
    } catch (error) {
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
        const existingBlog = await Blog.findById(id);
        if (body.image && body.image !== existingBlog.image) {
            if (existingBlog.image_public_Id) {
                await Image.findByIdAndDelete(existingBlog.image_public_Id);
            }
        }

        const updated = await Blog.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        if (!updated || !existingBlog) {
            return NextResponse.json(
                { success: false, message: "Blog not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ message: "Blog updated successfully.", success: true, data: updated });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (err) {
        const error = err as Error;
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
        const existingBlog = await Blog.findById(id);
        if (existingBlog.image_public_Id) {
            await Image.findByIdAndDelete(existingBlog.image_public_Id);
        }
        const deleted = await Blog.findByIdAndDelete(id);
        if (!deleted || !existingBlog) {
            return NextResponse.json(
                { success: false, message: "Blog not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, message: "Blog deleted successfully" });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}
