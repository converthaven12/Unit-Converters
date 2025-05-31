"use client";
import React from "react";

const ConversionTable = () => {
  // Sample data showing decimal and their equivalent hexadecimal values
  const data = [
    { decimal: 10, hex: (10).toString(16).toUpperCase() },
    { decimal: 15, hex: (15).toString(16).toUpperCase() },
    { decimal: 31, hex: (31).toString(16).toUpperCase() },
    { decimal: 255, hex: (255).toString(16).toUpperCase() },
    { decimal: 4095, hex: (4095).toString(16).toUpperCase() },
  ];

  return (
    <div className="overflow-x-auto mt-6">
      <table className="w-full border-collapse border border-green-800">
        <thead>
          <tr className="bg-green-700 text-white">
            <th className="border border-green-900 px-4 py-2">Decimal</th>
            <th className="border border-green-900 px-4 py-2">Hexadecimal</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ decimal, hex }) => (
            <tr key={decimal} className="hover:bg-green-50 even:bg-green-100">
              <td className="border border-green-800 px-4 py-2">{decimal}</td>
              <td className="border border-green-800 px-4 py-2 font-mono">
                {hex.startsWith("0x") ? hex : `${hex.toUpperCase()}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
