import React from "react";

const ConversionTable = () => {
  const data = [
    { quarts: 1, gallons: 1 / 4 },
    { quarts: 0.5, gallons: 0.5 / 4 },
    { quarts: 0.25, gallons: 0.25 / 4 },
    { quarts: 2, gallons: 2 / 4 },
    { quarts: 5, gallons: 5 / 4 },
    { quarts: 10, gallons: 10 / 4 },
    { quarts: 0.1, gallons: 0.1 / 4 },
    { quarts: 0.01, gallons: 0.01 / 4 },
    { quarts: 3, gallons: 3 / 4 },
    { quarts: 7.5, gallons: 7.5 / 4 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Quarts (US qt)
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
                {row.quarts.toFixed(2)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.gallons.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
