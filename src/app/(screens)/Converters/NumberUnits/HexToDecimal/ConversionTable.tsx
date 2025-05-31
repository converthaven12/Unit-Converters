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
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Hexadecimal</th>
          <th className="border border-gray-300 px-4 py-2">Decimal</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ hex, decimal }) => (
          <tr key={hex}>
            <td className="border border-gray-300 px-4 py-2">{hex}</td>
            <td className="border border-gray-300 px-4 py-2">{decimal}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ConversionTable;
