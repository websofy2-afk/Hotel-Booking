import HeroSub from "../../components/shared/hero-sub";
import Support from "../../components/support";

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
