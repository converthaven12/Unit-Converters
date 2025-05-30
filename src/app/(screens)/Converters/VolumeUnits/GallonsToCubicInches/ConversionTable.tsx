import React from "react";

const ConversionTable = () => {
  const data = [
    { gallons: 1, cubicInches: 1 * 231 },
    { gallons: 0.5, cubicInches: 0.5 * 231 },
    { gallons: 0.25, cubicInches: 0.25 * 231 },
    { gallons: 2, cubicInches: 2 * 231 },
    { gallons: 5, cubicInches: 5 * 231 },
    { gallons: 10, cubicInches: 10 * 231 },
    { gallons: 0.1, cubicInches: 0.1 * 231 },
    { gallons: 0.01, cubicInches: 0.01 * 231 },
    { gallons: 3, cubicInches: 3 * 231 },
    { gallons: 7.5, cubicInches: 7.5 * 231 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Gallons [US gal]
            </th>
            <th className="px-4 py-2 border border-green-900">
              Cubic Inches [in³]
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.gallons.toFixed(2)}
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
