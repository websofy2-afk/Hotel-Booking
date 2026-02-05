"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Ellipsis, KeySquare } from "lucide-react";
import { RiSpeakAiLine } from "react-icons/ri";
import { FaBlogger, FaPhoneAlt, FaRegUser } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineBedroomParent, MdOutlineCategory, MdRateReview } from "react-icons/md";
import { useSidebar } from "@/context-api/SidebarContext";
import { FaHotel, FaMapLocationDot } from "react-icons/fa6";
import { BsPatchQuestion } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";
import { TbCategoryPlus } from "react-icons/tb";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; new?: boolean }[];
};

const navItems: NavItem[] = [
  {
    icon: <LuLayoutDashboard size={18} />,
    name: "Dashboard",
    path: "/admin/dashboard"
  },
  {
    name: "Enquiry",
    icon: <RiSpeakAiLine size={18} />,
    path: "/admin/enquiry-records"
  },
  // {
  //   icon: <FaBlogger size={18} />,
  //   name: "Blogs",
  //   path: "/admin/blogs",
  // },
  {
    name: "Contact Us",
    icon: <FaPhoneAlt size={15} />,
    path: "/admin/contact-us"

  },
  // {
  //   name: "Blog Category",
  //   icon: <MdOutlineCategory size={18} />,
  //   path: "/admin/blog-category"

  // },
  {
    name: "Hotel Location",
    icon: <FaMapLocationDot size={18} />,
    path: "/admin/hotel-location"
  },
  {
    name: "Gallery",
    icon: <GrGallery size={18} />,
    subItems: [
      { name: "Photos", path: "/admin/gallery/photos" },
      { name: "Videos", path: "/admin/gallery/videos" },
    ],

  },
  {
    name: "Testimonials",
    icon: <MdRateReview size={18} />,
    path: "/admin/testimonials"
  },
  {
    name: "Hotels",
    icon: <FaHotel size={15} />,
    path: "/admin/hotels"
  },
  {
    name: "Rooms",
    icon: <MdOutlineBedroomParent size={18} />,
    path: "/admin/rooms"
  },
  {
    name: "Room Category",
    icon: <TbCategoryPlus size={18} />,
    path: "/admin/room-category"
  },
  {
    name: "FAQs",
    icon: <BsPatchQuestion size={18} />,
    path: "/admin/faq"
  },
  {
    icon: <FaRegUser size={18} />,
    name: "User Profile",
    path: "/admin/profile",
  },
];

const othersItems: NavItem[] = [
  {
    icon: <KeySquare />,
    name: "Authentication",
    subItems: [
      { name: "Sign In", path: "/signin" },
      { name: "Sign Out", path: "/logout" },
    ],
  },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();

  const renderMenuItems = (
    navItems: NavItem[],
    menuType: "main" | "others"
  ) => (
    <ul className="flex flex-col gap-4">
      {navItems.map((nav, index) => (
        <li key={nav.name}>
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(index, menuType)}
              className={`menu-item group  ${openSubmenu?.type === menuType && openSubmenu?.index === index
                ? "menu-item-active"
                : "menu-item-inactive"
                } cursor-pointer ${!isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "lg:justify-start"
                }`}
            >
              <span
                className={` ${openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-icon-active"
                  : "menu-item-icon-inactive"
                  }`}
              >
                {nav.icon}
              </span>
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className={`menu-item-text`}>{nav.name}</span>
              )}
              {(isExpanded || isHovered || isMobileOpen) && (
                <ChevronDown
                  className={`ml-auto w-5 h-5 transition-transform duration-200  ${openSubmenu?.type === menuType &&
                    openSubmenu?.index === index
                    ? "rotate-180 text-brand-500"
                    : ""
                    }`}
                />
              )}
            </button>
          ) : (
            nav.path && (
              <Link
                href={nav.path}
                className={`menu-item group ${isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                  }`}
              >
                <span
                  className={`${isActive(nav.path)
                    ? "menu-item-icon-active"
                    : "menu-item-icon-inactive"
                    }`}
                >
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className={`menu-item-text`}>{nav.name}</span>
                )}
              </Link>
            )
          )}
          {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
            <div
              ref={(el) => {
                subMenuRefs.current[`${menuType}-${index}`] = el;
              }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? `${subMenuHeight[`${menuType}-${index}`]}px`
                    : "0px",
              }}
            >
              <ul className="mt-2 space-y-1 ml-9">
                {nav.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      href={subItem.path}
                      className={`menu-dropdown-item ${isActive(subItem.path)
                        ? "menu-dropdown-item-active"
                        : "menu-dropdown-item-inactive"
                        }`}
                    >
                      {subItem.name}
                      <span className="flex items-center gap-1 ml-auto">
                        {subItem.new && (
                          <span
                            className={`ml-auto ${isActive(subItem.path)
                              ? "menu-dropdown-badge-active"
                              : "menu-dropdown-badge-inactive"
                              } menu-dropdown-badge `}
                          >
                            new
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  const [openSubmenu, setOpenSubmenu] = useState<{
    type: "main" | "others";
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {}
  );
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const isActive = useCallback((path: string) => path === pathname, [pathname]);

  useEffect(() => {
    let submenuMatched = false;
    ["main", "others"].forEach((menuType) => {
      const items = menuType === "main" ? navItems : othersItems;
      items.forEach((nav, index) => {
        if (nav.subItems) {
          nav.subItems.forEach((subItem) => {
            if (isActive(subItem.path)) {
              setOpenSubmenu({
                type: menuType as "main" | "others",
                index,
              });
              submenuMatched = true;
            }
          });
        }
      });
    });
    if (!submenuMatched) {
      setOpenSubmenu(null);
    }
  }, [pathname, isActive]);

  useEffect(() => {
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index: number, menuType: "main" | "others") => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (
        prevOpenSubmenu &&
        prevOpenSubmenu.type === menuType &&
        prevOpenSubmenu.index === index
      ) {
        return null;
      }
      return { type: menuType, index };
    });
  };

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-light text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-border shadow-md shadow-skyBlue/20
        ${isExpanded || isMobileOpen
          ? "w-[290px]"
          : isHovered
            ? "w-[290px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-4 flex  ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
          }`}
      >
        <Link href="/admin/logout">
          {isExpanded || isHovered || isMobileOpen ? (
            <div className="w-64 flex justify-center items-center">
              <Image
                src="/images/logo/logo.png"
                alt="Logo"
                width={180}
                height={20}
              />
            </div>
          ) : (
            <Image
              src="/images/logo/logo.png"
              alt="Logo"
              width={500}
              height={500}
            />
          )}
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear hide-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>
              <h2
                className={`mb-4 text-sm uppercase flex leading-[20px] text-midnight_text font-bold ${!isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "justify-start"
                  }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  "Menu"
                ) : (
                  <Ellipsis />
                )}
              </h2>
              {renderMenuItems(navItems, "main")}
            </div>

          </div>
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;
