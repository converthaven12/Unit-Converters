import React from "react";

const ConversionTable = () => {
  const data = [
    { gallons: 1, milliliters: 1 * 3785.41 },
    { gallons: 0.5, milliliters: 0.5 * 3785.41 },
    { gallons: 0.25, milliliters: 0.25 * 3785.41 },
    { gallons: 2, milliliters: 2 * 3785.41 },
    { gallons: 5, milliliters: 5 * 3785.41 },
    { gallons: 10, milliliters: 10 * 3785.41 },
    { gallons: 0.1, milliliters: 0.1 * 3785.41 },
    { gallons: 0.01, milliliters: 0.01 * 3785.41 },
    { gallons: 3, milliliters: 3 * 3785.41 },
    { gallons: 7.5, milliliters: 7.5 * 3785.41 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Gallons (US gal)
            </th>
            <th className="px-4 py-2 border border-green-900">
              Milliliters (mL)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.gallons.toFixed(2)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.milliliters.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
