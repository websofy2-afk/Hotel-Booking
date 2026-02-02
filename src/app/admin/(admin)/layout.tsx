"use client";
import AppSidebar from "../layout/AppSidebar";
import AppHeader from "../layout/AppHeader";
import React from "react";
import { useSidebar } from "@/context-api/SidebarContext";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();
  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[290px]"
    : "lg:ml-[90px]";

  return (
    <div className="min-h-screen xl:flex">
      <AppSidebar />
      <div
        className={`flex-1  transition-all  duration-300 ease-in-out ${mainContentMargin}`}
      >
        <AppHeader />
        <div className="p-4 mx-auto max-w-[1536px] md:p-6">{children}</div>
      </div>
    </div>
  );
}
