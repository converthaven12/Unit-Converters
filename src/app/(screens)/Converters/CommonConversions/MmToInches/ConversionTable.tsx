import React from "react";

const ConversionTable = () => {
const data = [
  { mm: 0.01, in: 0.0003937008 },
  { mm: 0.1, in: 0.0039370079 },
  { mm: 1, in: 0.0393700787 },
  { mm: 2, in: 0.0787401575 },
  { mm: 3, in: 0.1181102362 },
  { mm: 5, in: 0.1968503937 },
  { mm: 10, in: 0.3937007874 },
  { mm: 20, in: 0.7874015748 },
  { mm: 50, in: 1.968503937 },
  { mm: 100, in: 3.937007874 },
  { mm: 1000, in: 39.3700787402 }
];



  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Millimeter [mm]</th>
            <th className="px-4 py-2 border border-green-900">Inch [in]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.mm}</td>
              <td className="px-4 py-2 border border-green-800">{row.in}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
