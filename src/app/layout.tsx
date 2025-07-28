// File: src/app/layout.tsx

import "./globals.css";
import React from "react";

// ↓ Corrected: import PageHeader from the app-level components folder
import PageHeader from "./components/PageHeader";

// Any other root‑level providers or styles…
import { SidebarProvider } from "./utils/context/SidebarContext";

// ↓ Corrected: go up one level from app/ to src/, then into helper/
import units from "../helper/CheckUnits";
import { menus } from "../helper/Menus";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* your <head> content */}
      </head>
      <body>
        <SidebarProvider>
          {/* Optionally render a header on every page */}
          <PageHeader />

          {/* Now render the page content */}
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
