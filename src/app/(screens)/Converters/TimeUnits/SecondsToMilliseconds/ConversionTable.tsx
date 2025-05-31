"use client";

import React from "react";

const ConversionTable = () => {
  // Sample data showing seconds and their equivalent milliseconds
  const data = [
    { seconds: 0.5, milliseconds: 0.5 * 1000 },
    { seconds: 1, milliseconds: 1 * 1000 },
    { seconds: 1.5, milliseconds: 1.5 * 1000 },
    { seconds: 2, milliseconds: 2 * 1000 },
    { seconds: 5, milliseconds: 5 * 1000 },
  ];

  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Seconds</th>
          <th className="border border-gray-300 px-4 py-2">Milliseconds</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ seconds, milliseconds }) => (
          <tr key={seconds}>
            <td className="border border-gray-300 px-4 py-2">{seconds}</td>
            <td className="border border-gray-300 px-4 py-2">
              {milliseconds.toFixed(0)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ConversionTable;
