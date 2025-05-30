import React from "react";

const ConversionTable = () => {
const data = [
  { gallonUS: 0.01, liter: 0.0378541178 },
  { gallonUS: 0.1, liter: 0.3785411784 },
  { gallonUS: 1, liter: 3.785411784 },
  { gallonUS: 2, liter: 7.570823568 },
  { gallonUS: 3, liter: 11.356235352 },
  { gallonUS: 5, liter: 18.92705892 },
  { gallonUS: 10, liter: 37.85411784 },
  { gallonUS: 20, liter: 75.70823568 },
  { gallonUS: 50, liter: 189.2705892 },
  { gallonUS: 100, liter: 378.5411784 },
  { gallonUS: 1000, liter: 3785.411784 }
];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Gallon (US) [gal (US)]</th>
            <th className="px-4 py-2 border border-green-900">Liter [L, L]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.gallonUS}</td>
              <td className="px-4 py-2 border border-green-800">{row.liter}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
