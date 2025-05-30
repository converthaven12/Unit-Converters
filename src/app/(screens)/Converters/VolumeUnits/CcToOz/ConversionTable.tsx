import React from "react";

const ConversionTable = () => {
  const data = [
    { cc: 1, oz: 1 * 0.033814 },
    { cc: 0.5, oz: 0.5 * 0.033814 },
    { cc: 0.25, oz: 0.25 * 0.033814 },
    { cc: 2, oz: 2 * 0.033814 },
    { cc: 3, oz: 3 * 0.033814 },
    { cc: 4, oz: 4 * 0.033814 },
    { cc: 0.1, oz: 0.1 * 0.033814 },
    { cc: 0.05, oz: 0.05 * 0.033814 },
    { cc: 0.01, oz: 0.01 * 0.033814 },
    { cc: 5, oz: 5 * 0.033814 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Cubic Centimeters [cc]
            </th>
            <th className="px-4 py-2 border border-green-900">Ounces [oz]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.cc.toFixed(2)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.oz.toFixed(4)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
