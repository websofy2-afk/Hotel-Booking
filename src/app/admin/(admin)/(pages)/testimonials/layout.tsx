import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Testimonials | LuxeLeaf"
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
