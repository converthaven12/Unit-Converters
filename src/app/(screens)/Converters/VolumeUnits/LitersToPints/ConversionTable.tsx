import React from "react";

const ConversionTable = () => {
  const data = [
    { liters: 1, pints: 1 / 0.473176 },
    { liters: 0.5, pints: 0.5 / 0.473176 },
    { liters: 2, pints: 2 / 0.473176 },
    { liters: 4, pints: 4 / 0.473176 },
    { liters: 8, pints: 8 / 0.473176 },
    { liters: 10, pints: 10 / 0.473176 },
    { liters: 0.1, pints: 0.1 / 0.473176 },
    { liters: 0.01, pints: 0.01 / 0.473176 },
    { liters: 3, pints: 3 / 0.473176 },
    { liters: 7.5, pints: 7.5 / 0.473176 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Liters (L)</th>
            <th className="px-4 py-2 border border-green-900">Pints (US pt)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.liters.toFixed(3)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.pints.toFixed(4)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
