import React from "react";

const ConversionTable = () => {
  const data = [
    { btu: 6000, ton: 6000 / 12000 },
    { btu: 12000, ton: 12000 / 12000 },
    { btu: 18000, ton: 18000 / 12000 },
    { btu: 24000, ton: 24000 / 12000 },
    { btu: 30000, ton: 30000 / 12000 },
    { btu: 36000, ton: 36000 / 12000 },
    { btu: 42000, ton: 42000 / 12000 },
    { btu: 48000, ton: 48000 / 12000 },
    { btu: 54000, ton: 54000 / 12000 },
    { btu: 60000, ton: 60000 / 12000 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-blue-700 text-white text-left">
            <th className="px-4 py-2 border border-blue-900">
              British Thermal Unit (BTU)
            </th>
            <th className="px-4 py-2 border border-blue-900">
              Ton of Refrigeration
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="px-4 py-2 border border-blue-800">
                {row.btu.toLocaleString()}
              </td>
              <td className="px-4 py-2 border border-blue-800">
                {row.ton.toFixed(4)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
