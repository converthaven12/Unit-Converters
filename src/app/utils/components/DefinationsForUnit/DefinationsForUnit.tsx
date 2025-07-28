"use client";

import React, { useEffect, useState } from "react";
import units from "../../../../helper/Defination";

const DefinationsForUnit: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const UnitName = localStorage.getItem("recentPath") as keyof typeof units;
      if (UnitName) {
        setData(units[UnitName] || []);
      }
    }
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
