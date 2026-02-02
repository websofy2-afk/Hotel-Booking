import { Videos } from "@/app/(ui)/components/gallery/videos/Videos";
import HeroSub from "@/app/(ui)/components/shared/hero-sub";

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/gallery/videos", text: "Videos" },
  ];
  
  return (
    <>
      <HeroSub
        title="Videos"
        description="Experience luxurious comfort with world-class amenities, peaceful surroundings, and an unforgettable stay tailored just for you."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Videos />
    </>
  );
};

export default page;
