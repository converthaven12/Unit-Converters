"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for pints to milliliters

const definitions = [
  {
    heading: "Pint (pt)",
    content: [
      "Definition: A pint is a unit of volume commonly used in the US and UK, equal to 16 US fluid ounces or approximately 473.176 milliliters (US pint).",
      "History/origin: The pint originated from old English units of volume and has different values depending on the system (US/UK).",
      "Current use: Pints are widely used for measuring liquids such as beer, milk, and other beverages in the US and UK.",
    ],
  },
  {
    heading: "Milliliter (ml)",
    content: [
      "Definition: A milliliter is a metric unit of volume equal to one thousandth of a liter.",
      "History/origin: The milliliter was introduced as part of the metric system developed in France during the late 18th century.",
      "Current use: Milliliters are commonly used worldwide for measuring small liquid volumes in science, medicine, and cooking.",
    ],
  },
];

const PintsToMlPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Pints to Milliliters"
      fromUnit="Pints"
      toUnit="Milliliters"
      convertFunction={(val) => val * 473.176} // 1 pint ≈ 473.176 milliliters (US pint)
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 pint ≈ 473.176 milliliters
          <br />
          1 milliliter ≈ 0.00211338 pints
          <br />
          <strong>Example:</strong> convert 3 pints to milliliters:
          <br />3 × 473.176 ≈ 1419.53 milliliters
        </>
      }
      reversePath="/Converters/VolumeUnits/MlToPints"
    />
  );
};

export default PintsToMlPage;
