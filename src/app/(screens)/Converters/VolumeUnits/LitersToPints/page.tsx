"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this ConversionTable for Liters to Pints

const definitions = [
  {
    heading: "Liter (L)",
    content: [
      "Definition: A liter is a metric unit of volume equal to 1,000 milliliters or approximately 2.113 US pints.",
      "History/origin: The liter was originally defined in France in 1795 and is widely used internationally.",
      "Current use: Liters are commonly used worldwide for measuring liquid volumes in science, cooking, and everyday use.",
    ],
  },
  {
    heading: "Pint (US pt)",
    content: [
      "Definition: A US pint is a unit of volume equal to 1/8th of a US gallon, or approximately 473.176 milliliters.",
      "History/origin: The pint has origins in English measurements and varies between US and UK systems.",
      "Current use: Pints are commonly used in the United States for measuring liquid volumes such as beverages and cooking ingredients.",
    ],
  },
];

const LitersToPintsPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Liters to Pints"
      fromUnit="Liters (L)"
      toUnit="Pints (US pt)"
      convertFunction={(val) => val / 0.473176} // 1 liter ≈ 2.11338 pints
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 liter ≈ 2.113 US pints
          <br />
          <strong>Example:</strong> convert 1.8927 liters to pints:
          <br />
          1.8927 ÷ 0.473176 = 4 pints
        </>
      }
      reversePath="/Converters/VolumeUnits/PintsToLiters"
    />
  );
};

export default LitersToPintsPage;
