"use client";
import React from "react";

const ConversionTable = () => {
  // Sample data showing minutes and their equivalent seconds
  const data = [
    { minutes: 0.5, seconds: 0.5 * 60 },
    { minutes: 1, seconds: 60 },
    { minutes: 2, seconds: 2 * 60 },
    { minutes: 5, seconds: 5 * 60 },
    { minutes: 10, seconds: 10 * 60 },
  ];

  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Minutes</th>
          <th className="border border-gray-300 px-4 py-2">Seconds</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ minutes, seconds }) => (
          <tr key={minutes}>
            <td className="border border-gray-300 px-4 py-2">{minutes}</td>
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
