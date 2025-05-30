import React from "react";

const data = [
  { g: "0.01 g", oz: "0.0003527396 oz" },
  { g: "0.1 g", oz: "0.0035273962 oz" },
  { g: "1 g", oz: "0.0352739619 oz" },
  { g: "2 g", oz: "0.0705479239 oz" },
  { g: "3 g", oz: "0.1058218858 oz" },
  { g: "5 g", oz: "0.1763698097 oz" },
  { g: "10 g", oz: "0.3527396195 oz" },
  { g: "20 g", oz: "0.705479239 oz" },
  { g: "50 g", oz: "1.7636980975 oz" },
  { g: "100 g", oz: "3.527396195 oz" },
  { g: "1000 g", oz: "35.2739619496 oz" }
];


const ConversionTable = () => {
  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Gram [g]</th>
            <th className="px-4 py-2 border border-green-900">Ounce [oz]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.g}</td>
              <td className="px-4 py-2 border border-green-800">{row.oz}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
