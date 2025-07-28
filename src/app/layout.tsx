// File: src/app/layout.tsx

import "./globals.css";
import React from "react";
import PageHeader from "./components/PageHeader";
import { SidebarProvider } from "./utils/context/SidebarContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* You can add favicon, meta tags, etc. here */}
      </head>
      <body>
        <SidebarProvider>
          {/* Now passing a default title so PageHeader compiles */}
          <PageHeader title="Home" />
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
