import { AppContextProvider } from "@/context-api/CategoryContext";
import Aoscompo from "@/utils/aos";
import NextTopLoader from "nextjs-toploader";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import ScrollToTop from "./components/scroll-to-top";
import { PropertyContextProvider } from "@/context-api/PropertyContext";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <NextTopLoader />
            <PropertyContextProvider>
                <AppContextProvider>
                    <Aoscompo />
                    <Header />
                    {children}
                    <Footer />
                    <ScrollToTop />
                </AppContextProvider>
            </PropertyContextProvider>
        </>
    );
}