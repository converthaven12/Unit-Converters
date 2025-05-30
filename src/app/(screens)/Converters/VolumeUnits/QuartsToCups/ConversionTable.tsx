import React from "react";

const ConversionTable = () => {
  const data = [
    { quarts: 1, cups: 1 * 4 },
    { quarts: 0.5, cups: 0.5 * 4 },
    { quarts: 0.25, cups: 0.25 * 4 },
    { quarts: 2, cups: 2 * 4 },
    { quarts: 5, cups: 5 * 4 },
    { quarts: 10, cups: 10 * 4 },
    { quarts: 0.1, cups: 0.1 * 4 },
    { quarts: 0.01, cups: 0.01 * 4 },
    { quarts: 3, cups: 3 * 4 },
    { quarts: 7.5, cups: 7.5 * 4 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Quarts (US qt)
            </th>
            <th className="px-4 py-2 border border-green-900">Cups (US cup)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.quarts.toFixed(2)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.cups.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
