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
    <div className="overflow-x-auto mt-6">
      <table className="w-full border-collapse border border-green-800">
        <thead>
          <tr className="bg-green-700 text-white">
            <th className="border border-green-900 px-4 py-2">Minutes</th>
            <th className="border border-green-900 px-4 py-2">Seconds</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ minutes, seconds }) => (
            <tr key={minutes} className="hover:bg-green-50 even:bg-green-100">
              <td className="border border-green-800 px-4 py-2">
                {minutes.toLocaleString()}
              </td>
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
