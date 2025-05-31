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
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Milliseconds</th>
          <th className="border border-gray-300 px-4 py-2">Seconds</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ milliseconds, seconds }) => (
          <tr key={milliseconds}>
            <td className="border border-gray-300 px-4 py-2">{milliseconds}</td>
            <td className="border border-gray-300 px-4 py-2">
              {seconds.toFixed(3)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ConversionTable;
