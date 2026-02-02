"use client";
import { Eye, EyeOff, Loader, Send } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import ReCAPTCHA from "react-google-recaptcha";
import Tooltip from "../common/Tooltip";
import Button from "../ui/button/Button";
import { strongPasswordRegex } from "@/lib/strongPasswordRegex";

export default function SignUpForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const captchaRef = useRef<ReCAPTCHA | null>(null);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [loading, setLoading] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [tooltip, setTooltip] = useState<{ message: string; type: any } | null>(
    null
  );
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();


  const showTooltip = (
    message: string,
    type: "success" | "error" | "info" = "info"
  ) => {
    setTooltip({ message, type });
    setTimeout(() => setTooltip(null), 3000);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
     if (!strongPasswordRegex.test(form.password)) {
            setLoading(false);
            captchaRef.current?.reset();
            setCaptchaValue(null);
            return showTooltip(
                "Password must be 12–16 characters and include uppercase, lowercase, number, and special character (@ # $ % ! & *)",
                "error"
            );
        }

    if (!captchaValue) {
      showTooltip("Please verify the CAPTCHA before sign in.", "error");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, captcha: captchaValue }),
    });
    const data = await res.json();
    if (res.ok) {
      setTimeout(() => {
        router.push("/admin/verify-otp?email=" + form.email);
        setLoading(false);
      }, 2000)
      showTooltip(data.message, "success");
    } else {
      showTooltip(data.message, "error");
      setLoading(false);
      captchaRef.current?.reset();
      setCaptchaValue(null);
    }
  };

  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full overflow-y-auto no-scrollbar">
      {tooltip && <Tooltip message={tooltip.message} type={tooltip.type} />}
      <div className="flex flex-col justify-center sm:pt-10 flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2">
              Sign Up
            </h1>
            <p className="text-lg text-gray">
              Enter your email and password to sign up!
            </p>
          </div>
          <div>
            <form onSubmit={handleSignup}>
              <div className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <Label>
                      First Name<span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="Enter your first name"
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <Label>
                      Last Name<span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="lname"
                      name="lname"
                      placeholder="Enter your last name"
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <Label>
                      Email<span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>
                      Password<span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Input
                        placeholder="Enter your password"
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                      />
                      <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                      >
                        {showPassword ? (
                          <Eye size={17} className="text-gray-500" />
                        ) : (
                          <EyeOff size={17} className="text-gray-500" />
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                    onChange={(value) => setCaptchaValue(value)}
                    ref={captchaRef}
                  />
                </div>
                <div>
                  <Button type="submit" className="w-full" size="sm">
                    {loading ? (
                      <>
                        Sign Up...
                        <Loader className="animate-spin w-5 h-5" />
                      </>
                    ) : (
                      <>
                        Sign Up
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </form>
            <div className="mt-5">
              <p className="text-sm font-normal text-center text-primary hover:text-primary/80 sm:text-start">
                Already have an account?{" "}
                <Link
                  href="/admin/signin"
                  className="text-brand-500 hover:text-brand-600"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


