import React from "react";

const ConversionTable = () => {
  const data = [
    { kb: 512, mb: 512 / 1024 },
    { kb: 1024, mb: 1024 / 1024 },
    { kb: 2048, mb: 2048 / 1024 },
    { kb: 3072, mb: 3072 / 1024 },
    { kb: 4096, mb: 4096 / 1024 },
    { kb: 5120, mb: 5120 / 1024 },
    { kb: 10240, mb: 10240 / 1024 },
    { kb: 20480, mb: 20480 / 1024 },
    { kb: 51200, mb: 51200 / 1024 },
    { kb: 102400, mb: 102400 / 1024 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Kilobytes (KB)
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
                {row.kb.toFixed(0)}
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
