"use client";

import React, { useEffect, useState } from "react";
// ↓ default-import the Defination map
import Defination from "../../../../helper/Defination";

import type { DefinitionEntry } from "../../../../helper/Defination";

const DefinationsForUnit: React.FC = () => {
  const [data, setData] = useState<DefinitionEntry[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const UnitName = localStorage.getItem("recentPath") || "";
    // Look up the array (or fallback to empty)
    setData(Defination[UnitName] || []);
  }, []);

  return (
    <>
      {data.map((item, index) => (
        <div className="space-y-2" key={index}>
          <h1 className="text-xl text-[#006633] font-semibold mt-10">
            {item.unit}
          </h1>
          <p className="mt-2 text-gray-500">{item.description}</p>
          <p className="mt-2 font-semibold">
            Example: <span className="font-normal">{item.example}</span>
          </p>
        </div>
      ))}
    </>
  );
};

export default DefinationsForUnit;
