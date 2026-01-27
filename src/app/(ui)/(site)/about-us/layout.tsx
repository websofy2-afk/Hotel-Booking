import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | LuxeLeaf",
};

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
