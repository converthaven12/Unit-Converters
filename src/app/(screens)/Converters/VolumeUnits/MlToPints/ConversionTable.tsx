import React from "react";

const ConversionTable = () => {
  const data = [
    { ml: 473.176, pt: 473.176 / 473.176 },
    { ml: 236.588, pt: 236.588 / 473.176 },
    { ml: 118.294, pt: 118.294 / 473.176 },
    { ml: 946.352, pt: 946.352 / 473.176 },
    { ml: 1419.528, pt: 1419.528 / 473.176 },
    { ml: 1892.704, pt: 1892.704 / 473.176 },
    { ml: 47.3176, pt: 47.3176 / 473.176 },
    { ml: 23.6588, pt: 23.6588 / 473.176 },
    { ml: 4.73176, pt: 4.73176 / 473.176 },
    { ml: 2365.88, pt: 2365.88 / 473.176 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Milliliters [ml]
            </th>
            <th className="px-4 py-2 border border-green-900">Pints [pt]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.ml.toFixed(2)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.pt.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
