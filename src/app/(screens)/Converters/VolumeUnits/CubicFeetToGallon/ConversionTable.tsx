import React from "react";

const ConversionTable = () => {
  const data = [
    { cubicFeet: 1, gallons: 1 * 7.48052 },
    { cubicFeet: 0.5, gallons: 0.5 * 7.48052 },
    { cubicFeet: 0.25, gallons: 0.25 * 7.48052 },
    { cubicFeet: 2, gallons: 2 * 7.48052 },
    { cubicFeet: 3, gallons: 3 * 7.48052 },
    { cubicFeet: 4, gallons: 4 * 7.48052 },
    { cubicFeet: 0.1, gallons: 0.1 * 7.48052 },
    { cubicFeet: 0.05, gallons: 0.05 * 7.48052 },
    { cubicFeet: 0.01, gallons: 0.01 * 7.48052 },
    { cubicFeet: 5, gallons: 5 * 7.48052 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Cubic Feet [ft³]
            </th>
            <th className="px-4 py-2 border border-green-900">Gallons [gal]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.cubicFeet.toFixed(2)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.gallons.toFixed(4)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
