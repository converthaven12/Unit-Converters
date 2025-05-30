import React from "react";

const ConversionTable = () => {
const data = [
  { lbs: 0.01, oz: 0.16 },
  { lbs: 0.1, oz: 1.6 },
  { lbs: 1, oz: 16 },
  { lbs: 2, oz: 32 },
  { lbs: 3, oz: 48 },
  { lbs: 5, oz: 80 },
  { lbs: 10, oz: 160 },
  { lbs: 20, oz: 320 },
  { lbs: 50, oz: 800 },
  { lbs: 100, oz: 1600 },
  { lbs: 1000, oz: 16000 }
];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Pound [lbs]
            </th>
            <th className="px-4 py-2 border border-green-900">Ounce [oz]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.lbs}</td>
              <td className="px-4 py-2 border border-green-800">{row.oz}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
