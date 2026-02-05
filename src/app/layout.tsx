import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmsans = DM_Sans({ subsets: ["latin"] });
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LuxeLeaf | Stay Relax Repeat",
  description: "LuxeLeaf – Stay. Relax. Repeat. Enjoy luxury rooms, world-class amenities, and personalized service for a relaxing and unforgettable stay.",
  icons: {
    icon: "/images/logo/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmsans.className}`}>
        {children}
      </body>
    </html>
  );
}
