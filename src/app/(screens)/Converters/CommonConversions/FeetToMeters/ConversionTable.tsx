import React from "react";

const ConversionTable = () => {
const data = [
  { inch: 0.01, foot: 0.0008333333 },
  { inch: 0.1, foot: 0.0083333333 },
  { inch: 1, foot: 0.0833333333 },
  { inch: 2, foot: 0.1666666667 },
  { inch: 3, foot: 0.25 },
  { inch: 5, foot: 0.4166666667 },
  { inch: 10, foot: 0.8333333333 },
  { inch: 20, foot: 1.6666666667 },
  { inch: 50, foot: 4.1666666667 },
  { inch: 100, foot: 8.3333333333 },
  { inch: 1000, foot: 83.3333333333 }
];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Inch [in]</th>
            <th className="px-4 py-2 border border-green-900">Meter [m]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.inch}</td>
              <td className="px-4 py-2 border border-green-800">{row.foot}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
