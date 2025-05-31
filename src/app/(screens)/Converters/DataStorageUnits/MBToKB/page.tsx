"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for MB to KB

const definitions = [
  {
    heading: "Megabytes (MB)",
    content: [
      "Definition: Megabyte is a unit of digital information storage equal to 1,000,000 bytes (decimal system) or 1,048,576 bytes (binary system).",
      "History/origin: Standard measure for larger file sizes and memory capacities.",
      "Current use: Used to describe medium-sized files, RAM size, and storage capacity.",
    ],
  },
  {
    heading: "Kilobytes (KB)",
    content: [
      "Definition: Kilobyte is a unit of digital information storage equal to 1,000 bytes (decimal system) or 1,024 bytes (binary system).",
      "History/origin: Used as a basic unit for measuring small file sizes and memory.",
      "Current use: Commonly used to describe sizes of small files, cache sizes, and memory blocks.",
    ],
  },
];

const MBToKBPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Megabytes (MB) to Kilobytes (KB)"
      fromUnit="Megabytes (MB)"
      toUnit="Kilobytes (KB)"
      convertFunction={(val) => val * 1024} // 1 MB = 1024 KB
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for MB to KB
      conversionExample={
        <>
          1 megabyte = 1024 kilobytes
          <br />
          <strong>Example:</strong> convert 2 MB to KB:
          <br />2 × 1024 = 2048 KB
        </>
      }
      reversePath="/Converters/DataUnits/KBToMB"
    />
  );
};

export default MBToKBPage;
