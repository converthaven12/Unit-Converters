import React from "react";

const ConversionTable = () => {
  const data = [
    { pt: 1, ml: 1 * 473.176 },
    { pt: 0.5, ml: 0.5 * 473.176 },
    { pt: 0.25, ml: 0.25 * 473.176 },
    { pt: 2, ml: 2 * 473.176 },
    { pt: 3, ml: 3 * 473.176 },
    { pt: 4, ml: 4 * 473.176 },
    { pt: 0.1, ml: 0.1 * 473.176 },
    { pt: 0.05, ml: 0.05 * 473.176 },
    { pt: 0.01, ml: 0.01 * 473.176 },
    { pt: 5, ml: 5 * 473.176 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Pints [pt]</th>
            <th className="px-4 py-2 border border-green-900">
              Milliliters [ml]
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.pt}</td>
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
