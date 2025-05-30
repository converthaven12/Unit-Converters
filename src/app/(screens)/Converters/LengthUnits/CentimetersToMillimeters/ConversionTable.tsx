import React from "react";

const ConversionTable = () => {
  const data = [
    { cm: 0.01, mm: 0.1 },
    { cm: 0.1, mm: 1 },
    { cm: 1, mm: 10 },
    { cm: 2, mm: 20 },
    { cm: 3, mm: 30 },
    { cm: 5, mm: 50 },
    { cm: 10, mm: 100 },
    { cm: 20, mm: 200 },
    { cm: 50, mm: 500 },
    { cm: 100, mm: 1000 },
    { cm: 1000, mm: 10000 },
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
              Millimeter [mm]
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.cm}</td>
              <td className="px-4 py-2 border border-green-800">{row.mm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
