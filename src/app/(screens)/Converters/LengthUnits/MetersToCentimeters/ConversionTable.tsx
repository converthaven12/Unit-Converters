import React from "react";

const ConversionTable = () => {
  const data = [
    { m: 0.01, cm: 1 },
    { m: 0.1, cm: 10 },
    { m: 1, cm: 100 },
    { m: 2, cm: 200 },
    { m: 3, cm: 300 },
    { m: 5, cm: 500 },
    { m: 10, cm: 1000 },
    { m: 20, cm: 2000 },
    { m: 50, cm: 5000 },
    { m: 100, cm: 10000 },
    { m: 1000, cm: 100000 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Meter [m]</th>
            <th className="px-4 py-2 border border-green-900">
              Centimeter [cm]
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.m}</td>
              <td className="px-4 py-2 border border-green-800">{row.cm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
