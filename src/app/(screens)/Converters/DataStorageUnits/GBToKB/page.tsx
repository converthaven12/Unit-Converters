"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for GB to KB

const definitions = [
  {
    heading: "Gigabytes (GB)",
    content: [
      "Definition: Gigabyte is a unit of digital information storage equal to 1,000,000,000 bytes (decimal) or 1,073,741,824 bytes (binary).",
      "History/origin: Larger unit than MB and KB, used for bigger storage devices and file sizes.",
      "Current use: Standard unit for measuring large storage sizes such as hard drives, RAM, and data plans.",
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

const GBToKBPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Gigabytes (GB) to Kilobytes (KB)"
      fromUnit="Gigabytes (GB)"
      toUnit="Kilobytes (KB)"
      convertFunction={(val) => val * 1024 * 1024} // 1 GB = 1024 * 1024 KB
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for GB to KB
      conversionExample={
        <>
          1 gigabyte = 1,048,576 kilobytes (1024 × 1024)
          <br />
          <strong>Example:</strong> convert 2 GB to KB:
          <br />2 × (1024 × 1024) = 2,097,152 KB
        </>
      }
      reversePath="/Converters/DataUnits/KBToGB"
    />
  );
};

export default GBToKBPage;
