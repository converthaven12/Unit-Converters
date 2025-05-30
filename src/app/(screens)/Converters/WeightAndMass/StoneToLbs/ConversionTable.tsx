import React from "react";

const ConversionTable = () => {
const data = [
  { stone: 0.01, pound: 0.125 },
  { stone: 0.1, pound: 1.25 },
  { stone: 1, pound: 12.5 },
  { stone: 2, pound: 25 },
  { stone: 3, pound: 37.5 },
  { stone: 5, pound: 62.5 },
  { stone: 10, pound: 125 },
  { stone: 20, pound: 250 },
  { stone: 50, pound: 625 },
  { stone: 100, pound: 1250 },
  { stone: 1000, pound: 12500 }
];


  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Stone (US)</th>
            <th className="px-4 py-2 border border-green-900">
              Pound [lbs]
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.stone}</td>
              <td className="px-4 py-2 border border-green-800">{row.pound}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
