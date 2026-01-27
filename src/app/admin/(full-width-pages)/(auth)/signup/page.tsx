import SignUpForm from "@/app/admin/components/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | Stintwol",
};

export default function SignUp() {
  return <SignUpForm />;
}
