import Enquery from "@/models/ui-model/Enquery";
import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { name, phone, email, course, info, captcha } = await req.json();
    const captchaVerify = await fetch(
      `${process.env.RECAPTCHA_BASE_URL! + process.env.RECAPTCHA_SECRET_KEY!}&response=${captcha}`,
      { method: "POST" }
    );
    const captchaData = await captchaVerify.json();
    if (!captchaData.success) {
      return NextResponse.json({ message: "Captcha verification failed" }, { status: 400 });
    }

    if (!name || !phone || !email || !course || !info) {
      return NextResponse.json(
        { error: `All fields are required ` },
        { status: 400 }
      );
    }
    const selectedCourse = course.split("+")[0].trim();
    const slug = course.split("+")[1].trim();

    const enquery = await Enquery.create({
      name, phone, email, course: selectedCourse, info
    })

    const res = NextResponse.json({ message: "Enquery request send successfully.", success: true, enquery: enquery, slug:slug }
    );
    return res;
  } catch (err) {
    const error = err as Error;
    console.error("Enrollment :", error);
    return NextResponse.json({ message: "Something went wrong while processing your request.", error: error.message || "Unknown error", }, { status: 500 });
  }
}


export async function GET() {
  try {
    await dbConnect();
    const enquery = await Enquery.find().sort({ createdAt: -1 });
    return NextResponse.json(
      { success: true, data: enquery },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching enquery data:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}