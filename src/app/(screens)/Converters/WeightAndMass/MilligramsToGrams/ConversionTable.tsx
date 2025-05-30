import React from "react";

const ConversionTable = () => {
  const data = [
    { mg: "0.01 mg", g: "1.0E-5 g" },
    { mg: "0.1 mg", g: "0.0001 g" },
    { mg: "1 mg", g: "0.001 g" },
    { mg: "2 mg", g: "0.002 g" },
    { mg: "3 mg", g: "0.003 g" },
    { mg: "5 mg", g: "0.005 g" },
    { mg: "10 mg", g: "0.01 g" },
    { mg: "20 mg", g: "0.02 g" },
    { mg: "50 mg", g: "0.05 g" },
    { mg: "100 mg", g: "0.1 g" },
    { mg: "1000 mg", g: "1 g" },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">
              Milligram [mg]
            </th>
            <th className="px-4 py-2 border border-green-900">Gram [g]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.mg}</td>
              <td className="px-4 py-2 border border-green-800">{row.g}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
