import React from "react";

const ConversionTable = () => {
  const data = [
    { liter: 1, gallon: 1 / 3.78541 },
    { liter: 0.5, gallon: 0.5 / 3.78541 },
    { liter: 0.25, gallon: 0.25 / 3.78541 },
    { liter: 2, gallon: 2 / 3.78541 },
    { liter: 3, gallon: 3 / 3.78541 },
    { liter: 5, gallon: 5 / 3.78541 },
    { liter: 10, gallon: 10 / 3.78541 },
    { liter: 0.1, gallon: 0.1 / 3.78541 },
    { liter: 0.01, gallon: 0.01 / 3.78541 },
    { liter: 0.001, gallon: 0.001 / 3.78541 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Liters [L]</th>
            <th className="px-4 py-2 border border-green-900">Gallons [gal]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.liter}</td>
              <td className="px-4 py-2 border border-green-800">
                {row.gallon.toFixed(5)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
