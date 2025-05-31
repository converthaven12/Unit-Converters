import React from "react";

const HpToWattsTable = () => {
  const data = [
    { hp: 0.1, watts: 0.1 * 745.7 },
    { hp: 0.2, watts: 0.2 * 745.7 },
    { hp: 0.5, watts: 0.5 * 745.7 },
    { hp: 1, watts: 1 * 745.7 },
    { hp: 1.5, watts: 1.5 * 745.7 },
    { hp: 2, watts: 2 * 745.7 },
    { hp: 3, watts: 3 * 745.7 },
    { hp: 5, watts: 5 * 745.7 },
    { hp: 10, watts: 10 * 745.7 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Horsepower (Hp)
            </th>
            <th className="px-4 py-2 border border-green-900">Watts (W)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="px-4 py-2 border border-green-800">
                {row.hp.toFixed(2)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.watts.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HpToWattsTable;
