import React from "react";

const ConversionTable = () => {
  const data = [
    { milliliters: 3785.41, gallons: 3785.41 / 3785.41 },
    { milliliters: 1892.705, gallons: 1892.705 / 3785.41 },
    { milliliters: 946.3525, gallons: 946.3525 / 3785.41 },
    { milliliters: 7570.82, gallons: 7570.82 / 3785.41 },
    { milliliters: 18927.05, gallons: 18927.05 / 3785.41 },
    { milliliters: 37854.1, gallons: 37854.1 / 3785.41 },
    { milliliters: 378.541, gallons: 378.541 / 3785.41 },
    { milliliters: 37.8541, gallons: 37.8541 / 3785.41 },
    { milliliters: 11356.23, gallons: 11356.23 / 3785.41 },
    { milliliters: 28390.575, gallons: 28390.575 / 3785.41 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Milliliters (mL)
            </th>
            <th className="px-4 py-2 border border-green-900">
              Gallons (US gal)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.milliliters.toFixed(2)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.gallons.toFixed(4)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
