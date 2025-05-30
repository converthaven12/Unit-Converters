import React from "react";

const ConversionTable = () => {
const data = [
  { liter: 0.01, gallonUS: 0.0026417205 },
  { liter: 0.1, gallonUS: 0.0264172052 },
  { liter: 1, gallonUS: 0.2641720524 },
  { liter: 2, gallonUS: 0.5283441047 },
  { liter: 3, gallonUS: 0.7925161571 },
  { liter: 5, gallonUS: 1.3208602618 },
  { liter: 10, gallonUS: 2.6417205236 },
  { liter: 20, gallonUS: 5.2834410472 },
  { liter: 50, gallonUS: 13.2086026179 },
  { liter: 100, gallonUS: 26.4172052358 },
  { liter: 1000, gallonUS: 264.1720523581 }
];


  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Liter [L, L]</th>
            <th className="px-4 py-2 border border-green-900">Gallon (US) [gal (US)]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.liter}</td>
              <td className="px-4 py-2 border border-green-800">{row.gallonUS}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
