import React from "react";

const ConversionTable = () => {
  const data = [
    { cubicInches: 1, gallons: 1 / 231 },
    { cubicInches: 10, gallons: 10 / 231 },
    { cubicInches: 50, gallons: 50 / 231 },
    { cubicInches: 100, gallons: 100 / 231 },
    { cubicInches: 231, gallons: 231 / 231 },
    { cubicInches: 462, gallons: 462 / 231 },
    { cubicInches: 500, gallons: 500 / 231 },
    { cubicInches: 1000, gallons: 1000 / 231 },
    { cubicInches: 0.5, gallons: 0.5 / 231 },
    { cubicInches: 0.1, gallons: 0.1 / 231 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Cubic Inches [in³]
            </th>
            <th className="px-4 py-2 border border-green-900">
              Gallons [US gal]
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.cubicInches.toFixed(2)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.gallons.toFixed(6)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
