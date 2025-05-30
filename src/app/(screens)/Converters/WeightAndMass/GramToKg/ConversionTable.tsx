import React from "react";

const data = [
  { g: "0.01 g", kg: "0.00001 kg" },
  { g: "0.1 g", kg: "0.0001 kg" },
  { g: "1 g", kg: "0.001 kg" },
  { g: "2 g", kg: "0.002 kg" },
  { g: "3 g", kg: "0.003 kg" },
  { g: "5 g", kg: "0.005 kg" },
  { g: "10 g", kg: "0.01 kg" },
  { g: "20 g", kg: "0.02 kg" },
  { g: "50 g", kg: "0.05 kg" },
  { g: "100 g", kg: "0.1 kg" },
  { g: "1000 g", kg: "1 kg" }
];




const ConversionTable = () => {
  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Gram [g]</th>
            <th className="px-4 py-2 border border-green-900">Kilogram [kg]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.g}</td>
              <td className="px-4 py-2 border border-green-800">{row.kg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
