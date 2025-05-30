import React from "react";

const ConversionTable = () => {
const data = [
  { mile: 0.01, km: 0.01609344 },
  { mile: 0.1, km: 0.1609344 },
  { mile: 1, km: 1.609344 },
  { mile: 2, km: 3.218688 },
  { mile: 3, km: 4.828032 },
  { mile: 5, km: 8.04672 },
  { mile: 10, km: 16.09344 },
  { mile: 20, km: 32.18688 },
  { mile: 50, km: 80.4672 },
  { mile: 100, km: 160.9344 },
  { mile: 1000, km: 1609.344 },
];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Mile [mi, Mi(Int)]</th>
            <th className="px-4 py-2 border border-green-900">Kilometer [km]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.mile}</td>
              <td className="px-4 py-2 border border-green-800">{row.km}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
