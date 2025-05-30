import React from "react";

const ConversionTable = () => {
const data = [
  { feet: 0.01, inches: 0.12 },
  { feet: 0.1, inches: 1.2 },
  { feet: 1, inches: 12 },
  { feet: 2, inches: 24 },
  { feet: 3, inches: 36 },
  { feet: 5, inches: 60 },
  { feet: 10, inches: 120 },
  { feet: 20, inches: 240 },
  { feet: 50, inches: 600 },
  { feet: 100, inches: 1200 },
  { feet: 1000, inches: 12000 }
];


  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Foot [ft]</th>
            <th className="px-4 py-2 border border-green-900">Inch [in]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.feet}</td>
              <td className="px-4 py-2 border border-green-800">{row.inches}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
