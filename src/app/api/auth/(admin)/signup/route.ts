import { NextResponse } from "next/server";

import User from "@/models/admin-model/User";

import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import { sendEmail } from "@/lib/sendEmail";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const { firstName, lastName, email, password, captcha } = await req.json();
    const captchaVerify = await fetch(
      `${process.env.RECAPTCHA_BASE_URL! + process.env.RECAPTCHA_SECRET_KEY!}&response=${captcha}`,
      { method: "POST" }
    );
    const captchaData = await captchaVerify.json();
    if (!captchaData.success) {
      return NextResponse.json({ message: "Captcha verification failed" }, { status: 400 });
    }

    if (!firstName || !lastName || !email || !password)
      return NextResponse.json({ message: "All fields required" }, { status: 400 });
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      otp,
      isVerified: false,
    });

    await newUser.save();
    await sendEmail(email, otp);

    return NextResponse.json({ message: "OTP sent successfullly to your email!" });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
