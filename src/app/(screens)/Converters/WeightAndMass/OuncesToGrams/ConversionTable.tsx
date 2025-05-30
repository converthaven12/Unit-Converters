import React from "react";

const ConversionTable = () => {
const data = [
  { oz: "0.01 oz", g: "0.2834952313 g" },
  { oz: "0.1 oz", g: "2.8349523125 g" },
  { oz: "1 oz", g: "28.349523125 g" },
  { oz: "2 oz", g: "56.69904625 g" },
  { oz: "3 oz", g: "85.048569375 g" },
  { oz: "5 oz", g: "141.747615625 g" },
  { oz: "10 oz", g: "283.49523125 g" },
  { oz: "20 oz", g: "566.9904625 g" },
  { oz: "50 oz", g: "1417.47615625 g" },
  { oz: "100 oz", g: "2834.9523125 g" },
  { oz: "1000 oz", g: "28349.523125 g" },
];


  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Ounce [oz]
            </th>
            <th className="px-4 py-2 border border-green-900">Gram [g]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.oz}</td>
              <td className="px-4 py-2 border border-green-800">{row.g}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
