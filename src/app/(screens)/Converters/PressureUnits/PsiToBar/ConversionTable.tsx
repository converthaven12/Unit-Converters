import React from "react";

const ConversionTable = () => {
  const data = [
    { psi: 1, bar: 1 / 14.5038 },
    { psi: 5, bar: 5 / 14.5038 },
    { psi: 10, bar: 10 / 14.5038 },
    { psi: 20, bar: 20 / 14.5038 },
    { psi: 50, bar: 50 / 14.5038 },
    { psi: 100, bar: 100 / 14.5038 },
    { psi: 200, bar: 200 / 14.5038 },
    { psi: 500, bar: 500 / 14.5038 },
    { psi: 1000, bar: 1000 / 14.5038 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Pounds per Square Inch (psi)
            </th>
            <th className="px-4 py-2 border border-green-900">Bar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="px-4 py-2 border border-green-800">
                {row.psi.toFixed(3)}
              </td>
              <td className="px-4 py-2 border border-green-800">
                {row.bar.toFixed(5)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
