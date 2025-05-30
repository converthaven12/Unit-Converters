import React from "react";

const ConversionTable = () => {
  const data = [
    { cup: 1, ml: 1 * 236.588 },
    { cup: 0.5, ml: 0.5 * 236.588 },
    { cup: 0.25, ml: 0.25 * 236.588 },
    { cup: 2, ml: 2 * 236.588 },
    { cup: 3, ml: 3 * 236.588 },
    { cup: 5, ml: 5 * 236.588 },
    { cup: 10, ml: 10 * 236.588 },
    { cup: 0.1, ml: 0.1 * 236.588 },
    { cup: 0.01, ml: 0.01 * 236.588 },
    { cup: 0.001, ml: 0.001 * 236.588 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Cups [cup]</th>
            <th className="px-4 py-2 border border-green-900">
              Milliliters [ml]
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.cup}</td>
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
