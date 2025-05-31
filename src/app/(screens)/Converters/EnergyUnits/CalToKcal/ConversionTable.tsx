import React from "react";

const ConversionTable = () => {
  const data = [
    { calories: 1000, kilocalories: 1000 / 1000 },
    { calories: 2000, kilocalories: 2000 / 1000 },
    { calories: 5000, kilocalories: 5000 / 1000 },
    { calories: 10000, kilocalories: 10000 / 1000 },
    { calories: 15000, kilocalories: 15000 / 1000 },
    { calories: 20000, kilocalories: 20000 / 1000 },
    { calories: 500, kilocalories: 500 / 1000 },
    { calories: 100, kilocalories: 100 / 1000 },
    { calories: 7500, kilocalories: 7500 / 1000 },
    { calories: 12300, kilocalories: 12300 / 1000 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Calories (cal)
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
                {row.calories.toFixed(0)}
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
