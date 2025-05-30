import React from "react";

const ConversionTable = () => {
  const data = [
  { celsius: 0.01, fahrenheit: 32.018 },
  { celsius: 0.1, fahrenheit: 32.18 },
  { celsius: 1, fahrenheit: 33.8 },
  { celsius: 2, fahrenheit: 35.6 },
  { celsius: 3, fahrenheit: 37.4 },
  { celsius: 5, fahrenheit: 41 },
  { celsius: 10, fahrenheit: 50 },
  { celsius: 20, fahrenheit: 68 },
  { celsius: 50, fahrenheit: 122 },
  { celsius: 100, fahrenheit: 212 },
  { celsius: 1000, fahrenheit: 1832 },
];


  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Celsius [°C]</th>
            <th className="px-4 py-2 border border-green-900">Fahrenheit [°F]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.celsius}</td>
              <td className="px-4 py-2 border border-green-800">{row.fahrenheit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
