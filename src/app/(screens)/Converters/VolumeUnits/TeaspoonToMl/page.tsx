"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for teaspoons to milliliters

const definitions = [
  {
    heading: "Teaspoon (tsp)",
    content: [
      "Definition: A teaspoon is a unit of volume commonly used in cooking, equal to 1/3 of a tablespoon or approximately 4.92892 milliliters.",
      "History/origin: The teaspoon measurement originates from traditional cooking measurements and household spoons.",
      "Current use: Teaspoons are widely used in recipes and food measurements primarily in the US and some other countries.",
    ],
  },
  {
    heading: "Milliliter (ml)",
    content: [
      "Definition: A milliliter is a metric unit of volume equal to one-thousandth of a liter (0.001 liters).",
      "History/origin: The milliliter was introduced with the metric system in the late 18th century.",
      "Current use: Milliliters are widely used globally for measuring small liquid volumes in cooking, medicine, and science.",
    ],
  },
];

const TeaspoonToMlPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Teaspoons to Milliliters"
      fromUnit="Teaspoons"
      toUnit="Milliliters"
      convertFunction={(val) => val * 4.92892} // 1 teaspoon = approximately 4.92892 milliliters
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 teaspoon = 4.92892 milliliters
          <br />
          1 milliliter ≈ 0.202884 teaspoons
          <br />
          <strong>Example:</strong> convert 3 teaspoons to milliliters:
          <br />3 × 4.92892 = 14.78676 milliliters
        </>
      }
      reversePath="/Converters/VolumeUnits/MlToTeaspoon"
    />
  );
};

export default TeaspoonToMlPage;
