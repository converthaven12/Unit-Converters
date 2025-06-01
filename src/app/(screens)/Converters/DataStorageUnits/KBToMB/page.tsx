"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for KB to MB

const definitions = [
  {
    heading: "Kilobytes (KB)",
    content: [
      "Definition: Kilobyte is a unit of digital information storage equal to 1,000 bytes (decimal system) or 1,024 bytes (binary system).",
      "History/origin: Used as a basic unit for measuring small file sizes and memory.",
      "Current use: Commonly used to describe sizes of small files, cache sizes, and memory blocks.",
    ],
  },
  {
    heading: "Megabytes (MB)",
    content: [
      "Definition: Megabyte is a unit of digital information storage equal to 1,000,000 bytes (decimal system) or 1,048,576 bytes (binary system).",
      "History/origin: Standard measure for larger file sizes and memory capacities.",
      "Current use: Used to describe medium-sized files, RAM size, and storage capacity.",
    ],
  },
];

const KBToMBPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Kilobytes (KB) to Megabytes (MB)"
      fromUnit="Kilobytes (KB)"
      toUnit="Megabytes (MB)"
      convertFunction={(val) => val / 1024} // 1 MB = 1024 KB
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for KB to MB
      conversionExample={
        <>
          1 megabyte = 1024 kilobytes
          <br />
          <strong>Example:</strong> convert 2048 KB to MB:
          <br />
          2048 ÷ 1024 = 2 MB
        </>
      }
      reversePath="/Converters/DataStorageUnits/MBToKB"
    />
  );
};

export default KBToMBPage;
