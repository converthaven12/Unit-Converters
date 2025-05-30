import React from "react";

const ConversionTable = () => {
const data = [
  { lbs: 0.01, g: 4.5359237 },
  { lbs: 0.1, g: 45.359237 },
  { lbs: 1, g: 453.59237 },
  { lbs: 2, g: 907.18474 },
  { lbs: 3, g: 1360.77711 },
  { lbs: 5, g: 2267.96185 },
  { lbs: 10, g: 4535.9237 },
  { lbs: 20, g: 9071.8474 },
  { lbs: 50, g: 22679.6185 },
  { lbs: 100, g: 45359.237 },
  { lbs: 1000, g: 453592.37 }
];




  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Pound [lbs]
            </th>
            <th className="px-4 py-2 border border-green-900">Gram [g]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.lbs}</td>
              <td className="px-4 py-2 border border-green-800">{row.g}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
