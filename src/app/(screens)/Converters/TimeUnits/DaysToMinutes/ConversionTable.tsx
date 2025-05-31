"use client";

import React from "react";

const ConversionTable = () => {
  // Sample data showing days and their equivalent minutes
  const data = [
    { days: 0.5, minutes: 0.5 * 1440 },
    { days: 1, minutes: 1440 },
    { days: 2, minutes: 2 * 1440 },
    { days: 5, minutes: 5 * 1440 },
    { days: 10, minutes: 10 * 1440 },
  ];

  return (
    <div className="overflow-x-auto mt-6">
      <table className="w-full border-collapse border border-green-800">
        <thead>
          <tr className="bg-green-700 text-white">
            <th className="border border-green-900 px-4 py-2">Days</th>
            <th className="border border-green-900 px-4 py-2">Minutes</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ days, minutes }) => (
            <tr key={days}>
              <td className="border border-green-800 px-4 py-2">{days}</td>
              <td className="border border-green-800 px-4 py-2">
                {minutes.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
