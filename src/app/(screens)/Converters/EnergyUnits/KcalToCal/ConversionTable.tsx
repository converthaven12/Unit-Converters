import React from "react";

const ConversionTable = () => {
  const data = [
    { kilocalories: 1, calories: 1 * 1000 },
    { kilocalories: 2, calories: 2 * 1000 },
    { kilocalories: 5, calories: 5 * 1000 },
    { kilocalories: 10, calories: 10 * 1000 },
    { kilocalories: 15, calories: 15 * 1000 },
    { kilocalories: 20, calories: 20 * 1000 },
    { kilocalories: 0.5, calories: 0.5 * 1000 },
    { kilocalories: 0.1, calories: 0.1 * 1000 },
    { kilocalories: 7.5, calories: 7.5 * 1000 },
    { kilocalories: 12.3, calories: 12.3 * 1000 },
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
              Calories (cal)
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
                {row.calories.toFixed(0)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
