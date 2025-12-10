import { DM_Sans } from "next/font/google";
import "./globals.css";
import Aoscompo from "@/utils/aos";
const dmsans = DM_Sans({ subsets: ["latin"] });
import NextTopLoader from 'nextjs-toploader';
// import { AppContextProvider } from "../context-api/PropertyContext";
import Footer from "./components/layout/footer";
import ScrollToTop from "./components/scroll-to-top";
import Header from "./components/layout/header";
import { Metadata } from "next";
import { AppContextProvider } from "@/context-api/CategoryContext";

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
        <AppContextProvider>
          <Aoscompo>
            <Header />
            <NextTopLoader />
            {children}
            <Footer />
          </Aoscompo>
          <ScrollToTop />
        </AppContextProvider>
      </body>
    </html>
  );
}
