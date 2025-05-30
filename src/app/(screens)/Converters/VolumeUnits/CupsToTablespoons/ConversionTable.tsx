import React from "react";

const ConversionTable = () => {
  const data = [
    { cup: 1, tablespoon: 1 * 16 },
    { cup: 0.5, tablespoon: 0.5 * 16 },
    { cup: 0.25, tablespoon: 0.25 * 16 },
    { cup: 2, tablespoon: 2 * 16 },
    { cup: 3, tablespoon: 3 * 16 },
    { cup: 4, tablespoon: 4 * 16 },
    { cup: 8, tablespoon: 8 * 16 },
    { cup: 0.1, tablespoon: 0.1 * 16 },
    { cup: 0.05, tablespoon: 0.05 * 16 },
    { cup: 0.01, tablespoon: 0.01 * 16 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Cups [cup]</th>
            <th className="px-4 py-2 border border-green-900">
              Tablespoons [tbsp]
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.cup}</td>
              <td className="px-4 py-2 border border-green-800">
                {row.tablespoon.toFixed(5)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
