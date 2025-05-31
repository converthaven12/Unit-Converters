import React from "react";

const ConversionTable = () => {
  const data = [
    { mph: 1, ms: 1 / 2.23694 },
    { mph: 5, ms: 5 / 2.23694 },
    { mph: 10, ms: 10 / 2.23694 },
    { mph: 15, ms: 15 / 2.23694 },
    { mph: 20, ms: 20 / 2.23694 },
    { mph: 25, ms: 25 / 2.23694 },
    { mph: 0.5, ms: 0.5 / 2.23694 },
    { mph: 2.5, ms: 2.5 / 2.23694 },
    { mph: 30.2, ms: 30.2 / 2.23694 },
    { mph: 100, ms: 100 / 2.23694 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Miles/Hour (mph)
            </th>
            <th className="px-4 py-2 border border-green-900">
              Meters/Second (m/s)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.mph.toFixed(3)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.ms.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
