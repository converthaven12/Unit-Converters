import React from "react";

const ConversionTable = () => {
  const data = [
    { ftLb: 1, nm: 1 * 1.35582 },
    { ftLb: 5, nm: 5 * 1.35582 },
    { ftLb: 10, nm: 10 * 1.35582 },
    { ftLb: 20, nm: 20 * 1.35582 },
    { ftLb: 50, nm: 50 * 1.35582 },
    { ftLb: 75, nm: 75 * 1.35582 },
    { ftLb: 100, nm: 100 * 1.35582 },
    { ftLb: 0.5, nm: 0.5 * 1.35582 },
    { ftLb: 2.5, nm: 2.5 * 1.35582 },
    { ftLb: 123.4, nm: 123.4 * 1.35582 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Foot-Pounds (ft·lb)
            </th>
            <th className="px-4 py-2 border border-green-900">
              Newton-Meters (Nm)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.ftLb.toFixed(3)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.nm.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
