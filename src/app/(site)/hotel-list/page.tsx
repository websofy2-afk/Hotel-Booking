import { Metadata } from "next";
import HotelsList from "@/app/components/hotel-lists";

export const metadata: Metadata = {
  title: "Hotel Details | LuxeLeaf",
};

const page = () => {
  return <HotelsList />
};

export default page;
