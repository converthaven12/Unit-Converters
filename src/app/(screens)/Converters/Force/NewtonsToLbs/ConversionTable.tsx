import React from "react";

const ConversionTable = () => {
  const data = [
    { newtons: 1, lbs: 1 * 0.224809 },
    { newtons: 5, lbs: 5 * 0.224809 },
    { newtons: 10, lbs: 10 * 0.224809 },
    { newtons: 20, lbs: 20 * 0.224809 },
    { newtons: 50, lbs: 50 * 0.224809 },
    { newtons: 75, lbs: 75 * 0.224809 },
    { newtons: 100, lbs: 100 * 0.224809 },
    { newtons: 0.5, lbs: 0.5 * 0.224809 },
    { newtons: 2.5, lbs: 2.5 * 0.224809 },
    { newtons: 123.4, lbs: 123.4 * 0.224809 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Newtons (N)</th>
            <th className="px-4 py-2 border border-green-900">
              Pounds-Force (lbf)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.newtons.toFixed(3)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.lbs.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
