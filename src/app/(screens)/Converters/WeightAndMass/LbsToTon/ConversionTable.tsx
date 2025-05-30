import React from "react";


const ConversionTable = () => {
const data = [
  { lbs: "0.01 lbs", metricTon: "4.5359237E-6 t" },
  { lbs: "0.1 lbs", metricTon: "4.53592E-5 t" },
  { lbs: "1 lbs", metricTon: "0.0004535924 t" },
  { lbs: "2 lbs", metricTon: "0.0009071847 t" },
  { lbs: "3 lbs", metricTon: "0.0013607771 t" },
  { lbs: "5 lbs", metricTon: "0.0022679619 t" },
  { lbs: "10 lbs", metricTon: "0.0045359237 t" },
  { lbs: "20 lbs", metricTon: "0.0090718474 t" },
  { lbs: "50 lbs", metricTon: "0.0226796185 t" },
  { lbs: "100 lbs", metricTon: "0.045359237 t" },
  { lbs: "1000 lbs", metricTon: "0.45359237 t" }
];


  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Pound [lbs]</th>
            <th className="px-4 py-2 border border-green-900">Ton (metric) [t]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.lbs}</td>
              <td className="px-4 py-2 border border-green-800">{row.metricTon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
