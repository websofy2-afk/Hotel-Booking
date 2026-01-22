"use client";
import React, { FC, useEffect, useState } from "react";
import Breadcrumb from "../../breadcrumb";
import { BreadcrumbLink } from "@/app/types/data/breadcrumb";
import Image from "next/image";

interface HeroSubProps {
  title: string;
  description: string;
  breadcrumbLinks: BreadcrumbLink[];
  imageSrc?: string;
}

const HeroSub: FC<HeroSubProps> = ({
  title,
  description,
  breadcrumbLinks,
  imageSrc = "about-us/about-us-banner.png",
}) => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  useEffect(() => {
    setImgSrc(`/images/${imageSrc}`);
  }, [imageSrc]);

  return (
    <section className="relative sm:pt-28 pt-5 overflow-hidden sm:h-80 mt-20 h-28">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {imgSrc && (
          <Image
            src={imgSrc}
            alt="Page Banner"
            fill
            priority
          />
        )}
      </div>
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center overflow-x-hidden">
        <h2 className="text-white text-[50px] leading-[1.2] font-bold capitalize">
          {title}
        </h2>

        {/* Optional description */}
        
        {/* <p className="text-lg text-white mx-auto  sm:px-0 px-4">
          {description}
        </p> */}
        <Breadcrumb links={breadcrumbLinks} />
      </div>
    </section>
  );
};

export default HeroSub;
