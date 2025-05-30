import React from "react";

const ConversionTable = () => {
  const data = [
    { cubicYards: 1, cubicFeet: 1 * 27 },
    { cubicYards: 0.5, cubicFeet: 0.5 * 27 },
    { cubicYards: 0.25, cubicFeet: 0.25 * 27 },
    { cubicYards: 2, cubicFeet: 2 * 27 },
    { cubicYards: 3, cubicFeet: 3 * 27 },
    { cubicYards: 4, cubicFeet: 4 * 27 },
    { cubicYards: 0.1, cubicFeet: 0.1 * 27 },
    { cubicYards: 0.05, cubicFeet: 0.05 * 27 },
    { cubicYards: 0.01, cubicFeet: 0.01 * 27 },
    { cubicYards: 5, cubicFeet: 5 * 27 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Cubic Yards [yd³]
            </th>
            <th className="px-4 py-2 border border-green-900">
              Cubic Feet [ft³]
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.cubicYards.toFixed(2)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.cubicFeet.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
