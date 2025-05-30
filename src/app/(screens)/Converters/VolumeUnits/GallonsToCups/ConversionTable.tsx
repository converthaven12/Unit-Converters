import React from "react";

const ConversionTable = () => {
  const data = [
    { gallons: 1, cups: 1 * 16 },
    { gallons: 0.5, cups: 0.5 * 16 },
    { gallons: 0.25, cups: 0.25 * 16 },
    { gallons: 2, cups: 2 * 16 },
    { gallons: 5, cups: 5 * 16 },
    { gallons: 10, cups: 10 * 16 },
    { gallons: 0.1, cups: 0.1 * 16 },
    { gallons: 0.01, cups: 0.01 * 16 },
    { gallons: 3, cups: 3 * 16 },
    { gallons: 7.5, cups: 7.5 * 16 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Gallons (US gal)
            </th>
            <th className="px-4 py-2 border border-green-900">Cups (US cup)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.gallons.toFixed(2)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.cups.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
