import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos | LuxeLeaf",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

