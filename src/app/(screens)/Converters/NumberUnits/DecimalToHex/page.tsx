"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Decimal to Hexadecimal

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
    heading: "Hexadecimal",
    content: [
      "Definition: Hexadecimal is a base-16 numeral system using digits 0-9 and letters A-F.",
      "History/origin: Used widely in computing and digital electronics as a compact representation of binary data.",
      "Current use: Common in programming, memory addressing, and color codes in web design.",
    ],
  },
];

// Function to convert decimal number to hexadecimal string
const decimalToHex = (val: any) => {
  // Ensure input is a non-negative integer number
  if (typeof val !== "number" || val < 0 || !Number.isInteger(val))
    return "Invalid input";
  return val.toString(16).toUpperCase();
};

const DecimalToHexPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Decimal to Hexadecimal"
      fromUnit="Decimal"
      toUnit="Hexadecimal"
      convertFunction={decimalToHex}
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for Decimal to Hexadecimal
      conversionExample={
        <>
          Formula: Hexadecimal = Decimal converted to base-16 string
          <br />
          <strong>Example:</strong> convert decimal 255 to hexadecimal:
          <br />
          255 ÷ 16 = 15 remainder 15 (F)
          <br />
          15 ÷ 16 = 0 remainder 15 (F)
          <br />
          So, 255 in hexadecimal = FF
        </>
      }
      reversePath="/Converters/NumberSystems/HexToDecimal"
    />
  );
};

export default DecimalToHexPage;
