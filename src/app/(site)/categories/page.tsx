import { Metadata } from "next";
import HeroSub from "@/app/components/shared/hero-sub";
import Category from "@/app/components/category";


export const metadata: Metadata = {
  title: "Category | LuxeLeaf",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/category", text: "Category" },
  ];
  
  return (
    <>
      <HeroSub
        title="Category"
        description="Experience luxurious comfort with world-class amenities, peaceful surroundings, and an unforgettable stay tailored just for you."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Category />
    </>
  );
};

export default page;
