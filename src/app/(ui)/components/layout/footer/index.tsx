"use client";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import Logo from "../header/logo";
import { footerData } from "./footerData";

export default function Footer() {
  return (
    <footer className="bg-semidark text-white pt-16 pb-10">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="mb-4 transition-all duration-300 hover:brightness-150 hover:scale-105">
            <Logo />
          </div>
          <p className="mb-6 max-w-xs">
            Experience luxury, comfort and unforgettable hospitality. Where elegance meets relaxation.
          </p>
          <div className="flex gap-4 mt-4">
            {
              footerData?.socialMedia.map((item, index) => (
                <Link key={index} title={item.socialMediaName} target="_blank"
                  rel="noopener noreferrer" href={item.url} className="w-10 h-10 flex items-center justify-center rounded-full bg-white transition">
                  {item.icon}
                </Link>
              ))
            }
          </div>
        </div>
        <div>

          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {
              footerData?.quickLinks.map((item, index) => (
                <li key={index} className="flex items-center gap-1">
                  <FaAngleRight />
                  <Link href={item.url} className="hover:text-skyBlue transition">{item.title}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Amenities</h3>
          <ul className="space-y-3">
            {
              footerData?.services.map((item, index) => (
                <li key={index} className="flex items-center gap-1">
                  <FaAngleRight />
                  <Link href={item.url} className="hover:text-skyBlue transition">{item.title}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
          <div className="space-y-3 text-gray-300 mb-4">
            {
              footerData?.contactDetails.map((item, index) => (
                <ul key={index} className="flex flex-col">
                  {
                    item.url.startsWith("https") ? <li className="flex items-center gap-3">
                      {item.icon}
                      <Link
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-skyBlue transition text-ftextcol mb-0"
                      >
                        <span>Websofy Software Pvt. Ltd., Indira Nagar, Lucknow, Uttar Pradesh</span>
                      </Link>
                    </li> :
                      <li className="flex items-center gap-3 mt-3">
                        {item.icon}
                        <Link
                          href={item.url}
                          className="hover:text-skyBlue transition text-ftextcol mb-0"
                        >
                          {item.title}
                        </Link>
                      </li>
                  }
                </ul>
              ))
            }
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-sm">
        <p className="text-center text-SlateBlueText text-sm">
          © {new Date().getFullYear()} All Rights Reserved by{" "}
          <Link href="/" className="hover:text-skyBlue uppercase font-semibold mb-4 text-secondary">
            LuxeLeaf | STAY RELAX REPEAT.{" "}</Link>Designed by :{" "}
          <Link
            href="https://www.websofy.com/"
            className="hover:text-green-800 font-semibold mb-4 text-secondary"
            target="_blank">
            Websofy Software Pvt. Ltd.
          </Link>
        </p>
      </div>
    </footer>
  );
}
