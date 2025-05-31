"use client";

import React from "react";

const ConversionTable = () => {
  // Sample data showing milliseconds and their equivalent seconds
  const data = [
    { milliseconds: 500, seconds: 500 / 1000 },
    { milliseconds: 1000, seconds: 1000 / 1000 },
    { milliseconds: 1500, seconds: 1500 / 1000 },
    { milliseconds: 2000, seconds: 2000 / 1000 },
    { milliseconds: 5000, seconds: 5000 / 1000 },
  ];

  return (
    <div className="overflow-x-auto mt-6">
      <table className="w-full border-collapse border border-green-800">
        <thead>
          <tr className="bg-green-700 text-white">
            <th className="border border-green-900 px-4 py-2">Milliseconds</th>
            <th className="border border-green-900 px-4 py-2">Seconds</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ milliseconds, seconds }) => (
            <tr
              key={milliseconds}
              className="hover:bg-green-50 even:bg-green-100"
            >
              <td className="border border-green-800 px-4 py-2">
                {milliseconds.toLocaleString()}
              </td>
              <td className="border border-green-800 px-4 py-2">
                {seconds.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
