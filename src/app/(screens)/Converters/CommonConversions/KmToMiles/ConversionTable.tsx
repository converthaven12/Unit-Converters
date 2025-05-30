import React from "react";

const ConversionTable = () => {
const data = [
  { km: 0.01, mi: 0.0062137119 },
  { km: 0.1, mi: 0.0621371192 },
  { km: 1, mi: 0.6213711922 },
  { km: 2, mi: 1.2427423845 },
  { km: 3, mi: 1.8641135767 },
  { km: 5, mi: 3.1068559612 },
  { km: 10, mi: 6.2137119224 },
  { km: 20, mi: 12.4274238447 },
  { km: 50, mi: 31.0685596119 },
  { km: 100, mi: 62.1371192237 },
  { km: 1000, mi: 621.3711922373 }
];





  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Kilometer [km]</th>
            <th className="px-4 py-2 border border-green-900">Mile [mi, Mi(Int)]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.km}</td>
              <td className="px-4 py-2 border border-green-800">{row.mi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
