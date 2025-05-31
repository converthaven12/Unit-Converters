import React from "react";

const ConversionTable = () => {
  const data = [
    { mb: 1, gb: 1 / 1024 },
    { mb: 512, gb: 512 / 1024 },
    { mb: 1024, gb: 1024 / 1024 },
    { mb: 2048, gb: 2048 / 1024 },
    { mb: 4096, gb: 4096 / 1024 },
    { mb: 8192, gb: 8192 / 1024 },
    { mb: 0.5, gb: 0.5 / 1024 },
    { mb: 256.5, gb: 256.5 / 1024 },
    { mb: 1500, gb: 1500 / 1024 },
    { mb: 10000, gb: 10000 / 1024 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Megabytes (MB)
            </th>
            <th className="px-4 py-2 border border-green-900">
              Gigabytes (GB)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.mb.toFixed(3)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.gb.toFixed(6)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
