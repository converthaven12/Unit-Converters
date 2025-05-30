"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for liters to cups

const definitions = [
  {
    heading: "Liter (l)",
    content: [
      "Definition: A liter is a metric unit of volume equal to 1000 milliliters.",
      "History/origin: The liter was originally defined in France in 1795 as the volume of one kilogram of water.",
      "Current use: Liters are widely used globally for measuring larger liquid volumes, especially in science, cooking, and commerce.",
    ],
  },
  {
    heading: "Cup (cup)",
    content: [
      "Definition: A cup is a unit of volume commonly used in cooking to measure liquids and bulk foods, equal to 8 US fluid ounces or approximately 0.236588 liters.",
      "History/origin: The cup measurement originated from traditional cooking and household measurements.",
      "Current use: Cups are widely used in the US and Canada in recipes and food packaging.",
    ],
  },
];

const LitersToCupsPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Liters to Cups"
      fromUnit="Liters"
      toUnit="Cups"
      convertFunction={(val) => val / 0.236588} // 1 liter ≈ 4.22675 cups
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 liter ≈ 4.22675 cups
          <br />
          1 cup ≈ 0.236588 liters
          <br />
          <strong>Example:</strong> convert 3 liters to cups:
          <br />3 ÷ 0.236588 ≈ 12.68 cups
        </>
      }
      reversePath="/Converters/VolumeUnits/CupsToLiters"
    />
  );
};

export default LitersToCupsPage;
