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
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Decimal</th>
          <th className="border border-gray-300 px-4 py-2">Binary</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ decimal, binary }) => (
          <tr key={decimal}>
            <td className="border border-gray-300 px-4 py-2">{decimal}</td>
            <td className="border border-gray-300 px-4 py-2">{binary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ConversionTable;
