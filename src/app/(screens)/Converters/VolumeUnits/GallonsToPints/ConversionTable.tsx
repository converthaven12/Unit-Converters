import React from "react";

const ConversionTable = () => {
  const data = [
    { gallons: 1, pints: 1 * 8 },
    { gallons: 0.5, pints: 0.5 * 8 },
    { gallons: 2, pints: 2 * 8 },
    { gallons: 4, pints: 4 * 8 },
    { gallons: 8, pints: 8 * 8 },
    { gallons: 10, pints: 10 * 8 },
    { gallons: 0.1, pints: 0.1 * 8 },
    { gallons: 0.01, pints: 0.01 * 8 },
    { gallons: 3, pints: 3 * 8 },
    { gallons: 7.5, pints: 7.5 * 8 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Gallons (US gal)
            </th>
            <th className="px-4 py-2 border border-green-900">Pints (US pt)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.gallons.toFixed(3)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.pints.toFixed(4)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
