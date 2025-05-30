import React from "react";

const ConversionTable = () => {
  const data = [
    { kilometer: 0.001, meter: 1 },
    { kilometer: 0.005, meter: 5 },
    { kilometer: 0.01, meter: 10 },
    { kilometer: 0.02, meter: 20 },
    { kilometer: 0.05, meter: 50 },
    { kilometer: 0.1, meter: 100 },
    { kilometer: 0.2, meter: 200 },
    { kilometer: 0.5, meter: 500 },
    { kilometer: 1, meter: 1000 },
    { kilometer: 2, meter: 2000 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Kilometers [km]
            </th>
            <th className="px-4 py-2 border border-green-900">Meters [m]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.kilometer}
              </td>
              <td className="px-4 py-2 border border-green-800">{row.meter}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
