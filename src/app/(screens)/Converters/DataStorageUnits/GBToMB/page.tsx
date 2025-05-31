"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for GB to MB

const definitions = [
  {
    heading: "Gigabytes (GB)",
    content: [
      "Definition: Gigabyte is a unit of digital information storage equal to 1,000,000,000 bytes (decimal) or 1,073,741,824 bytes (binary).",
      "History/origin: Larger unit than MB, used for bigger storage devices and file sizes.",
      "Current use: Standard unit for measuring larger storage sizes such as hard drives, RAM, and data plans.",
    ],
  },
  {
    heading: "Megabytes (MB)",
    content: [
      "Definition: Megabyte is a unit of digital information storage equal to 1,000,000 bytes (decimal system) or 1,048,576 bytes (binary system, i.e., 1024²).",
      "History/origin: Used as a standard measure for data storage and file sizes.",
      "Current use: Commonly used to describe sizes of files, storage capacity, and memory.",
    ],
  },
];

const GBToMBPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Gigabytes (GB) to Megabytes (MB)"
      fromUnit="Gigabytes (GB)"
      toUnit="Megabytes (MB)"
      convertFunction={(val) => val * 1024} // 1 GB = 1024 MB
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for GB to MB
      conversionExample={
        <>
          1 gigabyte = 1024 megabytes
          <br />
          <strong>Example:</strong> convert 2 GB to MB:
          <br />2 × 1024 = 2048 MB
        </>
      }
      reversePath="/Converters/DataUnits/MBToGB"
    />
  );
};

export default GBToMBPage;
