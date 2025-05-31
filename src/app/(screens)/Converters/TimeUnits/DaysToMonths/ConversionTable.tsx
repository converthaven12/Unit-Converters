"use client";
import React from "react";

const ConversionTable = () => {
  // Sample data showing days and their equivalent months (approximate)
  const data = [
    { days: 15, months: (15 / 30).toFixed(2) },
    { days: 30, months: (30 / 30).toFixed(2) },
    { days: 45, months: (45 / 30).toFixed(2) },
    { days: 60, months: (60 / 30).toFixed(2) },
    { days: 90, months: (90 / 30).toFixed(2) },
  ];

  return (
    <div className="overflow-x-auto mt-6">
      <table className="w-full border-collapse border border-green-800">
        <thead>
          <tr className="bg-green-700 text-white">
            <th className="border border-green-900 px-4 py-2">Days</th>
            <th className="border border-green-900 px-4 py-2">Months</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ days, months }) => (
            <tr key={days} className="hover:bg-green-50">
              <td className="border border-green-800 px-4 py-2">{days}</td>
              <td className="border border-green-800 px-4 py-2">{months}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
