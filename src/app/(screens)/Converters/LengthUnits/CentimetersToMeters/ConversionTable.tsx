import React from "react";

const ConversionTable = () => {
  const data = [
    { cm: 1, m: 0.01 },
    { cm: 2, m: 0.02 },
    { cm: 3, m: 0.03 },
    { cm: 5, m: 0.05 },
    { cm: 10, m: 0.1 },
    { cm: 20, m: 0.2 },
    { cm: 50, m: 0.5 },
    { cm: 100, m: 1 },
    { cm: 200, m: 2 },
    { cm: 500, m: 5 },
    { cm: 1000, m: 10 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Centimeter [cm]
            </th>
            <th className="px-4 py-2 border border-green-900">Meter [m]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.cm}</td>
              <td className="px-4 py-2 border border-green-800">{row.m}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
