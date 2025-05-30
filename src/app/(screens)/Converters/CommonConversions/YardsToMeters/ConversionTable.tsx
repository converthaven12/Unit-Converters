import React from "react";

const ConversionTable = () => {
const data = [
  { yard: 0.01, meter: 0.009144 },
  { yard: 0.1, meter: 0.09144 },
  { yard: 1, meter: 0.9144 },
  { yard: 2, meter: 1.8288 },
  { yard: 3, meter: 2.7432 },
  { yard: 5, meter: 4.572 },
  { yard: 10, meter: 9.144 },
  { yard: 20, meter: 18.288 },
  { yard: 50, meter: 45.72 },
  { yard: 100, meter: 91.44 },
  { yard: 1000, meter: 914.4 },
];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Yard [yd]</th>
            <th className="px-4 py-2 border border-green-900">Meter [m]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.yard}</td>
              <td className="px-4 py-2 border border-green-800">{row.meter}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
