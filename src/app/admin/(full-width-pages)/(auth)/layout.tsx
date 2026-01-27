;
import Image from "next/image";
import Link from "next/link";
import React from "react";
import GridShape from "../../components/common/GridShape";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative p-6 bg-light z-1 sm:p-0">
      <div className="relative flex lg:flex-row w-full h-screen justify-center flex-col sm:p-0">
        {children}
        <div className="lg:w-[50%] w-full h-full bg-herobg lg:grid items-center hidden">
          <div className="relative items-center justify-center  flex z-1">
            <GridShape />

            <div className="flex flex-col gap-2 items-center">
              <Link href="/admin" className="block">
                <Image
                  width={231}
                  height={48}
                  src="/images/logo/logo.png"
                  alt="Logo"
                />
              </Link>
              <p className="text-center uppercase font-semibold text-SlateBlueText text-sm sm:text-2xl">
                LuxeLeaf A Luxury Hotel
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
