import React from "react";

const ConversionTable = () => {
  const data = [
    { inch: 1, meter: 0.0254 },
    { inch: 5, meter: 0.127 },
    { inch: 10, meter: 0.254 },
    { inch: 20, meter: 0.508 },
    { inch: 30, meter: 0.762 },
    { inch: 50, meter: 1.27 },
    { inch: 100, meter: 2.54 },
    { inch: 200, meter: 5.08 },
    { inch: 500, meter: 12.7 },
    { inch: 1000, meter: 25.4 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Inches [in]</th>
            <th className="px-4 py-2 border border-green-900">Meters [m]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.inch}</td>
              <td className="px-4 py-2 border border-green-800">{row.meter}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
