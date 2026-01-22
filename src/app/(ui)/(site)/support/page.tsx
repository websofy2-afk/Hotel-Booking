import { Metadata } from "next";
import HeroSub from "../../components/shared/hero-sub";
import Support from "../../components/support";

export const metadata: Metadata = {
  title: "Support | LuxeLeaf",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/support", text: "Support" },
  ];
  
  return (
    <>
      <HeroSub
        title="Support"
        description="Experience luxurious comfort with world-class amenities, peaceful surroundings, and an unforgettable stay tailored just for you."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Support />
    </>
  );
};

export default page;
