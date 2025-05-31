"use client";
import React from "react";

const ConversionTable = () => {
  const rows = [
    { hours: 1, days: (1 / 24).toFixed(4) },
    { hours: 12, days: (12 / 24).toFixed(4) },
    { hours: 24, days: (24 / 24).toFixed(4) },
    { hours: 48, days: (48 / 24).toFixed(4) },
    { hours: 72, days: (72 / 24).toFixed(4) },
    { hours: 168, days: (168 / 24).toFixed(4) }, // 1 week
  ];

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-sm text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border-b">Hours</th>
            <th className="px-4 py-2 border-b">Days</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">{row.hours}</td>
              <td className="px-4 py-2 border-b">{row.days}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
