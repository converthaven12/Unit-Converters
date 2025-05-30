import React from "react";

const ConversionTable = () => {
  const data = [
    { cubicFeet: 1, cubicYards: 1 / 27 },
    { cubicFeet: 0.5, cubicYards: 0.5 / 27 },
    { cubicFeet: 0.25, cubicYards: 0.25 / 27 },
    { cubicFeet: 2, cubicYards: 2 / 27 },
    { cubicFeet: 3, cubicYards: 3 / 27 },
    { cubicFeet: 4, cubicYards: 4 / 27 },
    { cubicFeet: 0.1, cubicYards: 0.1 / 27 },
    { cubicFeet: 0.05, cubicYards: 0.05 / 27 },
    { cubicFeet: 0.01, cubicYards: 0.01 / 27 },
    { cubicFeet: 5, cubicYards: 5 / 27 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Cubic Feet [ft³]
            </th>
            <th className="px-4 py-2 border border-green-900">
              Cubic Yards [yd³]
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.cubicFeet.toFixed(2)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.cubicYards.toFixed(6)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
