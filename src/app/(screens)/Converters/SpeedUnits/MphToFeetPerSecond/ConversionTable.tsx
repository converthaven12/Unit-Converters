import React from "react";

const ConversionTable = () => {
  const data = [
    { mph: 1, ftPerSec: 1 / 0.681818 },
    { mph: 5, ftPerSec: 5 / 0.681818 },
    { mph: 10, ftPerSec: 10 / 0.681818 },
    { mph: 15, ftPerSec: 15 / 0.681818 },
    { mph: 20, ftPerSec: 20 / 0.681818 },
    { mph: 25, ftPerSec: 25 / 0.681818 },
    { mph: 0.5, ftPerSec: 0.5 / 0.681818 },
    { mph: 2.5, ftPerSec: 2.5 / 0.681818 },
    { mph: 30.2, ftPerSec: 30.2 / 0.681818 },
    { mph: 100, ftPerSec: 100 / 0.681818 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Miles per Hour (mph)
            </th>
            <th className="px-4 py-2 border border-green-900">
              Feet per Second (ft/s)
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
                {row.ftPerSec.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
