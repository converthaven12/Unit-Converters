import React from "react";

const ConversionTable = () => {
  const data = [
    { bar: 0.1, psi: 0.1 * 14.5038 },
    { bar: 0.5, psi: 0.5 * 14.5038 },
    { bar: 1, psi: 1 * 14.5038 },
    { bar: 2, psi: 2 * 14.5038 },
    { bar: 5, psi: 5 * 14.5038 },
    { bar: 10, psi: 10 * 14.5038 },
    { bar: 20, psi: 20 * 14.5038 },
    { bar: 50, psi: 50 * 14.5038 },
    { bar: 100, psi: 100 * 14.5038 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-blue-700 text-white text-left">
            <th className="px-4 py-2 border border-blue-900">Bar</th>
            <th className="px-4 py-2 border border-blue-900">
              Pounds per Square Inch (psi)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="px-4 py-2 border border-blue-800">
                {row.bar.toFixed(2)}
              </td>
              <td className="px-4 py-2 border border-blue-800">
                {row.psi.toFixed(4)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
