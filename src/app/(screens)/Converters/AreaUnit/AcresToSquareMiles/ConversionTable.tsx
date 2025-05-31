import React from "react";

const ConversionTable = () => {
  const data = [
    { acres: 1, squareMiles: 1 / 640 },
    { acres: 0.5, squareMiles: 0.5 / 640 },
    { acres: 2, squareMiles: 2 / 640 },
    { acres: 4, squareMiles: 4 / 640 },
    { acres: 8, squareMiles: 8 / 640 },
    { acres: 10, squareMiles: 10 / 640 },
    { acres: 0.1, squareMiles: 0.1 / 640 },
    { acres: 0.01, squareMiles: 0.01 / 640 },
    { acres: 3, squareMiles: 3 / 640 },
    { acres: 7.5, squareMiles: 7.5 / 640 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Acres</th>
            <th className="px-4 py-2 border border-green-900">Square Miles</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.acres.toFixed(3)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.squareMiles.toFixed(6)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
