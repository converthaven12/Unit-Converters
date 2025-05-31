import React from "react";

const ConversionTable = () => {
  const data = [
    { kilojoules: 4.184, kilocalories: 4.184 / 4.184 },
    { kilojoules: 8.368, kilocalories: 8.368 / 4.184 },
    { kilojoules: 20.92, kilocalories: 20.92 / 4.184 },
    { kilojoules: 41.84, kilocalories: 41.84 / 4.184 },
    { kilojoules: 62.76, kilocalories: 62.76 / 4.184 },
    { kilojoules: 83.68, kilocalories: 83.68 / 4.184 },
    { kilojoules: 10, kilocalories: 10 / 4.184 },
    { kilojoules: 1, kilocalories: 1 / 4.184 },
    { kilojoules: 15.5, kilocalories: 15.5 / 4.184 },
    { kilojoules: 33.47, kilocalories: 33.47 / 4.184 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Kilojoules (kJ)
            </th>
            <th className="px-4 py-2 border border-green-900">
              Kilocalories (kcal)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.kilojoules.toFixed(3)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.kilocalories.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
