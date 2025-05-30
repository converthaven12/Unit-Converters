import React from "react";

const ConversionTable = () => {
  const data = [
    { cups: 1, quarts: 1 / 4 },
    { cups: 0.5, quarts: 0.5 / 4 },
    { cups: 0.25, quarts: 0.25 / 4 },
    { cups: 2, quarts: 2 / 4 },
    { cups: 5, quarts: 5 / 4 },
    { cups: 10, quarts: 10 / 4 },
    { cups: 0.1, quarts: 0.1 / 4 },
    { cups: 0.01, quarts: 0.01 / 4 },
    { cups: 3, quarts: 3 / 4 },
    { cups: 7.5, quarts: 7.5 / 4 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Cups (US cup)</th>
            <th className="px-4 py-2 border border-green-900">
              Quarts (US qt)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.cups.toFixed(2)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.quarts.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
