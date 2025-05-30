import React from "react";

const ConversionTable = () => {
  const data = [
    { millimeter: 1, meter: 0.001 },
    { millimeter: 5, meter: 0.005 },
    { millimeter: 10, meter: 0.01 },
    { millimeter: 20, meter: 0.02 },
    { millimeter: 50, meter: 0.05 },
    { millimeter: 100, meter: 0.1 },
    { millimeter: 200, meter: 0.2 },
    { millimeter: 500, meter: 0.5 },
    { millimeter: 1000, meter: 1 },
    { millimeter: 2000, meter: 2 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Millimeters [mm]
            </th>
            <th className="px-4 py-2 border border-green-900">Meters [m]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.millimeter}
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
