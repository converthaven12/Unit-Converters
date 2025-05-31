"use client";
import React from "react";

const ConversionTable = () => {
  // Sample data showing binary and their equivalent decimal numbers
  const data = [
    { binary: "0001", decimal: 1 },
    { binary: "0010", decimal: 2 },
    { binary: "0101", decimal: 5 },
    { binary: "1011", decimal: 11 },
    { binary: "1111", decimal: 15 },
  ];

  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Binary</th>
          <th className="border border-gray-300 px-4 py-2">Decimal</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ binary, decimal }) => (
          <tr key={binary}>
            <td className="border border-gray-300 px-4 py-2 font-mono">
              {binary}
            </td>
            <td className="border border-gray-300 px-4 py-2">{decimal}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ConversionTable;
