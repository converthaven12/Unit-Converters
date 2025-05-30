import React from "react";

const data = [
  { g: "0.01 g", lbs: "0.0000220462 lbs" },
  { g: "0.1 g", lbs: "0.0002204623 lbs" },
  { g: "1 g", lbs: "0.0022046226 lbs" },
  { g: "2 g", lbs: "0.0044092452 lbs" },
  { g: "3 g", lbs: "0.0066138679 lbs" },
  { g: "5 g", lbs: "0.0110231131 lbs" },
  { g: "10 g", lbs: "0.0220462262 lbs" },
  { g: "20 g", lbs: "0.0440924524 lbs" },
  { g: "50 g", lbs: "0.1102311311 lbs" },
  { g: "100 g", lbs: "0.2204622622 lbs" },
  { g: "1000 g", lbs: "2.2046226218 lbs" }
];



const ConversionTable = () => {
  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Gram [g]</th>
            <th className="px-4 py-2 border border-green-900">Pound [lbs]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.g}</td>
              <td className="px-4 py-2 border border-green-800">{row.lbs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
