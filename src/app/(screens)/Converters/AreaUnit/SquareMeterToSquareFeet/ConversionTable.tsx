import React from "react";

const ConversionTable = () => {
  const data = [
    { squareMeters: 1, squareFeet: 1 * 10.7639 },
    { squareMeters: 0.5, squareFeet: 0.5 * 10.7639 },
    { squareMeters: 2, squareFeet: 2 * 10.7639 },
    { squareMeters: 4, squareFeet: 4 * 10.7639 },
    { squareMeters: 8, squareFeet: 8 * 10.7639 },
    { squareMeters: 10, squareFeet: 10 * 10.7639 },
    { squareMeters: 0.1, squareFeet: 0.1 * 10.7639 },
    { squareMeters: 0.01, squareFeet: 0.01 * 10.7639 },
    { squareMeters: 3, squareFeet: 3 * 10.7639 },
    { squareMeters: 7.5, squareFeet: 7.5 * 10.7639 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Square Meters (sq m)
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
                {row.squareMeters.toFixed(3)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.squareFeet.toFixed(6)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
