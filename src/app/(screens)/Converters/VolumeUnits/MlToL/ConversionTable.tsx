import React from "react";

const ConversionTable = () => {
  const data = [
    { ml: 1, l: 1 / 1000 },
    { ml: 10, l: 10 / 1000 },
    { ml: 50, l: 50 / 1000 },
    { ml: 100, l: 100 / 1000 },
    { ml: 250, l: 250 / 1000 },
    { ml: 500, l: 500 / 1000 },
    { ml: 750, l: 750 / 1000 },
    { ml: 1000, l: 1000 / 1000 },
    { ml: 1500, l: 1500 / 1000 },
    { ml: 2000, l: 2000 / 1000 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Milliliters [ml]
            </th>
            <th className="px-4 py-2 border border-green-900">Liters [l]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.ml}</td>
              <td className="px-4 py-2 border border-green-800">
                {row.l.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
