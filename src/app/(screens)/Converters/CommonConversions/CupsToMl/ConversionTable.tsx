import React from "react";

const ConversionTable = () => {
const data = [
  { cup: 0.01, ml: 2.365882365 },
  { cup: 0.1, ml: 23.65882365 },
  { cup: 1, ml: 236.5882365 },
  { cup: 2, ml: 473.176473 },
  { cup: 3, ml: 709.7647095 },
  { cup: 5, ml: 1182.9411825 },
  { cup: 10, ml: 2365.882365 },
  { cup: 20, ml: 4731.76473 },
  { cup: 50, ml: 11829.411825 },
  { cup: 100, ml: 23658.82365 },
  { cup: 1000, ml: 236588.2365 }
];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Cup (US)</th>
            <th className="px-4 py-2 border border-green-900">Milliliter [mL]	</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.cup}</td>
              <td className="px-4 py-2 border border-green-800">{row.ml}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
