import React from "react";

const ConversionTable = () => {
  const data = [
    { newtons: 1, kg: 1 / 9.80665 },
    { newtons: 5, kg: 5 / 9.80665 },
    { newtons: 10, kg: 10 / 9.80665 },
    { newtons: 20, kg: 20 / 9.80665 },
    { newtons: 50, kg: 50 / 9.80665 },
    { newtons: 75, kg: 75 / 9.80665 },
    { newtons: 100, kg: 100 / 9.80665 },
    { newtons: 0.5, kg: 0.5 / 9.80665 },
    { newtons: 2.5, kg: 2.5 / 9.80665 },
    { newtons: 123.4, kg: 123.4 / 9.80665 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Newtons (N)</th>
            <th className="px-4 py-2 border border-green-900">
              Kilograms (kg)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.newtons.toFixed(3)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.kg.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
