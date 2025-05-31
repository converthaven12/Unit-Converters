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
      <table className="min-w-full table-auto border border-green-800">
        <thead className="bg-green-700 text-white">
          <tr>
            <th className="px-4 py-2 border border-green-900 text-center">
              Hours
            </th>
            <th className="px-4 py-2 border border-green-900 text-center">
              Minutes
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="text-center hover:bg-green-50 even:bg-green-100"
            >
              <td className="px-4 py-2 border border-green-800">{row.hours}</td>
              <td className="px-4 py-2 border border-green-800">
                {row.minutes}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
