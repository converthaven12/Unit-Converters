"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../../utils/components/SideBar/Sidebar";
import {
  SidebarProvider,
  useSidebar,
} from "../../utils/context/SidebarContext";
import GetConversionAccordingToPathname from "@/app/utils/components/GetConversionAccordingToPathname/GetConversionAccordingToPathname";
import { usePathname, useRouter } from "next/navigation";
import units from "../../../../Helper/CheckUnits";
import DefinationsForUnit from "@/app/utils/components/DefinationsForUnit/DefinationsForUnit";
import { Menu } from "lucide-react";
import Dropdown from "@/app/utils/components/Dropdown/Dropdown";
import { DropDownOptions } from "../../../../Helper/Menus";

function InnerLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { isOpened, setIsOpened } = useSidebar();
  const [selectedOption, setSelectedOption] = useState<string | null>("");
  const router = useRouter();

  const sidebarWidth = isOpened
    ? "md:ml-[20dvw] xl:ml-[18dvw]"
    : "ml-0 md:ml-[74px]";

  const pathSegments = pathname?.split("/") || [];
  const isLinkedConversions = pathSegments[2] !== "linkedConversions";
  const unitSegment = pathSegments[3] || "";
  const baseUnit = unitSegment.split("To")[0] || "";

  const shouldShowConversion = isLinkedConversions && units.includes(baseUnit);

 useEffect(() => {
  if (selectedOption && selectedOption.trim() !== "") {
    router.push(`${selectedOption}`);
  }
}, [selectedOption]);

  return (
    <div className="flex min-h-screen relative">
      {/* Overlay on mobile when sidebar is open */}
      {isOpened && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setIsOpened(false)}
        />
      )}

      {/* Hamburger icon (mobile only or when sidebar closed) */}
      {!isOpened && (
        <button
          className="fixed top-4 right-4 z-40 md:hidden bg-white p-2 rounded-md shadow-md"
          onClick={() => setIsOpened(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      )}

      {/* Sidebar */}
      <div className="fixed top-0 h-full z-40">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div
        className={`bg-[#F5F5F9] w-full flex-1 flex flex-col overflow-y-auto py-5 px-3 md:px-0 transition-all duration-300 ${sidebarWidth}`}
      >
        <div className="px-0 md:px-5 flex-1 font-alata">
          <div className="mb-2">
            <Dropdown
              options={DropDownOptions}
              activeId={selectedOption}
              name="selectedOption"
              handleDropdownChange={(name, value) =>
                // if(value !== null || value !==)
                setSelectedOption(value as string)
              }
              placeHolder="Search converters"
              clearable={true}
            />
          </div>

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
