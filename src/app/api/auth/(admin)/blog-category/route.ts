import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import BlogCategory from "@/models/admin-model/BlogCategory";

export async function GET() {
  await dbConnect();
  const blogs = await BlogCategory.find().sort({ createdAt: -1 });
  return NextResponse.json({ success: true, data: blogs });
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { category } = await req.json();

    if (!category) {
      return NextResponse.json({ success: false, message: "Category fields are required!" }, { status: 400 });
    }
    const newBlog = await BlogCategory.create({ category});
    return NextResponse.json({ message: "Category created successfylly.", success: true, data: newBlog });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  catch (err: any) {
    console.error("Error creating category :", err);
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}
