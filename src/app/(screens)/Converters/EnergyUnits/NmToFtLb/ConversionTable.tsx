import React from "react";

const ConversionTable = () => {
  const data = [
    { nm: 1, ftLb: 1 * 0.73756 },
    { nm: 5, ftLb: 5 * 0.73756 },
    { nm: 10, ftLb: 10 * 0.73756 },
    { nm: 20, ftLb: 20 * 0.73756 },
    { nm: 50, ftLb: 50 * 0.73756 },
    { nm: 75, ftLb: 75 * 0.73756 },
    { nm: 100, ftLb: 100 * 0.73756 },
    { nm: 0.5, ftLb: 0.5 * 0.73756 },
    { nm: 2.5, ftLb: 2.5 * 0.73756 },
    { nm: 123.4, ftLb: 123.4 * 0.73756 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Newton-Meters (Nm)
            </th>
            <th className="px-4 py-2 border border-green-900">
              Foot-Pounds (ft·lb)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.nm.toFixed(3)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.ftLb.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
