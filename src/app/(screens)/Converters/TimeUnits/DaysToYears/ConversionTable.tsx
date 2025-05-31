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
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Days</th>
          <th className="border border-gray-300 px-4 py-2">Years</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ days, years }) => (
          <tr key={days}>
            <td className="border border-gray-300 px-4 py-2">
              {days.toLocaleString()}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {years.toFixed(3)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ConversionTable;
