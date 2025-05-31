"use client";
import React from "react";

const ConversionTable = () => {
  const conversionData = [
    { days: 0.5, hours: 12 },
    { days: 1, hours: 24 },
    { days: 2, hours: 48 },
    { days: 3, hours: 72 },
    { days: 5, hours: 120 },
    { days: 7, hours: 168 },
    { days: 10, hours: 240 },
  ];

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full table-auto border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border">Days</th>
            <th className="px-4 py-2 border">Hours</th>
          </tr>
        </thead>
        <tbody>
          {conversionData.map((row, index) => (
            <tr key={index} className="text-center">
              <td className="px-4 py-2 border">{row.days}</td>
              <td className="px-4 py-2 border">{row.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
