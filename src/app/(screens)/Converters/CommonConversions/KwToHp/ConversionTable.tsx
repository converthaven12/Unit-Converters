import React from "react";

const ConversionTable = () => {
  const data = [
    { kw: 0.01, hp: 0.0135962162 },
    { kw: 0.1, hp: 0.1359621617 },
    { kw: 1, hp: 1.3596216173 },
    { kw: 2, hp: 2.7192432346 },
    { kw: 3, hp: 4.0788648519 },
    { kw: 5, hp: 6.7981080865 },
    { kw: 10, hp: 13.596216173 },
    { kw: 20, hp: 27.1924323461 },
    { kw: 50, hp: 67.9810808652 },
    { kw: 100, hp: 135.9621617304 },
    { kw: 1000, hp: 1359.6216173039 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Kilowatt [kW]</th>
            <th className="px-4 py-2 border border-green-900">
              Horsepower (metric)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.kw}</td>
              <td className="px-4 py-2 border border-green-800">{row.hp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
