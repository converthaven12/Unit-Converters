import React from "react";

const ConversionTable = () => {
  const data = [
    { ml: 1, tsp: 1 / 4.92892 },
    { ml: 5, tsp: 5 / 4.92892 },
    { ml: 10, tsp: 10 / 4.92892 },
    { ml: 15, tsp: 15 / 4.92892 },
    { ml: 20, tsp: 20 / 4.92892 },
    { ml: 50, tsp: 50 / 4.92892 },
    { ml: 100, tsp: 100 / 4.92892 },
    { ml: 250, tsp: 250 / 4.92892 },
    { ml: 500, tsp: 500 / 4.92892 },
    { ml: 1000, tsp: 1000 / 4.92892 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Milliliters [ml]
            </th>
            <th className="px-4 py-2 border border-green-900">
              Teaspoons [tsp]
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.ml}</td>
              <td className="px-4 py-2 border border-green-800">
                {row.tsp.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
