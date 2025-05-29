import React from "react";

const data = [
  { kg: "0.01 kg", g: "10 g" },
  { kg: "0.1 kg", g: "100 g" },
  { kg: "1 kg", g: "1000 g" },
  { kg: "2 kg", g: "2000 g" },
  { kg: "3 kg", g: "3000 g" },
  { kg: "5 kg", g: "5000 g" },
  { kg: "10 kg", g: "10000 g" },
  { kg: "20 kg", g: "20000 g" },
  { kg: "50 kg", g: "50000 g" },
  { kg: "100 kg", g: "100000 g" },
  { kg: "1000 kg", g: "1000000 g" },
];

const ConversionTable = () => {
  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Kilogram [kg]</th>
            <th className="px-4 py-2 border border-green-900">Gram [g]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.kg}</td>
              <td className="px-4 py-2 border border-green-800">{row.g}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
