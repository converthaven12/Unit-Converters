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
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="py-2 px-4 border-b">Seconds</th>
            <th className="py-2 px-4 border-b">Days</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{row.seconds}</td>
              <td className="py-2 px-4 border-b">{row.days}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
