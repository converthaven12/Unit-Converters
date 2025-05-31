"use client";
import React from "react";

const ConversionTable = () => {
  // Sample data showing months and their equivalent days (approximate)
  const data = [
    { months: 0.5, days: 0.5 * 30 },
    { months: 1, days: 30 },
    { months: 2, days: 60 },
    { months: 3, days: 90 },
    { months: 6, days: 180 },
    { months: 12, days: 360 },
  ];

  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Months</th>
          <th className="border border-gray-300 px-4 py-2">Days</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ months, days }) => (
          <tr key={months}>
            <td className="border border-gray-300 px-4 py-2">{months}</td>
            <td className="border border-gray-300 px-4 py-2">
              {days.toLocaleString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ConversionTable;
