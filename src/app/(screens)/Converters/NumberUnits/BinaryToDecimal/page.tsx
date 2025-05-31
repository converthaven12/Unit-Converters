"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Binary to Decimal

const definitions = [
  {
    heading: "Binary",
    content: [
      "Definition: Binary is a base-2 numeral system using only two digits, 0 and 1.",
      "History/origin: Used in digital electronics and computing as it represents two states (off/on).",
      "Current use: Fundamental to computer systems, data representation, and digital communication.",
    ],
  },
  {
    heading: "Decimal",
    content: [
      "Definition: Decimal is a base-10 numeral system using digits 0 through 9.",
      "History/origin: The most common number system used in everyday counting, historically developed by humans.",
      "Current use: Used universally for arithmetic, financial calculations, and general counting.",
    ],
  },
];

// Function to convert binary string to decimal number
const binaryToDecimal = (val: any) => {
  // Make sure input is a string and only contains 0s and 1s
  if (typeof val !== "string" || !/^[01]+$/.test(val)) return NaN;
  return parseInt(val, 2);
};

const BinaryToDecimalPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Binary to Decimal"
      fromUnit="Binary"
      toUnit="Decimal"
      convertFunction={binaryToDecimal}
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for Binary to Decimal
      conversionExample={
        <>
          Formula: Decimal = Sum of (each binary digit × 2^position)
          <br />
          <strong>Example:</strong> convert binary 1011 to decimal:
          <br />
          1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = 11
        </>
      }
      reversePath="/Converters/NumberSystems/DecimalToBinary"
    />
  );
};

export default BinaryToDecimalPage;
