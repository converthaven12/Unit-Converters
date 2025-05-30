import React from "react";

const ConversionTable = () => {
  const data = [
    { ounces: 33.814, liters: 33.814 / 33.814 },
    { ounces: 16.907, liters: 16.907 / 33.814 },
    { ounces: 8.457, liters: 8.457 / 33.814 },
    { ounces: 67.628, liters: 67.628 / 33.814 },
    { ounces: 169.07, liters: 169.07 / 33.814 },
    { ounces: 338.14, liters: 338.14 / 33.814 },
    { ounces: 3.3814, liters: 3.3814 / 33.814 },
    { ounces: 0.33814, liters: 0.33814 / 33.814 },
    { ounces: 101.442, liters: 101.442 / 33.814 },
    { ounces: 253.553, liters: 253.553 / 33.814 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Fluid Ounces (US fl oz)
            </th>
            <th className="px-4 py-2 border border-green-900">Liters (L)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.ounces.toFixed(3)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.liters.toFixed(4)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
