import React from "react";

const ConversionTable = () => {
  const data = [
    { mm: 1, ft: 0.003281 },
    { mm: 10, ft: 0.03281 },
    { mm: 100, ft: 0.3281 },
    { mm: 300, ft: 0.9843 },
    { mm: 500, ft: 1.6404 },
    { mm: 1000, ft: 3.2808 },
    { mm: 1500, ft: 4.9213 },
    { mm: 2000, ft: 6.5617 },
    { mm: 5000, ft: 16.4042 },
    { mm: 10000, ft: 32.8084 },
    { mm: 20000, ft: 65.6168 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Millimeter [mm]
            </th>
            <th className="px-4 py-2 border border-green-900">Feet [ft]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.mm}</td>
              <td className="px-4 py-2 border border-green-800">{row.ft}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
