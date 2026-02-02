import HeroSub from "../../components/shared/hero-sub";
import { LocationListing } from "../../components/home/hotel-list";

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
      <LocationListing locationPage={true} />
    </>
  );
};

export default page;
