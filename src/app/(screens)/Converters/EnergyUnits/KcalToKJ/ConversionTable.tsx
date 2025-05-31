import React from "react";

const ConversionTable = () => {
  const data = [
    { kilocalories: 1, kilojoules: 1 * 4.184 },
    { kilocalories: 2, kilojoules: 2 * 4.184 },
    { kilocalories: 5, kilojoules: 5 * 4.184 },
    { kilocalories: 10, kilojoules: 10 * 4.184 },
    { kilocalories: 15, kilojoules: 15 * 4.184 },
    { kilocalories: 20, kilojoules: 20 * 4.184 },
    { kilocalories: 0.5, kilojoules: 0.5 * 4.184 },
    { kilocalories: 0.1, kilojoules: 0.1 * 4.184 },
    { kilocalories: 7.5, kilojoules: 7.5 * 4.184 },
    { kilocalories: 12.3, kilojoules: 12.3 * 4.184 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Kilocalories (kcal)
            </th>
            <th className="px-4 py-2 border border-green-900">
              Kilojoules (kJ)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.kilocalories.toFixed(3)}
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
