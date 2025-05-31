import React from "react";

const ConversionTable = () => {
  const data = [
    { joules: 1000, kilojoules: 1000 / 1000 },
    { joules: 2000, kilojoules: 2000 / 1000 },
    { joules: 5000, kilojoules: 5000 / 1000 },
    { joules: 10000, kilojoules: 10000 / 1000 },
    { joules: 15000, kilojoules: 15000 / 1000 },
    { joules: 20000, kilojoules: 20000 / 1000 },
    { joules: 500, kilojoules: 500 / 1000 },
    { joules: 100, kilojoules: 100 / 1000 },
    { joules: 7500, kilojoules: 7500 / 1000 },
    { joules: 12300, kilojoules: 12300 / 1000 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Joules (J)</th>
            <th className="px-4 py-2 border border-green-900">
              Kilojoules (kJ)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.joules.toFixed(0)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.kilojoules.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
