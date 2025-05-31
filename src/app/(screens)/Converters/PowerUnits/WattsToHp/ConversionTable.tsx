import React from "react";

const ConversionTable = () => {
  const data = [
    { watts: 100, hp: 100 / 745.7 },
    { watts: 200, hp: 200 / 745.7 },
    { watts: 500, hp: 500 / 745.7 },
    { watts: 745.7, hp: 745.7 / 745.7 },
    { watts: 1000, hp: 1000 / 745.7 },
    { watts: 1500, hp: 1500 / 745.7 },
    { watts: 2000, hp: 2000 / 745.7 },
    { watts: 3000, hp: 3000 / 745.7 },
    { watts: 5000, hp: 5000 / 745.7 },
    { watts: 10000, hp: 10000 / 745.7 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Watts (W)</th>
            <th className="px-4 py-2 border border-green-900">
              Horsepower (Hp)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="px-4 py-2 border border-green-800">
                {row.watts.toFixed(2)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.hp.toFixed(4)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
