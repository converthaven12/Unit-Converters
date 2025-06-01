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
    <div className="mt-8 p-4 border rounded-lg shadow-sm bg-gray-50">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{heading}</h2>
      <Link
        href={link}
        className="inline-block text-blue-600 hover:underline font-medium"
      >
        {label}
      </Link>
    </div>
  );
};

export default LinkToOthers;
