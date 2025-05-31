import React from "react";

const ConversionTable = () => {
  const data = [
    { gb: 0.5, mb: 0.5 * 1024 },
    { gb: 1, mb: 1 * 1024 },
    { gb: 2, mb: 2 * 1024 },
    { gb: 5, mb: 5 * 1024 },
    { gb: 10, mb: 10 * 1024 },
    { gb: 15.5, mb: 15.5 * 1024 },
    { gb: 20, mb: 20 * 1024 },
    { gb: 50, mb: 50 * 1024 },
    { gb: 100, mb: 100 * 1024 },
    { gb: 256, mb: 256 * 1024 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Gigabytes (GB)
            </th>
            <th className="px-4 py-2 border border-green-900">
              Megabytes (MB)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.gb.toFixed(3)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.mb.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
