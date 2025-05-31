"use client";

import React from "react";

const ConversionTable = () => {
  // Sample data showing Hexadecimal values and their Decimal equivalents
  const data = [
    { hex: "0", decimal: 0 },
    { hex: "1", decimal: 1 },
    { hex: "A", decimal: 10 },
    { hex: "F", decimal: 15 },
    { hex: "10", decimal: 16 },
    { hex: "1F", decimal: 31 },
    { hex: "FF", decimal: 255 },
    { hex: "100", decimal: 256 },
  ];

  return (
    <div className="overflow-x-auto mt-6">
      <table className="w-full border-collapse border border-green-800">
        <thead>
          <tr className="bg-green-700 text-white">
            <th className="border border-green-900 px-4 py-2">Hexadecimal</th>
            <th className="border border-green-900 px-4 py-2">Decimal</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ hex, decimal }) => (
            <tr key={hex} className="hover:bg-green-50 even:bg-green-100">
              <td className="border border-green-800 px-4 py-2 font-mono">
                {hex.startsWith("0x") ? hex : `${hex.toUpperCase()}`}
              </td>
              <td className="border border-green-800 px-4 py-2">
                {decimal}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
