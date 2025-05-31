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
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Decimal</th>
          <th className="border border-gray-300 px-4 py-2">Hexadecimal</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ decimal, hex }) => (
          <tr key={decimal}>
            <td className="border border-gray-300 px-4 py-2">{decimal}</td>
            <td className="border border-gray-300 px-4 py-2">{hex}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ConversionTable;
