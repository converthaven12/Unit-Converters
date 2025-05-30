"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // You will create a table adjusted for Gallons to Milliliters

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
    heading: "Milliliter (mL)",
    content: [
      "Definition: A milliliter is a metric unit of volume equal to one-thousandth of a liter.",
      "History/origin: The milliliter is part of the metric system introduced in France during the late 18th century.",
      "Current use: Milliliters are widely used worldwide for measuring small volumes of liquid, especially in science, medicine, and cooking.",
    ],
  },
];

const GallonsToMlPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Gallons to Milliliters"
      fromUnit="Gallons (US gal)"
      toUnit="Milliliters (mL)"
      convertFunction={(val) => val * 3785.41} // 1 gallon ≈ 3785.41 milliliters
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 gallon ≈ 3785.41 milliliters
          <br />
          <strong>Example:</strong> convert 2 gallons to milliliters:
          <br />2 × 3785.41 = 7570.82 milliliters
        </>
      }
      reversePath="/Converters/VolumeUnits/MlToGallons"
    />
  );
};

export default GallonsToMlPage;
