import React from "react";

const ConversionTable = () => {
  const data = [
    { liters: 1, ounces: 1 * 33.814 },
    { liters: 0.5, ounces: 0.5 * 33.814 },
    { liters: 0.25, ounces: 0.25 * 33.814 },
    { liters: 2, ounces: 2 * 33.814 },
    { liters: 5, ounces: 5 * 33.814 },
    { liters: 10, ounces: 10 * 33.814 },
    { liters: 0.1, ounces: 0.1 * 33.814 },
    { liters: 0.01, ounces: 0.01 * 33.814 },
    { liters: 3, ounces: 3 * 33.814 },
    { liters: 7.5, ounces: 7.5 * 33.814 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Liters (L)</th>
            <th className="px-4 py-2 border border-green-900">
              Fluid Ounces (US fl oz)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.liters.toFixed(2)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.ounces.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
