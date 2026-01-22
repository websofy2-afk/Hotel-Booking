import AdvanceSearch from "@/app/(ui)/components/property-list/search";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties List",
};

const Page = ({ searchParams }: any) => {
  const category = searchParams?.category || ''; 

  return (
    <>
      <AdvanceSearch category={category} />
    </>
  );
};

export default Page;
