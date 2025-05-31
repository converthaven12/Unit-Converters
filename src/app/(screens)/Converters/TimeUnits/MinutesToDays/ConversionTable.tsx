"use client";

import React from "react";

const ConversionTable = () => {
  // Sample data showing minutes and their equivalent days
  const data = [
    { minutes: 720, days: 720 / 1440 }, // Half day
    { minutes: 1440, days: 1 }, // 1 day
    { minutes: 2880, days: 2 }, // 2 days
    { minutes: 7200, days: 5 }, // 5 days
    { minutes: 14400, days: 10 }, // 10 days
  ];

  return (
    <div className="overflow-x-auto mt-6">
      <table className="w-full border-collapse border border-green-800">
        <thead>
          <tr className="bg-green-700 text-white">
            <th className="border border-green-900 px-4 py-2">Minutes</th>
            <th className="border border-green-900 px-4 py-2">Days</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ minutes, days }) => (
            <tr key={minutes} className="hover:bg-green-50 even:bg-green-100">
              <td className="border border-green-800 px-4 py-2">
                {minutes.toLocaleString()}
              </td>
              <td className="border border-green-800 px-4 py-2">
                {days.toFixed(4)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
