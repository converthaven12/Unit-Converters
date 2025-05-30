import React from "react";

const ConversionTable = () => {
const data = [
  { squareFoot: 0.01, acre: 2.2956841138659e-7 },
  { squareFoot: 0.1, acre: 2.2956841138659e-6 },
  { squareFoot: 1, acre: 2.29568e-5 },
  { squareFoot: 2, acre: 4.59137e-5 },
  { squareFoot: 3, acre: 6.88705e-5 },
  { squareFoot: 5, acre: 0.0001147842 },
  { squareFoot: 10, acre: 0.0002295684 },
  { squareFoot: 20, acre: 0.0004591368 },
  { squareFoot: 50, acre: 0.0011478421 },
  { squareFoot: 100, acre: 0.0022956841 },
  { squareFoot: 1000, acre: 0.0229568411 },
];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Square Foot [ft^2]
            </th>
            <th className="px-4 py-2 border border-green-900">
              Acre [ac]
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.squareFoot}</td>
              <td className="px-4 py-2 border border-green-800">{row.acre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
