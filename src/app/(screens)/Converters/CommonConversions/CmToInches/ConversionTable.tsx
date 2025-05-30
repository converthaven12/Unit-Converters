import React from "react";

const ConversionTable = () => {
  const data = [
  { cm: 0.01, inch: 0.0039370079 },
  { cm: 0.1, inch: 0.0393700787 },
  { cm: 1, inch: 0.3937007874 },
  { cm: 2, inch: 0.7874015748 },
  { cm: 3, inch: 1.1811023622 },
  { cm: 5, inch: 1.968503937 },
  { cm: 10, inch: 3.937007874 },
  { cm: 20, inch: 7.874015748 },
  { cm: 50, inch: 19.6850393701 },
  { cm: 100, inch: 39.3700787402 },
  { cm: 1000, inch: 393.7007874016 },
];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Centimeter [cm]</th>
            <th className="px-4 py-2 border border-green-900">Inch [in]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.cm}</td>
              <td className="px-4 py-2 border border-green-800">{row.inch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
