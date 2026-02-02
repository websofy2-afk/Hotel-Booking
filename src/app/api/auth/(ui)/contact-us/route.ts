import Contact from "@/models/ui-model/Contact";
import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { name, phone, email, message, captcha } = await req.json();
    const captchaVerify = await fetch(
      `${process.env.RECAPTCHA_BASE_URL! + process.env.RECAPTCHA_SECRET_KEY!}&response=${captcha}`,
      { method: "POST" }
    );
    const captchaData = await captchaVerify.json();
    if (!captchaData.success) {
      return NextResponse.json({ message: "Captcha verification failed" }, { status: 400 });
    }

    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: `All fields are required ` },
        { status: 400 }
      );
    }
    const contactUs = await Contact.create({
      name, phone, email, message
    })

    const res = NextResponse.json({ message: "Contact request send successfully.", success: true, contact:contactUs}
    );
    return res;
  } catch (err) {
    const error = err as Error;
    console.error("Contact data error :", error);
    return NextResponse.json({ message: "Something went wrong while processing your request.", error: error.message || "Unknown error", }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const contact = await Contact.find().sort({ createdAt: -1 });
    return NextResponse.json(
      { success: true, data: contact },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching contact data:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}