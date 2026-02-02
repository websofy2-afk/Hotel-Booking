import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQs | LuxeLeaf"
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
