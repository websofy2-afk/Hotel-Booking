import { NextResponse } from "next/server";
import sanitizeHtml from "sanitize-html";
import Blog from "@/models/admin-model/Blog";
import dbConnect from "@/lib/dbConnect";

export async function GET() {
  await dbConnect();
  const blogs = await Blog.find().sort({ createdAt: -1 });
  return NextResponse.json({ success: true, data: blogs });
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { title, subTitle, category, content, image, date, hashtag, image_public_Id, metaTitle, metaDescription, metakeywords, slug, schemaMarkup } = await req.json();

    if (!title || !subTitle || !content || !category || !image || !date || !hashtag || !image_public_Id || !metaTitle || !metaDescription || !slug || !metakeywords) {
      return NextResponse.json({ success: false, message: "All fields are required!" }, { status: 400 });
    }

    const cleanMetaKeywords = metakeywords.split(",").map((k: string) => k.trim().toLowerCase()).filter(Boolean);
    const cleanContent = sanitizeHtml(content);

    const newBlog = await Blog.create({ title, subTitle, content: cleanContent, image, category, date, hashtag, image_public_Id, metaTitle, metaDescription, slug, schemaMarkup, metakeywords: cleanMetaKeywords });
    return NextResponse.json({ message: "Blog created successfylly.", success: true, data: newBlog });
  }
  catch (err: any) {
    const error = err as Error;
    console.error("Error creating blog:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
