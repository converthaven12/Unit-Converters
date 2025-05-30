import React from "react";

const ConversionTable = () => {
  const data = [
    { cc: 1, ml: 1 },
    { cc: 0.5, ml: 0.5 },
    { cc: 0.25, ml: 0.25 },
    { cc: 2, ml: 2 },
    { cc: 3, ml: 3 },
    { cc: 4, ml: 4 },
    { cc: 0.1, ml: 0.1 },
    { cc: 0.05, ml: 0.05 },
    { cc: 0.01, ml: 0.01 },
    { cc: 5, ml: 5 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Cubic Centimeters [cc]
            </th>
            <th className="px-4 py-2 border border-green-900">
              Milliliters [ml]
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.cc.toFixed(2)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.ml.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
