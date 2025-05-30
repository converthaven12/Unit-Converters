import React from "react";

const ConversionTable = () => {
const data = [
  { cm: 0.01, ft: 0.000328084 },
  { cm: 0.1, ft: 0.0032808399 },
  { cm: 1, ft: 0.032808399 },
  { cm: 2, ft: 0.0656167979 },
  { cm: 3, ft: 0.0984251969 },
  { cm: 5, ft: 0.1640419948 },
  { cm: 10, ft: 0.3280839895 },
  { cm: 20, ft: 0.656167979 },
  { cm: 50, ft: 1.6404199475 },
  { cm: 100, ft: 3.280839895 },
  { cm: 1000, ft: 32.8083989501 }
];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Centimeter [cm]</th>
            <th className="px-4 py-2 border border-green-900">Foot [ft]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.cm}</td>
              <td className="px-4 py-2 border border-green-800">{row.ft}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
