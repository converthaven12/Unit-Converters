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
    <div className="overflow-x-auto mt-6">
      <table className="w-full border-collapse border border-green-800">
        <thead>
          <tr className="bg-green-700 text-white">
            <th className="border border-green-900 px-4 py-2">Binary</th>
            <th className="border border-green-900 px-4 py-2">Decimal</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ binary, decimal }) => (
            <tr key={binary} className="hover:bg-green-50 even:bg-green-100">
              <td className="border border-green-800 px-4 py-2 font-mono">
                {binary}
              </td>
              <td className="border border-green-800 px-4 py-2">
                {decimal.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
