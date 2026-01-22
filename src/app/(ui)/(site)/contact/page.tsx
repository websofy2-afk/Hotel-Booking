import { Metadata } from "next";
import HeroSub from "../../components/shared/hero-sub";
import Contact from "../../components/contact";

export const metadata: Metadata = {
  title: "Contact Us | LuxeLeaf",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <HeroSub
        title="Contact Us"
        description="Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing Variou"
        breadcrumbLinks={breadcrumbLinks}
      />
      <Contact/>
    </>
  );
};

export default page;
