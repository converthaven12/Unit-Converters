"use client";
import React from "react";

const ConversionTable = () => {
  const data = [
    { seconds: 86400, days: 1 },
    { seconds: 172800, days: 2 },
    { seconds: 43200, days: 0.5 },
    { seconds: 216000, days: 2.5 },
    { seconds: 259200, days: 3 },
  ];

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-white border border-green-800">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="py-2 px-4 border-b border-green-900">Seconds</th>
            <th className="py-2 px-4 border-b border-green-900">Days</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-green-50 even:bg-green-100">
              <td className="py-2 px-4 border-b border-green-800">
                {row.seconds.toLocaleString()}
              </td>
              <td className="py-2 px-4 border-b border-green-800">
                {row.days.toFixed(4)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
