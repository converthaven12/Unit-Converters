import React from "react";

const ConversionTable = () => {
const data = [
  { oz: "0.01 oz", lbs: "0.000625 lbs" },
  { oz: "0.1 oz", lbs: "0.00625 lbs" },
  { oz: "1 oz", lbs: "0.0625 lbs" },
  { oz: "2 oz", lbs: "0.125 lbs" },
  { oz: "3 oz", lbs: "0.1875 lbs" },
  { oz: "5 oz", lbs: "0.3125 lbs" },
  { oz: "10 oz", lbs: "0.625 lbs" },
  { oz: "20 oz", lbs: "1.25 lbs" },
  { oz: "50 oz", lbs: "3.125 lbs" },
  { oz: "100 oz", lbs: "6.25 lbs" },
  { oz: "1000 oz", lbs: "62.5 lbs" }
];



  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Ounce [oz]
            </th>
            <th className="px-4 py-2 border border-green-900">Pound [lbs]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.oz}</td>
              <td className="px-4 py-2 border border-green-800">{row.lbs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
