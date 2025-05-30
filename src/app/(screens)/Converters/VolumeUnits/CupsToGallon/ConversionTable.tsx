import React from "react";

const ConversionTable = () => {
  const data = [
    { cups: 1, gallons: 1 / 16 },
    { cups: 0.5, gallons: 0.5 / 16 },
    { cups: 0.25, gallons: 0.25 / 16 },
    { cups: 2, gallons: 2 / 16 },
    { cups: 5, gallons: 5 / 16 },
    { cups: 10, gallons: 10 / 16 },
    { cups: 0.1, gallons: 0.1 / 16 },
    { cups: 0.01, gallons: 0.01 / 16 },
    { cups: 3, gallons: 3 / 16 },
    { cups: 7.5, gallons: 7.5 / 16 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Cups (US cup)</th>
            <th className="px-4 py-2 border border-green-900">
              Gallons (US gal)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.cups.toFixed(2)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.gallons.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
