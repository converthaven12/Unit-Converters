"use client";

import Link from "next/link";
import React from "react";

interface MoreConversionsLinkProps {
  heading: string;
  link: string;
  label: string;
}

const LinkToOthers: React.FC<MoreConversionsLinkProps> = ({
  heading,
  link,
  label,
}) => {
  return (
    <div className="group p-6 mt-6 border border-gray-200 rounded-xl bg-white hover:border-blue-500 transition-all duration-200 shadow-sm hover:shadow-md">
      <h2 className="text-xl font-semibold text-gray-900 mb-3">{heading}</h2>
      <Link
        href={link}
        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
      >
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </Link>
    </div>
  );
};

export default LinkToOthers;
