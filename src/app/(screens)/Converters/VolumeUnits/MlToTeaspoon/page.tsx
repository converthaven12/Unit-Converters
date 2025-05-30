"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for ml to teaspoons

const definitions = [
  {
    heading: "Milliliter (ml)",
    content: [
      "Definition: A milliliter is a metric unit of volume equal to one-thousandth of a liter (0.001 liters).",
      "History/origin: The milliliter was introduced with the metric system in the late 18th century.",
      "Current use: Milliliters are widely used globally for measuring small liquid volumes in cooking, medicine, and science.",
    ],
  },
  {
    heading: "Teaspoon (tsp)",
    content: [
      "Definition: A teaspoon is a unit of volume commonly used in cooking, equal to 1/3 of a tablespoon or approximately 4.92892 milliliters.",
      "History/origin: The teaspoon measurement originates from traditional cooking measurements and household spoons.",
      "Current use: Teaspoons are widely used in recipes and food measurements primarily in the US and some other countries.",
    ],
  },
];

const MlToTeaspoonPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Milliliters to Teaspoons"
      fromUnit="Milliliters"
      toUnit="Teaspoons"
      convertFunction={(val) => val / 4.92892} // 1 milliliter ≈ 0.202884 teaspoons
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 milliliter ≈ 0.202884 teaspoons
          <br />
          1 teaspoon = 4.92892 milliliters
          <br />
          <strong>Example:</strong> convert 15 milliliters to teaspoons:
          <br />
          15 ÷ 4.92892 ≈ 3.044 teaspoons
        </>
      }
      reversePath="/Converters/VolumeUnits/TeaspoonToMl"
    />
  );
};

export default MlToTeaspoonPage;
