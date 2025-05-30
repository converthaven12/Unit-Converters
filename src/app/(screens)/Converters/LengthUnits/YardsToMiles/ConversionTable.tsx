import React from "react";

const ConversionTable = () => {
  const data = [
    { yard: 1, mile: 1 / 1760 },
    { yard: 5, mile: 5 / 1760 },
    { yard: 10, mile: 10 / 1760 },
    { yard: 20, mile: 20 / 1760 },
    { yard: 50, mile: 50 / 1760 },
    { yard: 100, mile: 100 / 1760 },
    { yard: 500, mile: 500 / 1760 },
    { yard: 1000, mile: 1000 / 1760 },
    { yard: 1760, mile: 1 },
    { yard: 3520, mile: 2 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Yards [yd]</th>
            <th className="px-4 py-2 border border-green-900">Miles [mi]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.yard}</td>
              <td className="px-4 py-2 border border-green-800">
                {row.mile.toFixed(5)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
