"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Hexadecimal to Decimal

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
    heading: "Decimal",
    content: [
      "Definition: Decimal is a base-10 numeral system using digits 0 through 9.",
      "History/origin: The most common number system used in everyday counting, historically developed by humans.",
      "Current use: Used universally for arithmetic, financial calculations, and general counting.",
    ],
  },
];

// Function to convert hexadecimal string to decimal number
const hexToDecimal = (val: any) => {
  if (typeof val !== "string" || !/^[0-9A-Fa-f]+$/.test(val)) return NaN;
  return parseInt(val, 16);
};

const HexToDecimalPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Hexadecimal to Decimal"
      fromUnit="Hexadecimal"
      toUnit="Decimal"
      convertFunction={hexToDecimal}
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for Hexadecimal to Decimal
      conversionExample={
        <>
          Formula: Decimal = Sum of (each hex digit × 16^position)
          <br />
          <strong>Example:</strong> convert hexadecimal FF to decimal:
          <br />F × 16¹ + F × 16⁰ = 15 × 16 + 15 × 1 = 255
        </>
      }
      reversePath="/Converters/NumberUnits/DecimalToHex"
    />
  );
};

export default HexToDecimalPage;
