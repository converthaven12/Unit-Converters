import React from "react";

const ConversionTable = () => {
  const data = [
    { mile: 1, yard: 1760 },
    { mile: 0.5, yard: 880 },
    { mile: 0.25, yard: 440 },
    { mile: 0.1, yard: 176 },
    { mile: 2, yard: 3520 },
    { mile: 3, yard: 5280 },
    { mile: 5, yard: 8800 },
    { mile: 10, yard: 17600 },
    { mile: 0.01, yard: 17.6 },
    { mile: 0.001, yard: 1.76 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Miles [mi]</th>
            <th className="px-4 py-2 border border-green-900">Yards [yd]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.mile}</td>
              <td className="px-4 py-2 border border-green-800">
                {row.yard.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
