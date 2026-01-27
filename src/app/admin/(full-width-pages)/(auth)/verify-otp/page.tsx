import VerifyOtpPage from "@/app/admin/components/auth/VerifyOtp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify Otp | Stintwol",
};

export default function SignUp() {
  return <VerifyOtpPage />
}
