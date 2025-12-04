import { Metadata } from "next";
import HeroSub from "@/app/components/shared/hero-sub";
import AboutUs from "@/app/components/about-us";


export const metadata: Metadata = {
  title: "About Us | LuxeLeaf",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about-us", text: "About Us" },
  ];
  
  return (
    <>
      <HeroSub
        title="About Us"
        description="Experience luxurious comfort with world-class amenities, peaceful surroundings, and an unforgettable stay tailored just for you."
        breadcrumbLinks={breadcrumbLinks}
      />
      <AboutUs />
    </>
  );
};

export default page;
