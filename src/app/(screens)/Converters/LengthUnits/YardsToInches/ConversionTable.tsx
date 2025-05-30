import React from "react";

const ConversionTable = () => {
  const data = [
    { yard: 1 / 36, inch: 1 },
    { yard: 5 / 36, inch: 5 },
    { yard: 10 / 36, inch: 10 },
    { yard: 20 / 36, inch: 20 },
    { yard: 1, inch: 36 },
    { yard: 50 / 36, inch: 50 },
    { yard: 2, inch: 72 },
    { yard: 100 / 36, inch: 100 },
    { yard: 5, inch: 180 },
    { yard: 10, inch: 360 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Yards [yd]</th>
            <th className="px-4 py-2 border border-green-900">Inches [in]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.yard.toFixed(5)}
              </td>
              <td className="px-4 py-2 border border-green-800">{row.inch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
