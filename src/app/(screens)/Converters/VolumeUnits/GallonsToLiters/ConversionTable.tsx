import React from "react";

const ConversionTable = () => {
  const data = [
    { gallon: 1, liter: 3.78541 },
    { gallon: 0.5, liter: 1.89271 },
    { gallon: 0.25, liter: 0.94635 },
    { gallon: 2, liter: 7.57082 },
    { gallon: 3, liter: 11.35623 },
    { gallon: 5, liter: 18.92705 },
    { gallon: 10, liter: 37.8541 },
    { gallon: 0.1, liter: 0.37854 },
    { gallon: 0.01, liter: 0.03785 },
    { gallon: 0.001, liter: 0.00379 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Gallons [gal]</th>
            <th className="px-4 py-2 border border-green-900">Liters [L]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.gallon}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.liter.toFixed(5)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
