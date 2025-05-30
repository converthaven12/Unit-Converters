import React from "react";

const ConversionTable = () => {
  const data = [
    { tsp: 1, ml: 1 * 4.92892 },
    { tsp: 0.5, ml: 0.5 * 4.92892 },
    { tsp: 0.25, ml: 0.25 * 4.92892 },
    { tsp: 2, ml: 2 * 4.92892 },
    { tsp: 3, ml: 3 * 4.92892 },
    { tsp: 4, ml: 4 * 4.92892 },
    { tsp: 0.1, ml: 0.1 * 4.92892 },
    { tsp: 0.05, ml: 0.05 * 4.92892 },
    { tsp: 0.01, ml: 0.01 * 4.92892 },
    { tsp: 5, ml: 5 * 4.92892 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Teaspoons [tsp]
            </th>
            <th className="px-4 py-2 border border-green-900">
              Milliliters [ml]
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.tsp}</td>
              <td className="px-4 py-2 border border-green-800">
                {row.ml.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
