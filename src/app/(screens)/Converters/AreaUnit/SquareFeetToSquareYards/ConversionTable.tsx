import React from "react";

const ConversionTable = () => {
  const data = [
    { squareFeet: 9, squareYards: 9 / 9 },
    { squareFeet: 4.5, squareYards: 4.5 / 9 },
    { squareFeet: 18, squareYards: 18 / 9 },
    { squareFeet: 36, squareYards: 36 / 9 },
    { squareFeet: 72, squareYards: 72 / 9 },
    { squareFeet: 90, squareYards: 90 / 9 },
    { squareFeet: 0.9, squareYards: 0.9 / 9 },
    { squareFeet: 0.09, squareYards: 0.09 / 9 },
    { squareFeet: 27, squareYards: 27 / 9 },
    { squareFeet: 67.5, squareYards: 67.5 / 9 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Square Feet (sq ft)
            </th>
            <th className="px-4 py-2 border border-green-900">
              Square Yards (sq yd)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.squareFeet.toFixed(3)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.squareYards.toFixed(6)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
