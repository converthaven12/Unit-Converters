"use client";

import React from "react";
import Link from "next/link";

const CategoryLinkBtn = () => {
  return (
    <div className="mt-4 text-center">
      <p className="mb-2 text-gray-700">Or check out more converters:</p>
      <Link
        href="/Converters"
        className="inline-block bg-gray-100 hover:bg-gray-200 text-black font-medium py-2 px-4 rounded border border-gray-300 transition"
      >
        Browse All Categories
      </Link>
    </div>
  );
};

export default CategoryLinkBtn;
