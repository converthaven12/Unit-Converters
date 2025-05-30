"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for milliliters to pints

const definitions = [
  {
    heading: "Milliliter (ml)",
    content: [
      "Definition: A milliliter is a metric unit of volume equal to one thousandth of a liter.",
      "History/origin: The milliliter was introduced as part of the metric system developed in France during the late 18th century.",
      "Current use: Milliliters are commonly used worldwide for measuring small liquid volumes in science, medicine, and cooking.",
    ],
  },
  {
    heading: "Pint (pt)",
    content: [
      "Definition: A pint is a unit of volume commonly used in the US and UK, equal to 16 US fluid ounces or approximately 473.176 milliliters (US pint).",
      "History/origin: The pint originated from old English units of volume and has different values depending on the system (US/UK).",
      "Current use: Pints are widely used for measuring liquids such as beer, milk, and other beverages in the US and UK.",
    ],
  },
];

const MlToPintsPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Milliliters to Pints"
      fromUnit="Milliliters"
      toUnit="Pints"
      convertFunction={(val) => val / 473.176} // 1 milliliter ≈ 0.00211338 pints (US pint)
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 milliliter ≈ 0.00211338 pints
          <br />
          1 pint ≈ 473.176 milliliters
          <br />
          <strong>Example:</strong> convert 1500 milliliters to pints:
          <br />
          1500 ÷ 473.176 ≈ 3.17 pints
        </>
      }
      reversePath="/Converters/VolumeUnits/PintsToMl"
    />
  );
};

export default MlToPintsPage;
