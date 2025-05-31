"use client";

import React from "react";

const ConversionTable = () => {
  // Sample data showing seconds and their equivalent minutes
  const data = [
    { seconds: 30, minutes: 30 / 60 },
    { seconds: 60, minutes: 60 / 60 },
    { seconds: 120, minutes: 120 / 60 },
    { seconds: 300, minutes: 300 / 60 },
    { seconds: 600, minutes: 600 / 60 },
  ];

  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Seconds</th>
          <th className="border border-gray-300 px-4 py-2">Minutes</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ seconds, minutes }) => (
          <tr key={seconds}>
            <td className="border border-gray-300 px-4 py-2">{seconds}</td>
            <td className="border border-gray-300 px-4 py-2">
              {minutes.toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ConversionTable;
