import React from "react";

const ConversionTable = () => {
  const data = [
  { fahrenheit: 0.01, celsius: -17.7722222222 },
  { fahrenheit: 0.1, celsius: -17.7222222222 },
  { fahrenheit: 1, celsius: -17.2222222222 },
  { fahrenheit: 2, celsius: -16.6666666667 },
  { fahrenheit: 3, celsius: -16.1111111111 },
  { fahrenheit: 5, celsius: -15 },
  { fahrenheit: 10, celsius: -12.2222222222 },
  { fahrenheit: 20, celsius: -6.6666666667 },
  { fahrenheit: 50, celsius: 10 },
  { fahrenheit: 100, celsius: 37.7777777778 },
  { fahrenheit: 1000, celsius: 537.7777777778 }
];



  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Fahrenheit [°F]</th>
            <th className="px-4 py-2 border border-green-900">Celsius [°C]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.fahrenheit}</td>
              <td className="px-4 py-2 border border-green-800">{row.celsius}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
