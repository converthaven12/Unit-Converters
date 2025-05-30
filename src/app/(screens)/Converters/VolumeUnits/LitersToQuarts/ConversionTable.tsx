import React from "react";

const ConversionTable = () => {
  const data = [
    { l: 1, qt: 1 / 0.946353 },
    { l: 0.5, qt: 0.5 / 0.946353 },
    { l: 0.25, qt: 0.25 / 0.946353 },
    { l: 2, qt: 2 / 0.946353 },
    { l: 3, qt: 3 / 0.946353 },
    { l: 4, qt: 4 / 0.946353 },
    { l: 0.1, qt: 0.1 / 0.946353 },
    { l: 0.05, qt: 0.05 / 0.946353 },
    { l: 0.01, qt: 0.01 / 0.946353 },
    { l: 5, qt: 5 / 0.946353 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Liters [l]</th>
            <th className="px-4 py-2 border border-green-900">Quarts [qt]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.l}</td>
              <td className="px-4 py-2 border border-green-800">
                {row.qt.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
