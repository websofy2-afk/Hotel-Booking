"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CirclesWithBar } from "react-loader-spinner";
import Logo from "../(ui)/components/layout/header/logo";

export default function HomePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];
      setTimeout(() => {
        if (token) {
          router.push("/admin/signin");
        } else {
          router.push("/admin/signin");
        }
      }, 2000);
    }
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [router]);

  if (!loading) return null;

  return (
    <div className="flex flex-col gap-5 h-screen items-center justify-center">
      <Logo />
      <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        outerCircleColor="#e31e24"
        innerCircleColor="#f9b52b"
        barColor="#f9b52b"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
