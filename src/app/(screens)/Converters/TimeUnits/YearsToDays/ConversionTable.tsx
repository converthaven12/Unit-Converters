"use client";
import React from "react";

const ConversionTable = () => {
  // Sample data showing years and their equivalent days
  const data = [
    { years: 0.5, days: 0.5 * 365.25 },
    { years: 1, days: 365.25 },
    { years: 2, days: 2 * 365.25 },
    { years: 5, days: 5 * 365.25 },
    { years: 10, days: 10 * 365.25 },
  ];

  return (
    <div className="overflow-x-auto mt-6">
      <table className="w-full border-collapse border border-green-800">
        <thead>
          <tr className="bg-green-700 text-white">
            <th className="border border-green-900 px-4 py-2">Years</th>
            <th className="border border-green-900 px-4 py-2">Days</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ years, days }) => (
            <tr key={years} className="hover:bg-green-50 even:bg-green-100">
              <td className="border border-green-800 px-4 py-2">
                {years.toLocaleString()}
              </td>
              <td className="border border-green-800 px-4 py-2">
                {days.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
