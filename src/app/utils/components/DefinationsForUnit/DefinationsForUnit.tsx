import React, { useEffect, useState } from "react";
import units from "../../../../../Helper/Defination";
const DefinationsForUnit = () => {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const UnitName = localStorage.getItem("recentPath");
    setData(units[UnitName as keyof typeof units]);
  }, [localStorage.getItem("recentPath")]);
  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="space-y-2" key={index}>
            <h1 className="text-xl text-[#006633] font-semibold mt-10">
              {item.unit}
            </h1>
            <p className="mt-2 text-gray-500">{item.description}</p>
            <p className="mt-2 font-semibold">
              Example:- <span className="font-normal">{item.example}</span>
            </p>
          </div>
        );
      })}
    </>
  );
};

export default DefinationsForUnit;
