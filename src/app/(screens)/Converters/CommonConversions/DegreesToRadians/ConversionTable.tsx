import React from "react";

const ConversionTable = () => {
const data = [
  { deg: 0.01, rad: 0.0001745329 },
  { deg: 0.1, rad: 0.0017453293 },
  { deg: 1, rad: 0.0174532925 },
  { deg: 2, rad: 0.034906585 },
  { deg: 3, rad: 0.0523598776 },
  { deg: 5, rad: 0.0872664626 },
  { deg: 10, rad: 0.1745329252 },
  { deg: 20, rad: 0.3490658504 },
  { deg: 50, rad: 0.872664626 },
  { deg: 100, rad: 1.745329252 },
  { deg: 1000, rad: 17.4532925199 },
];


  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Degree [°]
            </th>
            <th className="px-4 py-2 border border-green-900">
              Radian [rad]
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.deg}</td>
              <td className="px-4 py-2 border border-green-800">{row.rad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
