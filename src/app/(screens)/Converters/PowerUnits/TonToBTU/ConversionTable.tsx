import React from "react";

const ConversionTable = () => {
  const data = [
    { ton: 0.5, btu: 0.5 * 12000 },
    { ton: 1, btu: 1 * 12000 },
    { ton: 1.5, btu: 1.5 * 12000 },
    { ton: 2, btu: 2 * 12000 },
    { ton: 2.5, btu: 2.5 * 12000 },
    { ton: 3, btu: 3 * 12000 },
    { ton: 4, btu: 4 * 12000 },
    { ton: 5, btu: 5 * 12000 },
    { ton: 7.5, btu: 7.5 * 12000 },
    { ton: 10, btu: 10 * 12000 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-blue-700 text-white text-left">
            <th className="px-4 py-2 border border-blue-900">
              Ton of Refrigeration
            </th>
            <th className="px-4 py-2 border border-blue-900">
              British Thermal Unit (BTU)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="px-4 py-2 border border-blue-800">
                {row.ton.toFixed(2)}
              </td>
              <td className="px-4 py-2 border border-blue-800">
                {row.btu.toFixed(0)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
