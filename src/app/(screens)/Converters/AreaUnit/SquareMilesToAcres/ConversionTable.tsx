import React from "react";

const ConversionTable = () => {
  const data = [
    { squareMiles: 1, acres: 1 * 640 },
    { squareMiles: 0.5, acres: 0.5 * 640 },
    { squareMiles: 2, acres: 2 * 640 },
    { squareMiles: 4, acres: 4 * 640 },
    { squareMiles: 8, acres: 8 * 640 },
    { squareMiles: 10, acres: 10 * 640 },
    { squareMiles: 0.1, acres: 0.1 * 640 },
    { squareMiles: 0.01, acres: 0.01 * 640 },
    { squareMiles: 3, acres: 3 * 640 },
    { squareMiles: 7.5, acres: 7.5 * 640 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Square Miles</th>
            <th className="px-4 py-2 border border-green-900">Acres</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.squareMiles.toFixed(3)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.acres.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
