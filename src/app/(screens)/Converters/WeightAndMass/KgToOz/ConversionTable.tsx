import React from "react";

const data = [
  { kg: "0.01 kg", oz: "0.3527396195 oz" },
  { kg: "0.1 kg", oz: "3.527396195 oz" },
  { kg: "1 kg", oz: "35.2739619496 oz" },
  { kg: "2 kg", oz: "70.5479238992 oz" },
  { kg: "3 kg", oz: "105.8218858487 oz" },
  { kg: "5 kg", oz: "176.3698097479 oz" },
  { kg: "10 kg", oz: "352.7396194958 oz" },
  { kg: "20 kg", oz: "705.4792389916 oz" },
  { kg: "50 kg", oz: "1763.698097479 oz" },
  { kg: "100 kg", oz: "3527.396194958 oz" },
  { kg: "1000 kg", oz: "35273.96194958 oz" }
];





const ConversionTable = () => {
  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Kilogram [kg]</th>
            <th className="px-4 py-2 border border-green-900">Ounces [oz]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.kg}</td>
              <td className="px-4 py-2 border border-green-800">{row.oz}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
