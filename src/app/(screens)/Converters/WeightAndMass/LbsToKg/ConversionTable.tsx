import React from "react";

const data = [
  { lbs: "0.01 lbs", kg: "0.0045359237 kg" },
  { lbs: "0.1 lbs", kg: "0.045359237 kg" },
  { lbs: "1 lbs", kg: "0.45359237 kg" },
  { lbs: "2 lbs", kg: "0.90718474 kg" },
  { lbs: "3 lbs", kg: "1.36077711 kg" },
  { lbs: "5 lbs", kg: "2.26796185 kg" },
  { lbs: "10 lbs", kg: "4.5359237 kg" },
  { lbs: "20 lbs", kg: "9.0718474 kg" },
  { lbs: "50 lbs", kg: "22.6796185 kg" },
  { lbs: "100 lbs", kg: "45.359237 kg" },
  { lbs: "1000 lbs", kg: "453.59237 kg" }
];





const ConversionTable = () => {
  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Pound [lbs]</th>
            <th className="px-4 py-2 border border-green-900">Kilogram [kg]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.lbs}</td>
              <td className="px-4 py-2 border border-green-800">{row.kg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
