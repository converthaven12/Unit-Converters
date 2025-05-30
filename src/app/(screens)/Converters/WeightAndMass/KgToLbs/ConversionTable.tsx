import React from "react";

const data = [
  { kg: "0.01 kg", lbs: "0.0220462262 lbs" },
  { kg: "0.1 kg", lbs: "0.2204622622 lbs" },
  { kg: "1 kg", lbs: "2.2046226218 lbs" },
  { kg: "2 kg", lbs: "4.4092452437 lbs" },
  { kg: "3 kg", lbs: "6.6138678655 lbs" },
  { kg: "5 kg", lbs: "11.0231131092 lbs" },
  { kg: "10 kg", lbs: "22.0462262185 lbs" },
  { kg: "20 kg", lbs: "44.092452437 lbs" },
  { kg: "50 kg", lbs: "110.2311310924 lbs" },
  { kg: "100 kg", lbs: "220.4622621849 lbs" },
  { kg: "1000 kg", lbs: "2204.6226218488 lbs" }
];




const ConversionTable = () => {
  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Kilogram [kg]</th>
            <th className="px-4 py-2 border border-green-900">Pound [lbs]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.kg}</td>
              <td className="px-4 py-2 border border-green-800">{row.lbs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
