
import { Photos } from "@/app/(ui)/components/gallery/photos/Photos";
import HeroSub from "@/app/(ui)/components/shared/hero-sub";

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/gallery/photos", text: "Photos" },
  ];
  
  return (
    <>
      <HeroSub
        title="Photos"
        description="Experience luxurious comfort with world-class amenities, peaceful surroundings, and an unforgettable stay tailored just for you."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Photos photoPage={true}/>
    </>
  );
};

export default page;
