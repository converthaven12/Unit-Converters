import React from "react";

const ConversionTable = () => {
  const data = [
    { liters: 1, cubicInches: 1 / 0.0163871 },
    { liters: 0.5, cubicInches: 0.5 / 0.0163871 },
    { liters: 0.25, cubicInches: 0.25 / 0.0163871 },
    { liters: 2, cubicInches: 2 / 0.0163871 },
    { liters: 5, cubicInches: 5 / 0.0163871 },
    { liters: 10, cubicInches: 10 / 0.0163871 },
    { liters: 0.1, cubicInches: 0.1 / 0.0163871 },
    { liters: 0.01, cubicInches: 0.01 / 0.0163871 },
    { liters: 3, cubicInches: 3 / 0.0163871 },
    { liters: 7.5, cubicInches: 7.5 / 0.0163871 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Liters [L]</th>
            <th className="px-4 py-2 border border-green-900">
              Cubic Inches [in³]
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.liters.toFixed(2)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.cubicInches.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
