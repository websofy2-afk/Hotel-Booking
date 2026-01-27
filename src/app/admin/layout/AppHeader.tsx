"use client";
import { useSidebar } from "@/app/context/SidebarContext";
import { Ellipsis, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import UserDropdown from "../components/header/UserDropdown";
import { LuChevronsRightLeft } from "react-icons/lu";

const AppHeader: React.FC = () => {
  const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);
  const { isMobileOpen, toggleSidebar, toggleMobileSidebar, isExpanded, isHovered } = useSidebar();

  const handleToggle = () => {
    if (window.innerWidth >= 1024) {
      toggleSidebar();
    } else {
      toggleMobileSidebar();
    }
  };

  const toggleApplicationMenu = () => {
    setApplicationMenuOpen(!isApplicationMenuOpen);
  };
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className={`fixed top-0 flex ${isExpanded || isHovered ? "w-[77.5vw]": "w-[93vw]"} bg-white  lg:border-b`}>
      <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-6">
        <div className="flex items-center justify-between w-[120%] gap-2 px-3 py-3 border-b border-SlateBlueText/20 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4">
          <button
            className="flex items-center justify-center cursor-pointer w-10 h-10 text-MidnightNavyText border-gray-200 rounded-lg z-99999 lg:h-11 lg:w-11 lg:border"
            onClick={handleToggle}
            aria-label="Toggle Sidebar"
          >
            {isMobileOpen ? (
              <X />
            ) : (
              <LuChevronsRightLeft size={22} />
            )}
          </button>

          <Link href="/" className="flex justify-center items-center lg:hidden">
            <Image
              width={50}
              height={50}
              src="/images/logo/stintwol-logo.png"
              alt="Logo"
            />
            <div className="w-full">
              <h6 className="ml-2 text-center text-MidnightNavyText font-semibold text-[7px]">Stintwol</h6>
            </div>
          </Link>
          <button
            onClick={toggleApplicationMenu}
            className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg z-99999 hover:bg-gray-100 lg:hidden"
          >
            <Ellipsis />
          </button>

          <div className="hidden lg:block w-48 text-MidnightNavyText">
            <h1 className="ml-2 text-center font-semibold text-3xl">Stintwol</h1>
          </div>
        </div>
        <div
          className={`${isApplicationMenuOpen ? "flex" : "hidden"
            } items-center justify-between w-full gap-4 px-5 py-4 lg:flex shadow-theme-md lg:justify-end lg:px-0 lg:shadow-none`}
        >
          <UserDropdown />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;










