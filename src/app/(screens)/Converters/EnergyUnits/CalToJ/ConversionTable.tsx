import React from "react";

const ConversionTable = () => {
  const data = [
    { calories: 100, joules: 100 * 4.184 },
    { calories: 250, joules: 250 * 4.184 },
    { calories: 500, joules: 500 * 4.184 },
    { calories: 750, joules: 750 * 4.184 },
    { calories: 1000, joules: 1000 * 4.184 },
    { calories: 1500, joules: 1500 * 4.184 },
    { calories: 2000, joules: 2000 * 4.184 },
    { calories: 50, joules: 50 * 4.184 },
    { calories: 5, joules: 5 * 4.184 },
    { calories: 1234, joules: 1234 * 4.184 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Calories (cal)
            </th>
            <th className="px-4 py-2 border border-green-900">Joules (J)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.calories.toFixed(0)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.joules.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
