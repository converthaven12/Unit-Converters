import React from "react";

const ConversionTable = () => {
  const data = [
    { tablespoon: 1, cup: 1 / 16 },
    { tablespoon: 2, cup: 2 / 16 },
    { tablespoon: 4, cup: 4 / 16 },
    { tablespoon: 8, cup: 8 / 16 },
    { tablespoon: 16, cup: 16 / 16 },
    { tablespoon: 24, cup: 24 / 16 },
    { tablespoon: 32, cup: 32 / 16 },
    { tablespoon: 40, cup: 40 / 16 },
    { tablespoon: 0.5, cup: 0.5 / 16 },
    { tablespoon: 0.1, cup: 0.1 / 16 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Tablespoons [tbsp]
            </th>
            <th className="px-4 py-2 border border-green-900">Cups [cup]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.tablespoon}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.cup.toFixed(5)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
