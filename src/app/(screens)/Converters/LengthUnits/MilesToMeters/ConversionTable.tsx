import React from "react";

const ConversionTable = () => {
  const data = [
    { mi: 0.0001, m: 0.1609 },
    { mi: 0.001, m: 1.609 },
    { mi: 0.01, m: 16.093 },
    { mi: 0.1, m: 160.934 },
    { mi: 0.25, m: 402.336 },
    { mi: 0.5, m: 804.672 },
    { mi: 1, m: 1609.344 },
    { mi: 2, m: 3218.688 },
    { mi: 5, m: 8046.72 },
    { mi: 10, m: 16093.44 },
    { mi: 20, m: 32186.88 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Mile [mi]</th>
            <th className="px-4 py-2 border border-green-900">Meter [m]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.mi}</td>
              <td className="px-4 py-2 border border-green-800">{row.m}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
