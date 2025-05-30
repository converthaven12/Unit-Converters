"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for liters to quarts

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
    heading: "Quart (qt)",
    content: [
      "Definition: A quart is a unit of volume used in the US customary and imperial systems, equal to 1/4 of a gallon or approximately 0.946353 liters.",
      "History/origin: The quart originated from the old English system of liquid measurement.",
      "Current use: Quarts are commonly used in the US for measuring liquids like milk, gasoline, and other fluids.",
    ],
  },
];

const LitersToQuartsPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Liters to Quarts"
      fromUnit="Liters"
      toUnit="Quarts"
      convertFunction={(val) => val / 0.946353} // 1 liter ≈ 1.05669 quarts
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 liter ≈ 1.05669 quarts
          <br />
          1 quart ≈ 0.946353 liters
          <br />
          <strong>Example:</strong> convert 3 liters to quarts:
          <br />3 ÷ 0.946353 ≈ 3.169 quarts
        </>
      }
      reversePath="/Converters/VolumeUnits/QuartsToLiters"
    />
  );
};

export default LitersToQuartsPage;
