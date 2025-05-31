"use client";

const ConversionTable = () => {
  // Sample binary to hex conversions for the table
  const data = [
    { binary: "0000", hex: "0" },
    { binary: "0001", hex: "1" },
    { binary: "0010", hex: "2" },
    { binary: "0100", hex: "4" },
    { binary: "0110", hex: "6" },
    { binary: "1000", hex: "8" },
    { binary: "1010", hex: "A" },
    { binary: "1100", hex: "C" },
    { binary: "1111", hex: "F" },
    { binary: "11111111", hex: "FF" },
  ];

  return (
    <div className="overflow-x-auto mt-6">
      <table className="w-full border-collapse border border-green-800">
        <thead>
          <tr className="bg-green-700 text-white">
            <th className="border border-green-900 px-4 py-2 text-center">
              Binary
            </th>
            <th className="border border-green-900 px-4 py-2 text-center">
              Hexadecimal
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ binary, hex }) => (
            <tr
              key={binary}
              className="text-center hover:bg-green-50 even:bg-green-100"
            >
              <td className="border border-green-800 px-4 py-2 font-mono">
                {binary}
              </td>
              <td className="border border-green-800 px-4 py-2 font-mono">
                {hex.toUpperCase()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
