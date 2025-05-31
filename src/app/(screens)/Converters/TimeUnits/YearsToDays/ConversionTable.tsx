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
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Years</th>
          <th className="border border-gray-300 px-4 py-2">Days</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ years, days }) => (
          <tr key={years}>
            <td className="border border-gray-300 px-4 py-2">{years}</td>
            <td className="border border-gray-300 px-4 py-2">
              {days.toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ConversionTable;
