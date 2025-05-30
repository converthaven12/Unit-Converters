import React from "react";

const ConversionTable = () => {
  const data = [
    { m: 1, mi: 0.000621 },
    { m: 10, mi: 0.006214 },
    { m: 100, mi: 0.062137 },
    { m: 500, mi: 0.310685 },
    { m: 1000, mi: 0.621371 },
    { m: 1500, mi: 0.932057 },
    { m: 2000, mi: 1.242742 },
    { m: 5000, mi: 3.106856 },
    { m: 10000, mi: 6.213712 },
    { m: 20000, mi: 12.427423 },
    { m: 50000, mi: 31.068558 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Meter [m]</th>
            <th className="px-4 py-2 border border-green-900">Mile [mi]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.m}</td>
              <td className="px-4 py-2 border border-green-800">{row.mi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
