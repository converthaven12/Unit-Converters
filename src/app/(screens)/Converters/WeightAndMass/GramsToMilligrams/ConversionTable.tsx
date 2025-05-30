import React from "react";

const data = [
  { g: "0.01 g", mg: "10 mg" },
  { g: "0.1 g", mg: "100 mg" },
  { g: "1 g", mg: "1000 mg" },
  { g: "2 g", mg: "2000 mg" },
  { g: "3 g", mg: "3000 mg" },
  { g: "5 g", mg: "5000 mg" },
  { g: "10 g", mg: "10000 mg" },
  { g: "20 g", mg: "20000 mg" },
  { g: "50 g", mg: "50000 mg" },
  { g: "100 g", mg: "100000 mg" },
  { g: "1000 g", mg: "1000000 mg" }
];

const ConversionTable = () => {
  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Gram [g]</th>
            <th className="px-4 py-2 border border-green-900">Milligram [mg]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.g}</td>
              <td className="px-4 py-2 border border-green-800">{row.mg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
