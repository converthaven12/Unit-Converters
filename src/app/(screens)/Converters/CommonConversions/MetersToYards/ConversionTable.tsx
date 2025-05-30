import React from "react";

const ConversionTable = () => {
const data = [
  { meter: 0.01, yard: 0.010936133 },
  { meter: 0.1, yard: 0.1093613298 },
  { meter: 1, yard: 1.0936132983 },
  { meter: 2, yard: 2.1872265967 },
  { meter: 3, yard: 3.280839895 },
  { meter: 5, yard: 5.4680664917 },
  { meter: 10, yard: 10.9361329834 },
  { meter: 20, yard: 21.8722659668 },
  { meter: 50, yard: 54.6806649169 },
  { meter: 100, yard: 109.3613298338 },
  { meter: 1000, yard: 1093.6132983377 }
];


  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Meter [m]</th>
            <th className="px-4 py-2 border border-green-900">Yard [yd]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.meter}</td>
              <td className="px-4 py-2 border border-green-800">{row.yard}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
