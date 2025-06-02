"use client";
import React from "react";
import Sidebar from "../../utils/components/SideBar/Sidebar";
import {
  SidebarProvider,
  useSidebar,
} from "../../utils/context/SidebarContext";
import GetConversionAccordingToPathname from "@/app/utils/components/GetConversionAccordingToPathname/GetConversionAccordingToPathname";
import { usePathname } from "next/navigation";
import units from "../../../../Helper/CheckUnits";
import DefinationsForUnit from "@/app/utils/components/DefinationsForUnit/DefinationsForUnit";

function InnerLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { isOpened } = useSidebar();
  const sidebarWidth = isOpened ? "md:ml-[20dvw] xl:ml-[18dvw]" : "ml-[74px]";

  // Safely extract path segments
  const pathSegments = pathname?.split("/") || [];
  const isLinkedConversions = pathSegments[2] !== "linkedConversions";
  const unitSegment = pathSegments[3] || "";
  const baseUnit = unitSegment.split("To")[0] || "";

  const shouldShowConversion = isLinkedConversions && units.includes(baseUnit);

  return (
    <div className="flex min-h-screen">
      <div className="fixed top-0 h-full z-10">
        <Sidebar />
      </div>
      <div
        className={`bg-[#F5F5F9] w-full flex-1 flex flex-col overflow-y-auto py-5 px-3 md:px-0 transition-all duration-300 ${sidebarWidth}`}
      >
        <div className="px-0 md:px-5 flex-1 font-alata">
          {children}
          {shouldShowConversion && <GetConversionAccordingToPathname />}
          {!isLinkedConversions && <DefinationsForUnit />}
        </div>
      </div>
    </div>
  );
}

export default function ConvertersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <InnerLayout>{children}</InnerLayout>
    </SidebarProvider>
  );
}
