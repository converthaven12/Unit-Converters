import React from "react";

const ConversionTable = () => {
  const data = [
    { kg: 1, newtons: 1 * 9.80665 },
    { kg: 5, newtons: 5 * 9.80665 },
    { kg: 10, newtons: 10 * 9.80665 },
    { kg: 20, newtons: 20 * 9.80665 },
    { kg: 50, newtons: 50 * 9.80665 },
    { kg: 75, newtons: 75 * 9.80665 },
    { kg: 100, newtons: 100 * 9.80665 },
    { kg: 0.5, newtons: 0.5 * 9.80665 },
    { kg: 2.5, newtons: 2.5 * 9.80665 },
    { kg: 123.4, newtons: 123.4 * 9.80665 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Kilograms (kg)
            </th>
            <th className="px-4 py-2 border border-green-900">Newtons (N)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.kg.toFixed(3)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.newtons.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
