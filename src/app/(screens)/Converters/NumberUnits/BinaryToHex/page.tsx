"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Binary to Hexadecimal
import { binaryToHex } from "../../../../utils/Functions/conversionUtils";

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
    heading: "Hexadecimal",
    content: [
      "Definition: Hexadecimal is a base-16 numeral system using digits 0-9 and letters A-F.",
      "History/origin: Used widely in computing and digital electronics as a compact representation of binary data.",
      "Current use: Common in programming, memory addressing, and color codes in web design.",
    ],
  },
];

const BinaryToHexPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Binary to Hexadecimal"
      fromUnit="Binary"
      toUnit="Hexadecimal"
      convertFunction={binaryToHex}
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for Binary to Hexadecimal
      conversionExample={
        <>
          Formula: Hexadecimal = Binary converted to decimal, then decimal to
          base-16 string
          <br />
          <strong>Example:</strong> convert binary 11111111 to hexadecimal:
          <br />
          11111111 (binary) = 255 (decimal)
          <br />
          255 in hexadecimal = FF
        </>
      }
      reversePath="/Converters/NumberUnits/HexToBinary"
    />
  );
};

export default BinaryToHexPage;
