"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for quarts to liters

const definitions = [
  {
    heading: "Quart (qt)",
    content: [
      "Definition: A quart is a unit of volume used in the US customary and imperial systems, equal to 1/4 of a gallon or approximately 0.946353 liters.",
      "History/origin: The quart originated from the old English system of liquid measurement.",
      "Current use: Quarts are commonly used in the US for measuring liquids like milk, gasoline, and other fluids.",
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

const QuartsToLitersPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Quarts to Liters"
      fromUnit="Quarts"
      toUnit="Liters"
      convertFunction={(val) => val * 0.946353} // 1 quart ≈ 0.946353 liters
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 quart ≈ 0.946353 liters
          <br />
          1 liter ≈ 1.05669 quarts
          <br />
          <strong>Example:</strong> convert 3 quarts to liters:
          <br />3 × 0.946353 ≈ 2.839 liters
        </>
      }
      reversePath="/Converters/VolumeUnits/LitersToQuarts"
    />
  );
};

export default QuartsToLitersPage;
