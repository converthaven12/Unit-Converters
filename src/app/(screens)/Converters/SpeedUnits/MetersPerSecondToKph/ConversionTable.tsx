import React from "react";

const ConversionTable = () => {
  const data = [
    { mps: 1, kph: 1 * 3.6 },
    { mps: 5, kph: 5 * 3.6 },
    { mps: 10, kph: 10 * 3.6 },
    { mps: 15, kph: 15 * 3.6 },
    { mps: 20, kph: 20 * 3.6 },
    { mps: 25, kph: 25 * 3.6 },
    { mps: 0.5, kph: 0.5 * 3.6 },
    { mps: 2.5, kph: 2.5 * 3.6 },
    { mps: 30.2, kph: 30.2 * 3.6 },
    { mps: 100, kph: 100 * 3.6 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Meters per Second (m/s)
            </th>
            <th className="px-4 py-2 border border-green-900">
              Kilometers per Hour (kph)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.mps.toFixed(3)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.kph.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
