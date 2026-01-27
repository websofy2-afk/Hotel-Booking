import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | LuxeLeaf",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

