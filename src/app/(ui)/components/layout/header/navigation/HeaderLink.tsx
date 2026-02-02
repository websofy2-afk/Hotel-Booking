"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderItem } from "@/app/types/layout/menu";
import { FaChevronDown } from "react-icons/fa6";

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();

  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={item.href}
        className={`text-xl font-semibold flex py-[5px]  text-midnight_text hover:text-primary gap-1
        ${path === item.href ? 'text-primary' : ' text-black'} ${path.startsWith(`/${item.label.toLowerCase()}`) ? "text-primary " : null}`}
      >
        {item.label}
        {item.submenu && <FaChevronDown size={18} className="top-[6px] relative" />}
      </Link>

      {submenuOpen && (
        <div className={`absolute py-2 top-9 left-0 mt-0.5 w-40 bg-white shadow-lg rounded-lg `} data-aos="fade-up" data-aos-duration="300"
        >
          {item.submenu?.map((subItem, index) => (
            <Link key={index} href={subItem.href} className={`block px-4 py-2 text-midnight_text  ${path === subItem.href ? ' bg-skyBlue/50' : 'hover:bg-herobg/40'}`}>
              {subItem.label}
            </Link>
          ))}
        </div>
      )
      }
    </div >
  );
};

export default HeaderLink;
