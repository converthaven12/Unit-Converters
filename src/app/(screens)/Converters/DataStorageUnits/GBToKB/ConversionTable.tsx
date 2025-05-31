// ConversionTable.jsx
"use client";

const ConversionTable = () => {
  const data = [
    { kb: 1024, gb: (1024 / (1024 * 1024)).toFixed(6) }, // 1 MB in GB
    { kb: 1048576, gb: 1 }, // 1 GB in GB
    { kb: 2097152, gb: 2 }, // 2 GB in GB
    { kb: 5242880, gb: 5 }, // 5 GB in GB
    { kb: 10485760, gb: 10 }, // 10 GB in GB
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#15803d", color: "white" }}>
            <th style={{ border: "1px solid #14532d", padding: "8px" }}>
              Kilobytes (KB)
            </th>
            <th style={{ border: "1px solid #14532d", padding: "8px" }}>
              Gigabytes (GB)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ kb, gb }) => (
            <tr key={kb}>
              <td
                style={{
                  border: "1px solid #166534",
                  padding: "8px",
                }}
              >
                {kb.toLocaleString()}
              </td>
              <td
                style={{
                  border: "1px solid #166534",
                  padding: "8px",
                }}
              >
                {gb}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
