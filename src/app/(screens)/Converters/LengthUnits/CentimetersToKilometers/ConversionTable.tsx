import React from "react";

const ConversionTable = () => {
  const data = [
    { cm: 1000, km: 0.01 },
    { cm: 2000, km: 0.02 },
    { cm: 3000, km: 0.03 },
    { cm: 5000, km: 0.05 },
    { cm: 10000, km: 0.1 },
    { cm: 20000, km: 0.2 },
    { cm: 50000, km: 0.5 },
    { cm: 100000, km: 1 },
    { cm: 200000, km: 2 },
    { cm: 500000, km: 5 },
    { cm: 1000000, km: 10 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Centimeter [cm]
            </th>
            <th className="px-4 py-2 border border-green-900">
              Kilometer [km]
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.cm}</td>
              <td className="px-4 py-2 border border-green-800">{row.km}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
