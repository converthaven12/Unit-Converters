import React from "react";

const ConversionTable = () => {
const data = [
  { hp: 0.01, kw: 0.0073549875 },
  { hp: 0.1, kw: 0.073549875 },
  { hp: 1, kw: 0.73549875 },
  { hp: 2, kw: 1.4709975 },
  { hp: 3, kw: 2.20649625 },
  { hp: 5, kw: 3.67749375 },
  { hp: 10, kw: 7.3549875 },
  { hp: 20, kw: 14.709975 },
  { hp: 50, kw: 36.7749375 },
  { hp: 100, kw: 73.549875 },
  { hp: 1000, kw: 735.49875 }
];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Horsepower (metric)</th>
            <th className="px-4 py-2 border border-green-900">Kilowatt [kW]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.hp}</td>
              <td className="px-4 py-2 border border-green-800">{row.kw}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
