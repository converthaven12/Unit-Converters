import React from "react";


const ConversionTable = () => {
  const data = [
  { lbs: "0.01 lbs", stone: "0.0008 stone (US)" },
  { lbs: "0.1 lbs", stone: "0.008 stone (US)" },
  { lbs: "1 lbs", stone: "0.08 stone (US)" },
  { lbs: "2 lbs", stone: "0.16 stone (US)" },
  { lbs: "3 lbs", stone: "0.24 stone (US)" },
  { lbs: "5 lbs", stone: "0.4 stone (US)" },
  { lbs: "10 lbs", stone: "0.8 stone (US)" },
  { lbs: "20 lbs", stone: "1.6 stone (US)" },
  { lbs: "50 lbs", stone: "4 stone (US)" },
  { lbs: "100 lbs", stone: "8 stone (US)" },
  { lbs: "1000 lbs", stone: "80 stone (US)" }
];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Pound [lbs]</th>
            <th className="px-4 py-2 border border-green-900">Stone [US]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.lbs}</td>
              <td className="px-4 py-2 border border-green-800">{row.stone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
