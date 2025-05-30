import React from "react";

const ConversionTable = () => {
const data = [
  { meter: 0.01, foot: 0.032808399 },
  { meter: 0.1, foot: 0.3280839895 },
  { meter: 1, foot: 3.280839895 },
  { meter: 2, foot: 6.56167979 },
  { meter: 3, foot: 9.842519685 },
  { meter: 5, foot: 16.4041994751 },
  { meter: 10, foot: 32.8083989501 },
  { meter: 20, foot: 65.6167979003 },
  { meter: 50, foot: 164.0419947507 },
  { meter: 100, foot: 328.0839895013 },
  { meter: 1000, foot: 3280.8398950131 },
];




  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Meter [m]</th>
            <th className="px-4 py-2 border border-green-900">Foot [ft]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.meter}</td>
              <td className="px-4 py-2 border border-green-800">{row.foot}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
