import React from "react";

const ConversionTable = () => {
const data = [
  { feet: 0.01, cm: 0.3048 },
  { feet: 0.1, cm: 3.048 },
  { feet: 1, cm: 30.48 },
  { feet: 2, cm: 60.96 },
  { feet: 3, cm: 91.44 },
  { feet: 5, cm: 152.4 },
  { feet: 10, cm: 304.8 },
  { feet: 20, cm: 609.6 },
  { feet: 50, cm: 1524 },
  { feet: 100, cm: 3048 },
  { feet: 1000, cm: 30480 },
];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Foot [ft]</th>
            <th className="px-4 py-2 border border-green-900">Centimeter [cm]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.feet}</td>
              <td className="px-4 py-2 border border-green-800">{row.cm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
