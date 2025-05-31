import React from "react";

const ConversionTable = () => {
  const data = [
    { squareYards: 1, squareFeet: 1 * 9 },
    { squareYards: 0.5, squareFeet: 0.5 * 9 },
    { squareYards: 2, squareFeet: 2 * 9 },
    { squareYards: 4, squareFeet: 4 * 9 },
    { squareYards: 8, squareFeet: 8 * 9 },
    { squareYards: 10, squareFeet: 10 * 9 },
    { squareYards: 0.1, squareFeet: 0.1 * 9 },
    { squareYards: 0.01, squareFeet: 0.01 * 9 },
    { squareYards: 3, squareFeet: 3 * 9 },
    { squareYards: 7.5, squareFeet: 7.5 * 9 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Square Yards (sq yd)
            </th>
            <th className="px-4 py-2 border border-green-900">
              Square Feet (sq ft)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.squareYards.toFixed(3)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.squareFeet.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
