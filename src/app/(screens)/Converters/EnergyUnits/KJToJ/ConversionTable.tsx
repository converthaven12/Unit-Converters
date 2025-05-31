import React from "react";

const ConversionTable = () => {
  const data = [
    { kilojoules: 1, joules: 1 * 1000 },
    { kilojoules: 2, joules: 2 * 1000 },
    { kilojoules: 5, joules: 5 * 1000 },
    { kilojoules: 10, joules: 10 * 1000 },
    { kilojoules: 15, joules: 15 * 1000 },
    { kilojoules: 20, joules: 20 * 1000 },
    { kilojoules: 0.5, joules: 0.5 * 1000 },
    { kilojoules: 0.1, joules: 0.1 * 1000 },
    { kilojoules: 7.5, joules: 7.5 * 1000 },
    { kilojoules: 12.3, joules: 12.3 * 1000 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Kilojoules (kJ)
            </th>
            <th className="px-4 py-2 border border-green-900">Joules (J)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.kilojoules.toFixed(3)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.joules.toFixed(0)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
