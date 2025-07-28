"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// 5 levels up: CategoryList → components → utils → app → src, then into helper
import { menus } from "../../../../../helper/Menus";

type MenuItem = { label: string; path: string };
type Menus = Record<string, MenuItem[]>;

const CategoryLinksList: React.FC = () => {
  const pathname = usePathname();

  const currentCategoryKey = Object.keys(menus).find((categoryKey) =>
    menus[categoryKey].some((item) => pathname.startsWith(item.path))
  );
  if (!currentCategoryKey) return null;

  const filteredItems = menus[currentCategoryKey].filter(
    (item) => item.path !== pathname
  );
  const heading = currentCategoryKey.replace(/([A-Z])/g, " $1").trim();

  return (
    <div>
      <h1 className="text-xl text-[#006633] font-semibold my-4 ml-2">
        {heading}
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 list-disc pl-6">
        {filteredItems.map(({ label, path }) => (
          <li key={path} className="list-none">
            <Link href={path} className="text-green-600 hover:underline">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryLinksList;
