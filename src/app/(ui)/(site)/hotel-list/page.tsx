import { Metadata } from "next";
import HotelsList from "../../components/hotel-lists";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Hotel Details | LuxeLeaf",
};

const page = () => {
  return (
    <Suspense fallback={<div>Loading hotels...</div>}>
      <HotelsList />
    </Suspense>
  )
};

export default page;
