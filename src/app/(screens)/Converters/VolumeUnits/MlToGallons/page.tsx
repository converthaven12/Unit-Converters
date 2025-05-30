"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjusted for Milliliters to Gallons

const definitions = [
  {
    heading: "Milliliter (mL)",
    content: [
      "Definition: A milliliter is a metric unit of volume equal to one-thousandth of a liter.",
      "History/origin: The milliliter is part of the metric system introduced in France during the late 18th century.",
      "Current use: Milliliters are widely used worldwide for measuring small volumes of liquid, especially in science, medicine, and cooking.",
    ],
  },
  {
    heading: "Gallon (US gal)",
    content: [
      "Definition: A US gallon is a unit of volume equal to 128 US fluid ounces or 4 quarts, approximately 3.785 liters.",
      "History/origin: The term 'gallon' comes from the Old Northern French word 'galon'. It has different definitions in the US and UK systems.",
      "Current use: Gallons are commonly used in the United States for larger volumes of liquids such as milk, gasoline, and water.",
    ],
  },
];

const MlToGallonsPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Milliliters to Gallons"
      fromUnit="Milliliters (mL)"
      toUnit="Gallons (US gal)"
      convertFunction={(val) => val / 3785.41} // 1 milliliter ≈ 1/3785.41 gallons
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 gallon ≈ 3785.41 milliliters
          <br />
          <strong>Example:</strong> convert 7570.82 milliliters to gallons:
          <br />
          7570.82 ÷ 3785.41 = 2 gallons
        </>
      }
      reversePath="/Converters/VolumeUnits/GallonsToMl"
    />
  );
};

export default MlToGallonsPage;
