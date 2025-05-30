import React from "react";

const ConversionTable = () => {
  const data = [
    { cups: 1, pints: 1 / 2 },
    { cups: 0.5, pints: 0.5 / 2 },
    { cups: 0.25, pints: 0.25 / 2 },
    { cups: 2, pints: 2 / 2 },
    { cups: 5, pints: 5 / 2 },
    { cups: 10, pints: 10 / 2 },
    { cups: 0.1, pints: 0.1 / 2 },
    { cups: 0.01, pints: 0.01 / 2 },
    { cups: 3, pints: 3 / 2 },
    { cups: 7.5, pints: 7.5 / 2 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Cups (US cup)</th>
            <th className="px-4 py-2 border border-green-900">Pints (US pt)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.cups.toFixed(2)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.pints.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
