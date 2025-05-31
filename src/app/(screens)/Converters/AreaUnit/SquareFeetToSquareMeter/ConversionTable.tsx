import React from "react";

const ConversionTable = () => {
  const data = [
    { squareFeet: 1, squareMeters: 1 * 0.092903 },
    { squareFeet: 0.5, squareMeters: 0.5 * 0.092903 },
    { squareFeet: 2, squareMeters: 2 * 0.092903 },
    { squareFeet: 4, squareMeters: 4 * 0.092903 },
    { squareFeet: 8, squareMeters: 8 * 0.092903 },
    { squareFeet: 10, squareMeters: 10 * 0.092903 },
    { squareFeet: 0.1, squareMeters: 0.1 * 0.092903 },
    { squareFeet: 0.01, squareMeters: 0.01 * 0.092903 },
    { squareFeet: 3, squareMeters: 3 * 0.092903 },
    { squareFeet: 7.5, squareMeters: 7.5 * 0.092903 },
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
              Square Meters (sq m)
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
                {row.squareMeters.toFixed(6)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
