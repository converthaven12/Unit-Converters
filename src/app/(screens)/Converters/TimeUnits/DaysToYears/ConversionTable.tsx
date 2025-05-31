"use client";
import React from "react";

const ConversionTable = () => {
  // Sample data showing days and their equivalent years
  const data = [
    { days: 182.625, years: 182.625 / 365.25 }, // Half a year
    { days: 365.25, years: 1 }, // 1 year
    { days: 730.5, years: 2 }, // 2 years
    { days: 1095.75, years: 3 }, // 3 years
    { days: 1826.25, years: 5 }, // 5 years
  ];

  return (
    <div className="overflow-x-auto mt-6">
      <table className="w-full border-collapse border border-green-800">
        <thead>
          <tr className="bg-green-700 text-white">
            <th className="border border-green-900 px-4 py-2">Days</th>
            <th className="border border-green-900 px-4 py-2">Years</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ days, years }) => (
            <tr key={days} className="hover:bg-green-50 even:bg-green-100">
              <td className="border border-green-800 px-4 py-2">
                {days.toLocaleString()}
              </td>
              <td className="border border-green-800 px-4 py-2">
                {years.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
