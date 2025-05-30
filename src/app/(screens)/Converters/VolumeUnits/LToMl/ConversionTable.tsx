import React from "react";

const ConversionTable = () => {
  const data = [
    { l: 1, ml: 1 * 1000 },
    { l: 0.5, ml: 0.5 * 1000 },
    { l: 0.25, ml: 0.25 * 1000 },
    { l: 2, ml: 2 * 1000 },
    { l: 3, ml: 3 * 1000 },
    { l: 4, ml: 4 * 1000 },
    { l: 0.1, ml: 0.1 * 1000 },
    { l: 0.05, ml: 0.05 * 1000 },
    { l: 0.01, ml: 0.01 * 1000 },
    { l: 5, ml: 5 * 1000 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Liters [l]</th>
            <th className="px-4 py-2 border border-green-900">
              Milliliters [ml]
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.l}</td>
              <td className="px-4 py-2 border border-green-800">
                {row.ml.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
