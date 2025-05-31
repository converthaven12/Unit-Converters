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
      <table className="min-w-full border border-green-800 text-sm text-left">
        <thead className="bg-green-700 text-white">
          <tr>
            <th className="px-4 py-2 border-b border-green-900">Hours</th>
            <th className="px-4 py-2 border-b border-green-900">Days</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="hover:bg-green-50 even:bg-green-100">
              <td className="px-4 py-2 border-b border-green-800">
                {row.hours}
              </td>
              <td className="px-4 py-2 border-b border-green-800">
                {row.days}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
