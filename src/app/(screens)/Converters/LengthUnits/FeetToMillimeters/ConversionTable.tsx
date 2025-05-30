import React from "react";

const ConversionTable = () => {
  const data = [
    { ft: 0.003, mm: 0.9144 },
    { ft: 0.01, mm: 3.048 },
    { ft: 0.1, mm: 30.48 },
    { ft: 0.5, mm: 152.4 },
    { ft: 1, mm: 304.8 },
    { ft: 2, mm: 609.6 },
    { ft: 5, mm: 1524 },
    { ft: 10, mm: 3048 },
    { ft: 20, mm: 6096 },
    { ft: 50, mm: 15240 },
    { ft: 100, mm: 30480 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Feet [ft]</th>
            <th className="px-4 py-2 border border-green-900">
              Millimeter [mm]
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.ft}</td>
              <td className="px-4 py-2 border border-green-800">{row.mm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
