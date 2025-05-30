import React from "react";

const ConversionTable = () => {
  const data = [
    { gallons: 1, cubicFeet: 1 * 0.133681 },
    { gallons: 0.5, cubicFeet: 0.5 * 0.133681 },
    { gallons: 0.25, cubicFeet: 0.25 * 0.133681 },
    { gallons: 2, cubicFeet: 2 * 0.133681 },
    { gallons: 3, cubicFeet: 3 * 0.133681 },
    { gallons: 4, cubicFeet: 4 * 0.133681 },
    { gallons: 0.1, cubicFeet: 0.1 * 0.133681 },
    { gallons: 0.05, cubicFeet: 0.05 * 0.133681 },
    { gallons: 0.01, cubicFeet: 0.01 * 0.133681 },
    { gallons: 5, cubicFeet: 5 * 0.133681 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Gallons [gal]</th>
            <th className="px-4 py-2 border border-green-900">
              Cubic Feet [ft³]
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.gallons.toFixed(2)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.cubicFeet.toFixed(4)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
