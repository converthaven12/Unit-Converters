import React from "react";

const ConversionTable = () => {
  const data = [
    { mph: 0.01, kph: 0.01609344 },
    { mph: 0.1, kph: 0.1609344 },
    { mph: 1, kph: 1.609344 },
    { mph: 2, kph: 3.218688 },
    { mph: 3, kph: 4.828032 },
    { mph: 5, kph: 8.04672 },
    { mph: 10, kph: 16.09344 },
    { mph: 20, kph: 32.18688 },
    { mph: 50, kph: 80.4672 },
    { mph: 100, kph: 160.9344 },
    { mph: 1000, kph: 1609.344 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Mile/hour [mi/h]
            </th>
            <th className="px-4 py-2 border border-green-900">
              Kilometer/hour [km/h]{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.mph}</td>
              <td className="px-4 py-2 border border-green-800">{row.kph}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
