import HeroSub from "../../components/shared/hero-sub";
import Gallery from "../../components/gallery";


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
