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
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Days</th>
          <th className="border border-gray-300 px-4 py-2">Seconds</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ days, seconds }) => (
          <tr key={days}>
            <td className="border border-gray-300 px-4 py-2">{days}</td>
            <td className="border border-gray-300 px-4 py-2">
              {seconds.toLocaleString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ConversionTable;
