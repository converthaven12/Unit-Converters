"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../../public/assests/logo1.png";
import ArrowDown from "../../../../../public/assests/arrow-down.svg";
import arrows from "../../../../../public/assests/sideMenuToggler.svg";
import { menus } from "../../../../../Helper/Menus";
import { useSidebar } from "../../../../app/utils/context/SidebarContext";

const Sidebar: React.FC = () => {
  const { isOpened, setIsOpened } = useSidebar();
  const [menusToMap, setMenusToMap] = useState<string | "">("");

  const KgConverters = menus.WeightAndMass;

  const handleMenuClick = (menu: string) => {
    setMenusToMap((prev) => (prev === menu ? "" : menu));
  };

  return (
    <div
      className={`bg-white p-4 font-alata font-normal text-xs text-nowrap min-h-screen h-screen
      flex flex-col border border-[#D7D7FB] transition-all duration-300
      ${!isOpened ? "w-[74px]" : "w-full md:w-[20dvw] xl:w-[18dvw]"}`}
    >
      <Image src={Logo} alt="logo" className="w-20 h-20 mx-auto" />
      <div className="flex flex-col flex-grow overflow-y-auto pr-1">
        {/* Weight And Mass Unit Conversions */}

        {isOpened && (
          <div
            className="flex items-center justify-between mb-4 cursor-pointer"
            onClick={() => handleMenuClick("WeightAndMass")}
          >
            <p className="text-xs">Weight And Mass Unit Conversions</p>
            <Image src={ArrowDown} alt="arrow_down" className="w-4 h-4" />
          </div>
        )}

        {menusToMap === "WeightAndMass" &&
          KgConverters.map((item: any, index: number) => (
            <Link
              href={item.path}
              key={index}
              className={`cursor-pointer gap-2 py-2 ml-5 rounded-md truncate 
              transition-all duration-200 ${
                item.isActive
                  ? "text-themeColor font-semibold"
                  : "text-[#575757] font-light hover:text-black"
              } ${!isOpened && "justify-center"}`}
            >
              {isOpened && (
                <p className="transition-opacity duration-100 text-xs">
                  {item.label}
                </p>
              )}
            </Link>
          ))}
      </div>

      <div className="w-full flex justify-end mt-2 pt-2 border-t border-gray-200">
        <Image
          src={arrows}
          height={15}
          alt="Collapse Toggle"
          title="Collapse"
          className={`cursor-pointer transition-transform duration-100 ${
            isOpened ? "rotate-180" : ""
          }`}
          onClick={() => setIsOpened(!isOpened)}
        />
      </div>
    </div>
  );
};

export default Sidebar;
