"use client";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { IoChevronDownOutline } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { PiSignOutBold } from "react-icons/pi";
import { FaUserEdit } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";


export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const email = localStorage.getItem("userEmail");
        if (!email) return;
        const res = await fetch(`/api/auth/user-profile/get-user?email=${email}`);
        const data = await res.json();
        setUser({
          firstName: data.user.firstName,
          lastName: data.user.lastName,
          email: data.user.email,
        })
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  function toggleDropdown(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }

  function closeDropdown() {
    setIsOpen(false);
  }
  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center cursor-pointer text-MidnightNavyText dropdown-toggle"
      >
        <span className="mr-3 overflow-hidden rounded-full h-11 w-11">
          <Image
            width={44}
            height={44}
            src="/images/logo/user.jpg"
            alt="User"
          />
        </span>

        <span className="block mr-1 font-medium text-MidnightNavyText text-16">{user.firstName} {user.lastName}  </span>
        <IoChevronDownOutline size={25} className={`stroke-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="absolute right-0 mt-[17px] flex w-[260px] flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-xl"
      >
        <div>
          <span className="block font-medium text-MidnightNavyText text-sm">
            {user.firstName} {user.lastName}
          </span>
          <span className="mt-0.5 block text-sm text-learning">
            {user.email}
          </span>
        </div>

        <ul className="flex flex-col gap-1 pt-4 pb-3 border-b border-SlateBlueText/20">
          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              tag="a"
              href="/admin/profile"
              className="flex items-center gap-3 px-3 py-2 font-medium text-MidnightNavyText rounded-lg group hover:bg-SlateBlueText/10 hover:text-MidnightNavyText/80"
            >
              <FaUserEdit size={20}/>
              <span className="text-16">Edit Profile</span>
             
            </DropdownItem>
          </li>
        </ul>
        <Link
          href="/admin/logout"
          className="flex items-center gap-3 px-4 py-2 mt-3 font-medium text-MidnightNavyText rounded-lg group hover:bg-SlateBlueText/10 hover:text-MidnightNavyText/80">
          <PiSignOutBold size={20}/>
          <span className="text-16">Sign Out</span>
          
        </Link>
      </Dropdown>
    </div>
  );
}
