import React from "react";

const ConversionTable = () => {
  const data = [
    { cubicInches: 1, liters: 1 * 0.0163871 },
    { cubicInches: 10, liters: 10 * 0.0163871 },
    { cubicInches: 50, liters: 50 * 0.0163871 },
    { cubicInches: 100, liters: 100 * 0.0163871 },
    { cubicInches: 200, liters: 200 * 0.0163871 },
    { cubicInches: 500, liters: 500 * 0.0163871 },
    { cubicInches: 1000, liters: 1000 * 0.0163871 },
    { cubicInches: 0.5, liters: 0.5 * 0.0163871 },
    { cubicInches: 0.1, liters: 0.1 * 0.0163871 },
    { cubicInches: 2, liters: 2 * 0.0163871 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Cubic Inches [in³]
            </th>
            <th className="px-4 py-2 border border-green-900">Liters [L]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.cubicInches.toFixed(2)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.liters.toFixed(5)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
