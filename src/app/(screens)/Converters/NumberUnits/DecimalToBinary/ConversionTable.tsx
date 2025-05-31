"use client";

import React from "react";

const ConversionTable = () => {
  // Sample data showing decimal numbers and their equivalent binary strings
  const data = [
    { decimal: 1, binary: (1).toString(2) },
    { decimal: 2, binary: (2).toString(2) },
    { decimal: 5, binary: (5).toString(2) },
    { decimal: 10, binary: (10).toString(2) },
    { decimal: 15, binary: (15).toString(2) },
    { decimal: 31, binary: (31).toString(2) },
  ];

  return (
    <div className="overflow-x-auto mt-6">
      <table className="w-full border-collapse border border-green-800">
        <thead>
          <tr className="bg-green-700 text-white">
            <th className="border border-green-900 px-4 py-2">Decimal</th>
            <th className="border border-green-900 px-4 py-2">Binary</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ decimal, binary }) => (
            <tr key={decimal} className="hover:bg-green-50 even:bg-green-100">
              <td className="border border-green-800 px-4 py-2">
                {decimal.toLocaleString()}
              </td>
              <td className="border border-green-800 px-4 py-2 font-mono">
                {binary.padStart(8, "0")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
