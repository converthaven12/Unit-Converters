import React from "react";

const ConversionTable = () => {
  const data = [
    { acres: 1, hectares: 1 * 0.404685642 },
    { acres: 0.5, hectares: 0.5 * 0.404685642 },
    { acres: 2, hectares: 2 * 0.404685642 },
    { acres: 4, hectares: 4 * 0.404685642 },
    { acres: 8, hectares: 8 * 0.404685642 },
    { acres: 10, hectares: 10 * 0.404685642 },
    { acres: 0.1, hectares: 0.1 * 0.404685642 },
    { acres: 0.01, hectares: 0.01 * 0.404685642 },
    { acres: 3, hectares: 3 * 0.404685642 },
    { acres: 7.5, hectares: 7.5 * 0.404685642 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Acres</th>
            <th className="px-4 py-2 border border-green-900">Hectares</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.acres.toFixed(3)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.hectares.toFixed(6)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
