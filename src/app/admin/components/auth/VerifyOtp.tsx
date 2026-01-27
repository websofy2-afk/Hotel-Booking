"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, Suspense } from "react";
import { BallTriangle } from "react-loader-spinner";
import Tooltip from "../common/Tooltip";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Button from "../ui/button/Button";
import { Loader, Send } from "lucide-react";
import Link from "next/link";

function VerifyOtpPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [tooltip, setTooltip] = useState<{ message: string; type: any } | null>(
    null
  );

  const showTooltip = (
    message: string,
    type: "success" | "error" | "info" = "info"
  ) => {
    setTooltip({ message, type });
    setTimeout(() => setTooltip(null), 3000);
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });
    const data = await res.json();
    if (res.ok) {
      setTimeout(() => {
        router.push("/admin/signin");
        setLoading(false);
      }, 2000)
      showTooltip(data.message, "success");
    }
    else {
      showTooltip(data.message, "error");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full overflow-y-auto no-scrollbar">
      {tooltip && <Tooltip message={tooltip.message} type={tooltip.type} />}
      <div className="flex flex-col justify-center sm:pt-10 flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm sm:text-title-md">
              Verify Your Email
            </h1>
            <p className="text-sm text-gray-500">
              Enter the 6-digit code we sent to your email to complete your registration.
            </p>
          </div>

          <div>
            <form onSubmit={handleVerify}>
              <div className="space-y-5">
                <div className="grid grid-cols-1">
                  <div className="sm:col-span-1">
                    <Label>
                      Verification Code<span className="text-error-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      placeholder="Enter the 6-digit code"
                      value={otp}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        setOtp(value.slice(0, 6));
                      }}

                      maxLength={6}
                    />
                  </div>
                </div>
                <div>
                  <Button type="submit" className="w-full" size="sm">
                    {loading ? (
                      <>
                        Verifying...
                        <Loader className="animate-spin w-5 h-5" />
                      </>
                    ) : (
                      <>
                        Verify Email
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VerifyOtpPage() {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#FF00D4"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>}>
      <VerifyOtpPageContent />
    </Suspense>
  );
}
