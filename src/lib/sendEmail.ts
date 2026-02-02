import nodemailer from "nodemailer";
export const sendEmail = async (to: string, otp: string) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Admin Panel" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Your Admin Panel OTP Code",
    text: `Your OTP code is ${otp}. It will expire in 5 minutes.`,
  });
};