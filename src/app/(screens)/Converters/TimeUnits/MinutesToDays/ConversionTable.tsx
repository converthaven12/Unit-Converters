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
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Minutes</th>
          <th className="border border-gray-300 px-4 py-2">Days</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ minutes, days }) => (
          <tr key={minutes}>
            <td className="border border-gray-300 px-4 py-2">
              {minutes.toLocaleString()}
            </td>
            <td className="border border-gray-300 px-4 py-2">{days}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ConversionTable;
