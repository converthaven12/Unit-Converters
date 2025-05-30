"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // You will create a table adjusted for Gallons to Cups

const definitions = [
  {
    heading: "Gallon (US gal)",
    content: [
      "Definition: A US gallon is a unit of volume equal to 128 US fluid ounces or 16 US cups, approximately 3.785 liters.",
      "History/origin: The term 'gallon' comes from the Old Northern French word 'galon'. It has different definitions in the US and UK systems.",
      "Current use: Gallons are commonly used in the United States for larger volumes of liquids such as milk, gasoline, and water.",
    ],
  },
  {
    heading: "Cup (US cup)",
    content: [
      "Definition: A US cup is a unit of volume used in cooking measurements, equal to 8 fluid ounces or about 236.588 milliliters.",
      "History/origin: The cup measurement originated from early English cooking measures and was standardized in the US.",
      "Current use: The cup is commonly used in the United States and Canada for cooking and serving sizes.",
    ],
  },
];

const GallonsToCupsPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Gallons to Cups"
      fromUnit="Gallons (US gal)"
      toUnit="Cups (US cup)"
      convertFunction={(val) => val * 16} // 1 gallon = 16 cups
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 gallon = 16 cups
          <br />
          <strong>Example:</strong> convert 2 gallons to cups:
          <br />2 × 16 = 32 cups
        </>
      }
      reversePath="/Converters/VolumeUnits/CupsToGallon"
    />
  );
};

export default GallonsToCupsPage;
