import React from "react";

const ConversionTable = () => {
  const data = [
    { knot: 1, mph: 1 * 1.15078 },
    { knot: 5, mph: 5 * 1.15078 },
    { knot: 10, mph: 10 * 1.15078 },
    { knot: 15, mph: 15 * 1.15078 },
    { knot: 20, mph: 20 * 1.15078 },
    { knot: 25, mph: 25 * 1.15078 },
    { knot: 0.5, mph: 0.5 * 1.15078 },
    { knot: 2.5, mph: 2.5 * 1.15078 },
    { knot: 30.2, mph: 30.2 * 1.15078 },
    { knot: 100, mph: 100 * 1.15078 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Knots (kn)</th>
            <th className="px-4 py-2 border border-green-900">
              Miles/Hour (mph)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">
                {row.knot.toFixed(3)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.mph.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
