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
    <div className="overflow-x-auto mt-6">
      <table className="w-full border-collapse border border-green-800">
        <thead>
          <tr className="bg-green-700 text-white">
            <th className="border border-green-900 px-4 py-2">Seconds</th>
            <th className="border border-green-900 px-4 py-2">Minutes</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ seconds, minutes }) => (
            <tr key={seconds} className="hover:bg-green-50 even:bg-green-100">
              <td className="border border-green-800 px-4 py-2">
                {seconds.toLocaleString()}
              </td>
              <td className="border border-green-800 px-4 py-2">
                {minutes.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
