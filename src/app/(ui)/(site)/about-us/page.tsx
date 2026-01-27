import { Metadata } from "next";
import HeroSub from "../../components/shared/hero-sub";
import AboutUs from "../../components/about-us";

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
        imageSrc="about-us/about-us-banner.png"
      />
      <AboutUs />
    </>
  );
};

export default page;
