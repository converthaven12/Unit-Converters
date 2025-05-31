import React from "react";

const ConversionTable = () => {
  const data = [
    { kpa: 10, psi: 10 * 0.145038 },
    { kpa: 20, psi: 20 * 0.145038 },
    { kpa: 50, psi: 50 * 0.145038 },
    { kpa: 100, psi: 100 * 0.145038 },
    { kpa: 150, psi: 150 * 0.145038 },
    { kpa: 200, psi: 200 * 0.145038 },
    { kpa: 300, psi: 300 * 0.145038 },
    { kpa: 500, psi: 500 * 0.145038 },
    { kpa: 750, psi: 750 * 0.145038 },
    { kpa: 1000, psi: 1000 * 0.145038 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Kilopascal (kPa)
            </th>
            <th className="px-4 py-2 border border-green-900">
              Pounds per Square Inch (psi)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="px-4 py-2 border border-green-800">
                {row.kpa.toFixed(2)}
              </td>
              <td className="px-4 py-2 border border-green-800">
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
