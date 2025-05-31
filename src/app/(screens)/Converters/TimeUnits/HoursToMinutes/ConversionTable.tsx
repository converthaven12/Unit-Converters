"use client";
import React from "react";

const ConversionTable = () => {
  const data = [
    { hours: 0.5, minutes: 30 },
    { hours: 1, minutes: 60 },
    { hours: 1.5, minutes: 90 },
    { hours: 2, minutes: 120 },
    { hours: 3, minutes: 180 },
    { hours: 4, minutes: 240 },
    { hours: 5, minutes: 300 },
    { hours: 6, minutes: 360 },
    { hours: 7.5, minutes: 450 },
    { hours: 10, minutes: 600 },
  ];

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full table-auto border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">Hours</th>
            <th className="px-4 py-2 border">Minutes</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="text-center">
              <td className="px-4 py-2 border">{row.hours}</td>
              <td className="px-4 py-2 border">{row.minutes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
