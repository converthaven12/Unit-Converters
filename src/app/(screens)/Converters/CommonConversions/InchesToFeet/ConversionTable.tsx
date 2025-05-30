import React from "react";

const ConversionTable = () => {
 const data = [
  { inch: 0.01, mm: 0.254 },
  { inch: 0.1, mm: 2.54 },
  { inch: 1, mm: 25.4 },
  { inch: 2, mm: 50.8 },
  { inch: 3, mm: 76.2 },
  { inch: 5, mm: 127 },
  { inch: 10, mm: 254 },
  { inch: 20, mm: 508 },
  { inch: 50, mm: 1270 },
  { inch: 100, mm: 2540 },
  { inch: 1000, mm: 25400 },
];


  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Inch [in]</th>
            <th className="px-4 py-2 border border-green-900">Millimeter [mm]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.inch}</td>
              <td className="px-4 py-2 border border-green-800">{row.mm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
