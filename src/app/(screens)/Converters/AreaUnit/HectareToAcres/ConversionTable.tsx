import React from "react";

const ConversionTable = () => {
  const data = [
    { hectares: 1, acres: 1 * 2.47105381 },
    { hectares: 0.5, acres: 0.5 * 2.47105381 },
    { hectares: 2, acres: 2 * 2.47105381 },
    { hectares: 4, acres: 4 * 2.47105381 },
    { hectares: 8, acres: 8 * 2.47105381 },
    { hectares: 10, acres: 10 * 2.47105381 },
    { hectares: 0.1, acres: 0.1 * 2.47105381 },
    { hectares: 0.01, acres: 0.01 * 2.47105381 },
    { hectares: 3, acres: 3 * 2.47105381 },
    { hectares: 7.5, acres: 7.5 * 2.47105381 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Hectares</th>
            <th className="px-4 py-2 border border-green-900">Acres</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.hectares.toFixed(3)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.acres.toFixed(6)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
