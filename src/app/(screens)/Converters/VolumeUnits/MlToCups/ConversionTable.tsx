import React from "react";

const ConversionTable = () => {
  const data = [
    { ml: 1, cup: 1 / 236.588 },
    { ml: 50, cup: 50 / 236.588 },
    { ml: 100, cup: 100 / 236.588 },
    { ml: 236.588, cup: 236.588 / 236.588 },
    { ml: 473.176, cup: 473.176 / 236.588 },
    { ml: 500, cup: 500 / 236.588 },
    { ml: 1000, cup: 1000 / 236.588 },
    { ml: 10, cup: 10 / 236.588 },
    { ml: 5, cup: 5 / 236.588 },
    { ml: 0.1, cup: 0.1 / 236.588 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Milliliters [ml]
            </th>
            <th className="px-4 py-2 border border-green-900">Cups [cup]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.ml}</td>
              <td className="px-4 py-2 border border-green-800">
                {row.cup.toFixed(5)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
