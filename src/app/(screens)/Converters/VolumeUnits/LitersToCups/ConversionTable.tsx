import React from "react";

const ConversionTable = () => {
  const data = [
    { l: 1, cup: 1 / 0.236588 },
    { l: 0.5, cup: 0.5 / 0.236588 },
    { l: 0.25, cup: 0.25 / 0.236588 },
    { l: 2, cup: 2 / 0.236588 },
    { l: 3, cup: 3 / 0.236588 },
    { l: 4, cup: 4 / 0.236588 },
    { l: 0.1, cup: 0.1 / 0.236588 },
    { l: 0.05, cup: 0.05 / 0.236588 },
    { l: 0.01, cup: 0.01 / 0.236588 },
    { l: 5, cup: 5 / 0.236588 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Liters [l]</th>
            <th className="px-4 py-2 border border-green-900">Cups [cup]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.l}</td>
              <td className="px-4 py-2 border border-green-800">
                {row.cup.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
