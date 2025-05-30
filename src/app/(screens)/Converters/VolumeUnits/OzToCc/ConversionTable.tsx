import React from "react";

const ConversionTable = () => {
  const data = [
    { oz: 1, cc: 1 * 29.5735 },
    { oz: 0.5, cc: 0.5 * 29.5735 },
    { oz: 0.25, cc: 0.25 * 29.5735 },
    { oz: 2, cc: 2 * 29.5735 },
    { oz: 3, cc: 3 * 29.5735 },
    { oz: 4, cc: 4 * 29.5735 },
    { oz: 0.1, cc: 0.1 * 29.5735 },
    { oz: 0.05, cc: 0.05 * 29.5735 },
    { oz: 0.01, cc: 0.01 * 29.5735 },
    { oz: 5, cc: 5 * 29.5735 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Ounces [oz]</th>
            <th className="px-4 py-2 border border-green-900">
              Cubic Centimeters [cc]
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.oz.toFixed(2)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.cc.toFixed(4)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
