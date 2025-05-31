import React from "react";

const ConversionTable = () => {
  const data = [
    { lbs: 1, newtons: 1 / 0.224809 },
    { lbs: 5, newtons: 5 / 0.224809 },
    { lbs: 10, newtons: 10 / 0.224809 },
    { lbs: 20, newtons: 20 / 0.224809 },
    { lbs: 50, newtons: 50 / 0.224809 },
    { lbs: 75, newtons: 75 / 0.224809 },
    { lbs: 100, newtons: 100 / 0.224809 },
    { lbs: 0.5, newtons: 0.5 / 0.224809 },
    { lbs: 2.5, newtons: 2.5 / 0.224809 },
    { lbs: 123.4, newtons: 123.4 / 0.224809 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Pounds-Force (lbf)
            </th>
            <th className="px-4 py-2 border border-green-900">Newtons (N)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.lbs.toFixed(3)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.newtons.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
