import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Room Category | LuxeLeaf"
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>{children}</>
    );
}
