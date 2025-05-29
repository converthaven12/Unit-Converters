import React from "react";
import { CommonConversions } from "../../../../../Helper/Menus";
import Link from "next/link";
import HeadingTag from "../HeadingTag/HeadingTag";

const LinkDisplay = () => {
  return (
    <div>
      <HeadingTag heading="Common Conversions" />
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 list-disc pl-6">
        {CommonConversions.map((item, index) => (
          <li key={index}>
            <Link href={item.path} className="text-blue-600 hover:underline">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkDisplay;
