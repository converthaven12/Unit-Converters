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
    <div className="overflow-x-auto mt-6">
      <table className="w-full border-collapse border border-green-800">
        <thead>
          <tr className="bg-green-700 text-white">
            <th className="border border-green-900 px-4 py-2">Seconds</th>
            <th className="border border-green-900 px-4 py-2">Milliseconds</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ seconds, milliseconds }) => (
            <tr key={seconds} className="hover:bg-green-50 even:bg-green-100">
              <td className="border border-green-800 px-4 py-2">
                {seconds.toLocaleString()}
              </td>
              <td className="border border-green-800 px-4 py-2">
                {milliseconds.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
