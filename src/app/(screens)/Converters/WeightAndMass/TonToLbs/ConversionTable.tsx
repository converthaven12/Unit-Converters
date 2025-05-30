import React from "react";

const ConversionTable = () => {
const data = [
  { ton: 0.01, pounds: 22.0462262185 },
  { ton: 0.1, pounds: 220.4622621849 },
  { ton: 1, pounds: 2204.6226218488 },
  { ton: 2, pounds: 4409.2452436976 },
  { ton: 3, pounds: 6613.8678655463 },
  { ton: 5, pounds: 11023.113109244 },
  { ton: 10, pounds: 22046.226218488 },
  { ton: 20, pounds: 44092.452436976 },
  { ton: 50, pounds: 110231.13109244 },
  { ton: 100, pounds: 220462.26218488 },
  { ton: 1000, pounds: 2204622.6218488 },
];



  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Ton (metric) [t]</th>
            <th className="px-4 py-2 border border-green-900">
              Pound [lbs]
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.ton}</td>
              <td className="px-4 py-2 border border-green-800">{row.pounds}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
