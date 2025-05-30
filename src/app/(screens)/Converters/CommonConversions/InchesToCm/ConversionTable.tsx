import React from "react";

const ConversionTable = () => {
  const data = [
  { inch: 0.01, cm: 0.0254 },
  { inch: 0.1, cm: 0.254 },
  { inch: 1, cm: 2.54 },
  { inch: 2, cm: 5.08 },
  { inch: 3, cm: 7.62 },
  { inch: 5, cm: 12.7 },
  { inch: 10, cm: 25.4 },
  { inch: 20, cm: 50.8 },
  { inch: 50, cm: 127 },
  { inch: 100, cm: 254 },
  { inch: 1000, cm: 2540 },
];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Inch [in]</th>
            <th className="px-4 py-2 border border-green-900">Centimeter [cm]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.inch}</td>
              <td className="px-4 py-2 border border-green-800">{row.cm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
