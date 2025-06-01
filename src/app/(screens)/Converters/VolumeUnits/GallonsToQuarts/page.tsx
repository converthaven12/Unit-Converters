"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // You will create a table adjusted for Gallons to Quarts

const definitions = [
  {
    heading: "Gallon (US gal)",
    content: [
      "Definition: A US gallon is a unit of volume equal to 128 US fluid ounces or 4 quarts, approximately 3.785 liters.",
      "History/origin: The term 'gallon' comes from the Old Northern French word 'galon'. It has different definitions in the US and UK systems.",
      "Current use: Gallons are commonly used in the United States for larger volumes of liquids such as milk, gasoline, and water.",
    ],
  },
  {
    heading: "Quart (US qt)",
    content: [
      "Definition: A US quart is a unit of volume equal to 32 fluid ounces or 4 cups, which is 1/4 of a gallon. It is approximately 0.946 liters.",
      "History/origin: The term 'quart' comes from the Latin word 'quartus', meaning a fourth part.",
      "Current use: Quarts are commonly used in the United States for measuring liquid volumes, especially in cooking and liquid containers like milk jugs.",
    ],
  },
];

const GallonsToQuartsPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Gallons to Quarts"
      fromUnit="Gallons (US gal)"
      toUnit="Quarts (US qt)"
      convertFunction={(val) => val * 4} // 1 gallon = 4 quarts → gallons × 4 = quarts
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 gallon = 4 quarts
          <br />
          <strong>Example:</strong> convert 3 gallons to quarts:
          <br />3 × 4 = 12 quarts
        </>
      }
      reversePath="/Converters/VolumeUnits/QuartsToGallon"
    />
  );
};

export default GallonsToQuartsPage;
