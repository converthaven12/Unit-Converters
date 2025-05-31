import React from "react";

const ConversionTable = () => {
  // Sample Kelvin values and their corresponding Fahrenheit conversions
  const data = [
    { kelvin: 0, fahrenheit: ((0 - 273.15) * 9) / 5 + 32 }, // absolute zero
    { kelvin: 255.37, fahrenheit: ((255.37 - 273.15) * 9) / 5 + 32 }, // freezing point of water (0 °C)
    { kelvin: 273.15, fahrenheit: ((273.15 - 273.15) * 9) / 5 + 32 }, // 0 °C in K
    { kelvin: 310.15, fahrenheit: ((310.15 - 273.15) * 9) / 5 + 32 }, // 37 °C human body temp
    { kelvin: 373.15, fahrenheit: ((373.15 - 273.15) * 9) / 5 + 32 }, // boiling point of water (100 °C)
    { kelvin: 400, fahrenheit: ((400 - 273.15) * 9) / 5 + 32 },
    { kelvin: 500, fahrenheit: ((500 - 273.15) * 9) / 5 + 32 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr style={{ backgroundColor: "#15803d", color: "white" }}>
            <th className="px-4 py-2 border border-[#15803d]">Kelvin (K)</th>
            <th className="px-4 py-2 border border-[#15803d]">
              Fahrenheit (°F)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="px-4 py-2 border border-[#15803d]">
                {row.kelvin.toFixed(2)}
              </td>
              <td className="px-4 py-2 border border-[#15803d]">
                {row.fahrenheit.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
