"use client";

import React from "react";
import CategoryLinkBtn from "../LinkToOthers/CategoryLinkBtn"; // ✅ Fixed import

const LockedConverter = () => {
  return (
    <div className="locked-converter-wrapper">
      <div className="locked-message">
        <h2 className="text-2xl font-bold mb-2">This Converter is Locked 🔒</h2>
        <p className="mb-4 text-gray-600">
          Unlock this and 200+ converters on ConvertHaven.com
        </p>

        {/* Example of a redirect button */}
        <a
          href="https://www.converthaven.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition"
        >
          Visit ConvertHaven.com
        </a>

        {/* Optional: Button to browse other categories */}
        <div className="mt-6">
          <CategoryLinkBtn />
        </div>
      </div>
    </div>
  );
};

export default LockedConverter;
