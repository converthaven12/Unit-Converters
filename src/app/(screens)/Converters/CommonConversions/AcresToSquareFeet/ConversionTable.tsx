import React from "react";

const ConversionTable = () => {
  const data = [
  { acres: 0.01, squareFeet: 435.6 },
  { acres: 0.1, squareFeet: 4356 },
  { acres: 1, squareFeet: 43560 },
  { acres: 2, squareFeet: 87120 },
  { acres: 3, squareFeet: 130680 },
  { acres: 5, squareFeet: 217800 },
  { acres: 10, squareFeet: 435600 },
  { acres: 20, squareFeet: 871200 },
  { acres: 50, squareFeet: 2178000 },
  { acres: 100, squareFeet: 4356000 },
  { acres: 1000, squareFeet: 43560000 },
];


  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Acre [ac]
            </th>
            <th className="px-4 py-2 border border-green-900">
              Square Foot [ft^2]
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.acres}</td>
              <td className="px-4 py-2 border border-green-800">{row.squareFeet}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
