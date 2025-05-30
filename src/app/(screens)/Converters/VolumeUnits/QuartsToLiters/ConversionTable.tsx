import React from "react";

const ConversionTable = () => {
  const data = [
    { qt: 1, l: 1 * 0.946353 },
    { qt: 0.5, l: 0.5 * 0.946353 },
    { qt: 0.25, l: 0.25 * 0.946353 },
    { qt: 2, l: 2 * 0.946353 },
    { qt: 3, l: 3 * 0.946353 },
    { qt: 4, l: 4 * 0.946353 },
    { qt: 0.1, l: 0.1 * 0.946353 },
    { qt: 0.05, l: 0.05 * 0.946353 },
    { qt: 0.01, l: 0.01 * 0.946353 },
    { qt: 5, l: 5 * 0.946353 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Quarts [qt]</th>
            <th className="px-4 py-2 border border-green-900">Liters [l]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.qt}</td>
              <td className="px-4 py-2 border border-green-800">
                {row.l.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
