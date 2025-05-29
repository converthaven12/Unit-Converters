"use client";
import React from "react";
import Sidebar from "../../utils/components/SideBar/Sidebar";
import {
  SidebarProvider,
  useSidebar,
} from "../../utils/context/SidebarContext";

function InnerLayout({ children }: { children: React.ReactNode }) {
  const { isOpened } = useSidebar();
  const sidebarWidth = isOpened ? "md:ml-[20dvw] xl:ml-[18dvw]" : "ml-[74px]";

  return (
    <div className="flex min-h-screen">
      <div className="fixed top-0 h-full z-10">
        <Sidebar />
      </div>
      <div
        className={`w-full flex-1 flex flex-col overflow-y-auto py-5 px-3 md:px-0 transition-all duration-300 ${sidebarWidth}`}
      >
        <div className="px-0 md:px-5 flex-1 font-alata">{children}</div>
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
