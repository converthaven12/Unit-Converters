"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Hexadecimal to Binary

const definitions = [
  {
    heading: "Hexadecimal",
    content: [
      "Definition: Hexadecimal is a base-16 numeral system using digits 0-9 and letters A-F.",
      "History/origin: Used widely in computing and digital electronics as a compact representation of binary data.",
      "Current use: Common in programming, memory addressing, and color codes in web design.",
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

// Function to convert hexadecimal string to binary string
const hexToBinary = (val: any) => {
  if (typeof val !== "string" || !/^[0-9A-Fa-f]+$/.test(val))
    return "Invalid input";
  // Convert hex string to decimal, then decimal to binary string
  const decimalValue = parseInt(val, 16);
  return decimalValue.toString(2);
};

const HexToBinaryPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Hexadecimal to Binary"
      fromUnit="Hexadecimal"
      toUnit="Binary"
      convertFunction={hexToBinary}
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for Hexadecimal to Binary
      conversionExample={
        <>
          Formula: Binary = Hexadecimal converted to decimal, then decimal to
          base-2 string
          <br />
          <strong>Example:</strong> convert hexadecimal FF to binary:
          <br />
          FF (hex) = 255 (decimal)
          <br />
          255 in binary = 11111111
        </>
      }
      reversePath="/Converters/NumberSystems/BinaryToHex"
    />
  );
};

export default HexToBinaryPage;
