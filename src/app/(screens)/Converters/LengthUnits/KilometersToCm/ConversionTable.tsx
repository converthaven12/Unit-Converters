import React from "react";

const ConversionTable = () => {
  const data = [
    { km: 0.001, cm: 100 },
    { km: 0.01, cm: 1_000 },
    { km: 0.1, cm: 10_000 },
    { km: 0.5, cm: 50_000 },
    { km: 1, cm: 100_000 },
    { km: 2, cm: 200_000 },
    { km: 5, cm: 500_000 },
    { km: 10, cm: 1_000_000 },
    { km: 20, cm: 2_000_000 },
    { km: 50, cm: 5_000_000 },
    { km: 100, cm: 10_000_000 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Kilometer [km]
            </th>
            <th className="px-4 py-2 border border-green-900">
              Centimeter [cm]
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.km}</td>
              <td className="px-4 py-2 border border-green-800">
                {row.cm.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
