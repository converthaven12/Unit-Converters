import React from "react";

const ConversionTable = () => {
  const data = [
    { ftPerSec: 1, mph: 1 * 0.681818 },
    { ftPerSec: 5, mph: 5 * 0.681818 },
    { ftPerSec: 10, mph: 10 * 0.681818 },
    { ftPerSec: 15, mph: 15 * 0.681818 },
    { ftPerSec: 20, mph: 20 * 0.681818 },
    { ftPerSec: 25, mph: 25 * 0.681818 },
    { ftPerSec: 0.5, mph: 0.5 * 0.681818 },
    { ftPerSec: 2.5, mph: 2.5 * 0.681818 },
    { ftPerSec: 30.2, mph: 30.2 * 0.681818 },
    { ftPerSec: 100, mph: 100 * 0.681818 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Feet per Second (ft/s)
            </th>
            <th className="px-4 py-2 border border-green-900">
              Miles per Hour (mph)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.ftPerSec.toFixed(3)}
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
