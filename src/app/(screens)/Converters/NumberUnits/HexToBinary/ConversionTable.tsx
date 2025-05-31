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
    <div style={{ overflowX: "auto", marginTop: "1.5rem" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#15803d", color: "white" }}>
            <th style={{ border: "1px solid #14532d", padding: "8px" }}>
              Hexadecimal
            </th>
            <th style={{ border: "1px solid #14532d", padding: "8px" }}>
              Binary
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ hex, binary }) => (
            <tr key={hex} style={{ backgroundColor: "inherit" }}>
              <td
                style={{
                  border: "1px solid #166534",
                  padding: "8px",
                }}
              >
                {hex.startsWith("0x") ? hex : `${hex.toUpperCase()}`}
              </td>
              <td
                style={{
                  border: "1px solid #166534",
                  padding: "8px",
                }}
              >
                {binary.padStart(8, "0")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
