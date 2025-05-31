"use client";

import React from "react";

const ConversionTable = () => {
  // Sample data showing days and their equivalent seconds
  const data = [
    { days: 0.5, seconds: 0.5 * 86400 },
    { days: 1, seconds: 86400 },
    { days: 2, seconds: 2 * 86400 },
    { days: 5, seconds: 5 * 86400 },
    { days: 10, seconds: 10 * 86400 },
  ];

  return (
    <div className="overflow-x-auto mt-6">
      <table className="w-full border-collapse border border-green-800">
        <thead>
          <tr className="bg-green-700 text-white">
            <th className="border border-green-900 px-4 py-2">Days</th>
            <th className="border border-green-900 px-4 py-2">Seconds</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ days, seconds }) => (
            <tr key={days} className="hover:bg-green-50 even:bg-green-100">
              <td className="border border-green-800 px-4 py-2">{days}</td>
              <td className="border border-green-800 px-4 py-2">
                {seconds.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
