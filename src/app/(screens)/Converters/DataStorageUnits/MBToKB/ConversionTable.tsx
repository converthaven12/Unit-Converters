import React from "react";

const ConversionTable = () => {
  const data = [
    { mb: 0.5, kb: 0.5 * 1024 },
    { mb: 1, kb: 1 * 1024 },
    { mb: 2, kb: 2 * 1024 },
    { mb: 5, kb: 5 * 1024 },
    { mb: 10, kb: 10 * 1024 },
    { mb: 50, kb: 50 * 1024 },
    { mb: 100, kb: 100 * 1024 },
    { mb: 256, kb: 256 * 1024 },
    { mb: 512, kb: 512 * 1024 },
    { mb: 1024, kb: 1024 * 1024 },
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
              Kilobytes (KB)
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
                {row.kb.toFixed(0)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
