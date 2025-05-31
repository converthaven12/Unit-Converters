"use client";

const ConversionTable = () => {
  const data = [
    { hex: "0", binary: "0" },
    { hex: "1", binary: "1" },
    { hex: "A", binary: "1010" },
    { hex: "F", binary: "1111" },
    { hex: "10", binary: "10000" },
    { hex: "FF", binary: "11111111" },
    { hex: "1A3", binary: "110100011" },
  ];

  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>
            Hexadecimal
          </th>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>Binary</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ hex, binary }) => (
          <tr key={hex}>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                textAlign: "center",
              }}
            >
              {hex}
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                textAlign: "center",
              }}
            >
              {binary}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ConversionTable;
