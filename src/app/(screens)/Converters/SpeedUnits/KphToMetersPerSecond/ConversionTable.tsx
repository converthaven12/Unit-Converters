import React from "react";

const ConversionTable = () => {
  const data = [
    { kph: 1, mps: 1 / 3.6 },
    { kph: 5, mps: 5 / 3.6 },
    { kph: 10, mps: 10 / 3.6 },
    { kph: 15, mps: 15 / 3.6 },
    { kph: 20, mps: 20 / 3.6 },
    { kph: 25, mps: 25 / 3.6 },
    { kph: 0.5, mps: 0.5 / 3.6 },
    { kph: 2.5, mps: 2.5 / 3.6 },
    { kph: 30.2, mps: 30.2 / 3.6 },
    { kph: 100, mps: 100 / 3.6 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Kilometers per Hour (kph)
            </th>
            <th className="px-4 py-2 border border-green-900">
              Meters per Second (m/s)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.kph.toFixed(3)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.mps.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
