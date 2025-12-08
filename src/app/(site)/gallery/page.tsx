import { Metadata } from "next";
import HeroSub from "@/app/components/shared/hero-sub";
import Gallery from "@/app/components/gallery";


export const metadata: Metadata = {
  title: "Gallery | LuxeLeaf",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/gallery", text: "Gallery" },
  ];
  
  return (
    <>
      <HeroSub
        title="Gallery"
        description="Experience luxurious comfort with world-class amenities, peaceful surroundings, and an unforgettable stay tailored just for you."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Gallery />
    </>
  );
};

export default page;
