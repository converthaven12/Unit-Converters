"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for MB to GB

const definitions = [
  {
    heading: "Megabytes (MB)",
    content: [
      "Definition: Megabyte is a unit of digital information storage equal to 1,000,000 bytes (decimal system) or 1,048,576 bytes (binary system, i.e., 1024²).",
      "History/origin: Used as a standard measure for data storage and file sizes.",
      "Current use: Commonly used to describe sizes of files, storage capacity, and memory.",
    ],
  },
  {
    heading: "Gigabytes (GB)",
    content: [
      "Definition: Gigabyte is a unit of digital information storage equal to 1,000,000,000 bytes (decimal) or 1,073,741,824 bytes (binary).",
      "History/origin: Larger unit than MB, used for bigger storage devices and file sizes.",
      "Current use: Standard unit for measuring larger storage sizes such as hard drives, RAM, and data plans.",
    ],
  },
];

const MBToGBPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Megabytes (MB) to Gigabytes (GB)"
      fromUnit="Megabytes (MB)"
      toUnit="Gigabytes (GB)"
      convertFunction={(val) => val / 1024} // 1 GB = 1024 MB
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for MB to GB
      conversionExample={
        <>
          1 gigabyte = 1024 megabytes
          <br />
          <strong>Example:</strong> convert 2048 MB to GB:
          <br />
          2048 ÷ 1024 = 2 GB
        </>
      }
      reversePath="/Converters/DataUnits/GBToMB"
    />
  );
};

export default MBToGBPage;
