import React from "react";

const ConversionTable = () => {
  const data = [
    { yard: 0.1, foot: 0.3 },
    { yard: 0.5, foot: 1.5 },
    { yard: 1, foot: 3 },
    { yard: 2, foot: 6 },
    { yard: 3, foot: 9 },
    { yard: 5, foot: 15 },
    { yard: 10, foot: 30 },
    { yard: 20, foot: 60 },
    { yard: 50, foot: 150 },
    { yard: 100, foot: 300 },
    { yard: 200, foot: 600 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Yard [yd]</th>
            <th className="px-4 py-2 border border-green-900">Feet [ft]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.yard}</td>
              <td className="px-4 py-2 border border-green-800">{row.foot}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
