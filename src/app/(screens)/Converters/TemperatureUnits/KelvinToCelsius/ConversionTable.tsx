"use client";

const kelvinToCelsiusExamples = [
  { kelvin: 0, celsius: -273.15 },
  { kelvin: 100, celsius: -173.15 },
  { kelvin: 173.15, celsius: -100 },
  { kelvin: 233.15, celsius: -40 },
  { kelvin: 255.37, celsius: -17.78 },
  { kelvin: 273.15, celsius: 0 },
  { kelvin: 285.15, celsius: 12 },
  { kelvin: 298.15, celsius: 25 },
  { kelvin: 310.15, celsius: 37 },
  { kelvin: 373.15, celsius: 100 },
  { kelvin: 400, celsius: 126.85 },
  { kelvin: 500, celsius: 226.85 },
  { kelvin: 600, celsius: 326.85 },
];

const ConversionTable = () => {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>
            Kelvin (K)
          </th>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>
            Celsius (°C)
          </th>
        </tr>
      </thead>
      <tbody>
        {kelvinToCelsiusExamples.map(({ kelvin, celsius }, index) => (
          <tr key={index}>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                textAlign: "center",
              }}
            >
              {kelvin}
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                textAlign: "center",
              }}
            >
              {celsius}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ConversionTable;
