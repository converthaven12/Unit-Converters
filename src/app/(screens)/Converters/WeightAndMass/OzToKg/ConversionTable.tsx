import React from "react";

const ConversionTable = () => {
const data = [
  { oz: 0.01, kg: 0.0002834952 },
  { oz: 0.1,  kg: 0.0028349523 },
  { oz: 1,    kg: 0.0283495231 },
  { oz: 2,    kg: 0.0566990463 },
  { oz: 3,    kg: 0.0850485694 },
  { oz: 5,    kg: 0.1417476156 },
  { oz: 10,   kg: 0.2834952313 },
  { oz: 20,   kg: 0.5669904625 },
  { oz: 50,   kg: 1.4174761563 },
  { oz: 100,  kg: 2.8349523125 },
  { oz: 1000, kg: 28.349523125 }
];



  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Ounce [oz]
            </th>
            <th className="px-4 py-2 border border-green-900">Kilogram [kg]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.oz}</td>
              <td className="px-4 py-2 border border-green-800">{row.kg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
