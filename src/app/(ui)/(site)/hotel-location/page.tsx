import { Metadata } from "next";
import HeroSub from "../../components/shared/hero-sub";
import Category from "../../components/category";

export const metadata: Metadata = {
  title: "Hotel Location | LuxeLeaf",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/category", text: "Location" },
  ];
  
  return (
    <>
      <HeroSub
        title="Hotel Location"
        description="Experience luxurious comfort with world-class amenities, peaceful surroundings, and an unforgettable stay tailored just for you."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Category />
    </>
  );
};

export default page;
