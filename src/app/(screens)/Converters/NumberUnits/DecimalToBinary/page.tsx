"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Decimal to Binary

const definitions = [
  {
    heading: "Decimal",
    content: [
      "Definition: Decimal is a base-10 numeral system using digits 0 through 9.",
      "History/origin: The most common number system used in everyday counting, historically developed by humans.",
      "Current use: Used universally for arithmetic, financial calculations, and general counting.",
    ],
  },
  {
    heading: "Binary",
    content: [
      "Definition: Binary is a base-2 numeral system using only two digits, 0 and 1.",
      "History/origin: Used in digital electronics and computing as it represents two states (off/on).",
      "Current use: Fundamental to computer systems, data representation, and digital communication.",
    ],
  },
];

// Function to convert decimal number to binary string
const decimalToBinary = (val: number) => {
  if (typeof val !== "number" || val < 0 || !Number.isInteger(val)) return NaN;
  return parseInt(val.toString(2)); // converts binary string back to number
};

const DecimalToBinaryPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Decimal to Binary"
      fromUnit="Decimal"
      toUnit="Binary"
      convertFunction={decimalToBinary}
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for Decimal to Binary
      conversionExample={
        <>
          Formula: Binary = Decimal converted to base-2 string
          <br />
          <strong>Example:</strong> convert decimal 11 to binary:
          <br />
          11 ÷ 2 = 5 remainder 1
          <br />
          5 ÷ 2 = 2 remainder 1
          <br />
          2 ÷ 2 = 1 remainder 0
          <br />
          1 ÷ 2 = 0 remainder 1
          <br />
          So, 11 in binary = 1011
        </>
      }
      reversePath="/Converters/NumberSystems/BinaryToDecimal"
    />
  );
};

export default DecimalToBinaryPage;
