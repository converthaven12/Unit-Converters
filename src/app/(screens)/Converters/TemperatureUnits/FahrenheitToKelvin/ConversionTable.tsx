import React from "react";

const ConversionTable = () => {
  // Sample Fahrenheit values and their Kelvin equivalents
  const data = [
    { f: -459.67, k: 0 }, // Absolute zero
    { f: 32, k: 273.15 }, // Freezing point of water
    { f: 68, k: 293.15 }, // Room temperature (~20°C)
    { f: 98.6, k: 310.15 }, // Body temperature (~37°C)
    { f: 212, k: 373.15 }, // Boiling point of water
    { f: 500, k: 533.15 },
    { f: 1000, k: 811.15 },
  ];

  // Helper function to convert Fahrenheit to Kelvin (for verification, not used here)
  // K = (F − 32) × 5/9 + 273.15

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-blue-700 text-white text-left">
            <th className="px-4 py-2 border border-blue-900">
              Fahrenheit (°F)
            </th>
            <th className="px-4 py-2 border border-blue-900">Kelvin (K)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="px-4 py-2 border border-blue-800">
                {row.f.toFixed(2)}
              </td>
              <td className="px-4 py-2 border border-blue-800">
                {row.k.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
