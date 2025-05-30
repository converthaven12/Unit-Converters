"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for cups to liters

const definitions = [
  {
    heading: "Cup (cup)",
    content: [
      "Definition: A cup is a unit of volume commonly used in cooking to measure liquids and bulk foods, equal to 8 US fluid ounces or approximately 0.236588 liters.",
      "History/origin: The cup measurement originated from traditional cooking and household measurements.",
      "Current use: Cups are widely used in the US and Canada in recipes and food packaging.",
    ],
  },
  {
    heading: "Liter (l)",
    content: [
      "Definition: A liter is a metric unit of volume equal to 1000 milliliters.",
      "History/origin: The liter was originally defined in France in 1795 as the volume of one kilogram of water.",
      "Current use: Liters are widely used globally for measuring larger liquid volumes, especially in science, cooking, and commerce.",
    ],
  },
];

const CupsToLitersPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Cups to Liters"
      fromUnit="Cups"
      toUnit="Liters"
      convertFunction={(val) => val * 0.236588} // 1 cup ≈ 0.236588 liters
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 cup ≈ 0.236588 liters
          <br />
          1 liter ≈ 4.22675 cups
          <br />
          <strong>Example:</strong> convert 3 cups to liters:
          <br />3 × 0.236588 ≈ 0.7098 liters
        </>
      }
      reversePath="/Converters/VolumeUnits/LitersToCups"
    />
  );
};

export default CupsToLitersPage;
