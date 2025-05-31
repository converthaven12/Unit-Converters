import React from "react";

const ConversionTable = () => {
  const data = [
    { ms: 1, mph: 1 * 2.23694 },
    { ms: 5, mph: 5 * 2.23694 },
    { ms: 10, mph: 10 * 2.23694 },
    { ms: 15, mph: 15 * 2.23694 },
    { ms: 20, mph: 20 * 2.23694 },
    { ms: 25, mph: 25 * 2.23694 },
    { ms: 0.5, mph: 0.5 * 2.23694 },
    { ms: 2.5, mph: 2.5 * 2.23694 },
    { ms: 30.2, mph: 30.2 * 2.23694 },
    { ms: 100, mph: 100 * 2.23694 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Meters/Second (m/s)
            </th>
            <th className="px-4 py-2 border border-green-900">
              Miles/Hour (mph)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.ms.toFixed(3)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.mph.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
