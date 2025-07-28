"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../../public/assests/unitlogo.png";
import ArrowDown from "../../../../../public/assests/arrow-down.svg";
import arrows from "../../../../../public/assests/sideMenuToggler.svg";
// ↓── corrected: 4 levels up, lowercase 'helper' ──↓
import { menus } from "../../../../helper/Menus";
import { useSidebar } from "../../../../app/utils/context/SidebarContext";
import { CalculatorIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const { isOpened, setIsOpened } = useSidebar();
  const [openSection, setOpenSection] = useState<string | "">("");

  const handleMenuClick = (menuKey: string) => {
    setOpenSection((prev) => (prev === menuKey ? "" : menuKey));
  };

  return (
    <div
      className={`bg-white p-4 font-alata font-normal text-xs text-nowrap min-h-screen h-screen
      flex flex-col border border-[#D7D7FB] transition-all duration-300 z-50
      ${
        !isOpened
          ? "hidden md:block w-[74px]"
          : "w-[75vw] md:w-[20dvw] xl:w-[18dvw]"
      }`}
    >
      {/* …rest of your JSX remains unchanged… */}
    </div>
  );
};

export default Sidebar;
