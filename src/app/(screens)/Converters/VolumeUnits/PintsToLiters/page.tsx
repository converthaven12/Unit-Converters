"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjusted for Pints to Liters

const definitions = [
  {
    heading: "Pint (US pt)",
    content: [
      "Definition: A US pint is a unit of volume equal to 1/8th of a US gallon, or approximately 473.176 milliliters.",
      "History/origin: The pint has origins in English measurements and varies between US and UK systems.",
      "Current use: Pints are commonly used in the United States for measuring liquid volumes such as beverages and cooking ingredients.",
    ],
  },
  {
    heading: "Liter (L)",
    content: [
      "Definition: A liter is a metric unit of volume equal to 1,000 milliliters or approximately 2.113 US pints.",
      "History/origin: The liter was originally defined in France in 1795 and is widely used internationally.",
      "Current use: Liters are commonly used worldwide for measuring liquid volumes in science, cooking, and everyday use.",
    ],
  },
];

const PintsToLitersPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Pints to Liters"
      fromUnit="Pints (US pt)"
      toUnit="Liters (L)"
      convertFunction={(val) => val * 0.473176} // 1 pint ≈ 0.473176 liters
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 pint ≈ 0.473176 liters
          <br />
          <strong>Example:</strong> convert 4 pints to liters:
          <br />4 × 0.473176 = 1.8927 liters
        </>
      }
      reversePath="/Converters/VolumeUnits/LitersToPints"
    />
  );
};

export default PintsToLitersPage;
