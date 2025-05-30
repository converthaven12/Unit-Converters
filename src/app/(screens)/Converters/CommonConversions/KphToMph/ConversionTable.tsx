import React from "react";

const ConversionTable = () => {
  const data = [
    { kph: 0.01, mph: 0.0062137119 },
    { kph: 0.1, mph: 0.0621371192 },
    { kph: 1, mph: 0.6213711922 },
    { kph: 2, mph: 1.2427423845 },
    { kph: 3, mph: 1.8641135767 },
    { kph: 5, mph: 3.1068559612 },
    { kph: 10, mph: 6.2137119224 },
    { kph: 20, mph: 12.4274238447 },
    { kph: 50, mph: 31.0685596119 },
    { kph: 100, mph: 62.1371192237 },
    { kph: 1000, mph: 621.3711922373 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Kilometer/hour [km/h]{" "}
            </th>
            <th className="px-4 py-2 border border-green-900">
              Mile/hour [mi/h]
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.kph}</td>
              <td className="px-4 py-2 border border-green-800">{row.mph}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
