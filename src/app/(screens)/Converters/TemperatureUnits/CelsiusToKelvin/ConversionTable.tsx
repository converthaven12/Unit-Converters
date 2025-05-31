"use client";

const ConversionTable = () => {
  const data = [
    { celsius: -273.15, kelvin: 0 }, // Absolute zero
    { celsius: 0, kelvin: 273.15 }, // Freezing point of water
    { celsius: 25, kelvin: 298.15 }, // Room temperature
    { celsius: 100, kelvin: 373.15 }, // Boiling point of water
    { celsius: 500, kelvin: 773.15 }, // High temp example
  ];

  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>
            Celsius (°C)
          </th>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>
            Kelvin (K)
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ celsius, kelvin }) => (
          <tr key={celsius}>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                textAlign: "right",
              }}
            >
              {celsius}
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                textAlign: "right",
              }}
            >
              {kelvin}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ConversionTable;
