import React from "react";

const ConversionTable = () => {
const data = [
  { rad: 0.01, deg: 0.5729577951 },
  { rad: 0.1, deg: 5.7295779513 },
  { rad: 1, deg: 57.2957795131 },
  { rad: 2, deg: 114.5915590262 },
  { rad: 3, deg: 171.8873385392 },
  { rad: 5, deg: 286.4788975654 },
  { rad: 10, deg: 572.9577951308 },
  { rad: 20, deg: 1145.9155902617 },
  { rad: 50, deg: 2864.7889756541 },
  { rad: 100, deg: 5729.5779513082 },
  { rad: 1000, deg: 57295.779513082 }
];


  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Radian [rad]
            </th>
            <th className="px-4 py-2 border border-green-900">
              Degree [°]
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.rad}</td>
              <td className="px-4 py-2 border border-green-800">{row.deg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
