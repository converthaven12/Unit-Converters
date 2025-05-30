import React from "react";

const ConversionTable = () => {
const data = [
  { ml: 0.01, cup: 0.0000422675 },
  { ml: 0.1, cup: 0.0004226753 },
  { ml: 1, cup: 0.0042267528 },
  { ml: 2, cup: 0.0084535057 },
  { ml: 3, cup: 0.0126802585 },
  { ml: 5, cup: 0.0211337642 },
  { ml: 10, cup: 0.0422675284 },
  { ml: 20, cup: 0.0845350568 },
  { ml: 50, cup: 0.2113376419 },
  { ml: 100, cup: 0.4226752838 },
  { ml: 1000, cup: 4.2267528377 },
];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Milliliter [mL]	</th>
            <th className="px-4 py-2 border border-green-900">Cup (US)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.ml}</td>
              <td className="px-4 py-2 border border-green-800">{row.cup}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
