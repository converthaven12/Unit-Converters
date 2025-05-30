"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // This should be adjusted for Ounces to Liters

const definitions = [
  {
    heading: "Fluid Ounce (US fl oz)",
    content: [
      "Definition: A US fluid ounce is a unit of volume equal to 1/128th of a US gallon, approximately 29.5735 milliliters.",
      "History/origin: The fluid ounce is part of the US customary system of measurement.",
      "Current use: Fluid ounces are commonly used in the United States for measuring liquid volumes in recipes, beverages, and packaging.",
    ],
  },
  {
    heading: "Liter (L)",
    content: [
      "Definition: A liter is a metric unit of volume equal to 1,000 milliliters or approximately 33.814 US fluid ounces.",
      "History/origin: The liter was originally defined in France in 1795 and is widely used internationally.",
      "Current use: Liters are commonly used worldwide for measuring liquid volumes in science, cooking, and everyday use.",
    ],
  },
];

const OuncesToLitersPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Fluid Ounces to Liters"
      fromUnit="Fluid Ounces (US fl oz)"
      toUnit="Liters (L)"
      convertFunction={(val) => val / 33.814} // 1 fluid ounce ≈ 1/33.814 liters
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 liter ≈ 33.814 US fluid ounces
          <br />
          <strong>Example:</strong> convert 67.628 US fluid ounces to liters:
          <br />
          67.628 ÷ 33.814 = 2 liters
        </>
      }
      reversePath="/Converters/VolumeUnits/LitersToOunces"
    />
  );
};

export default OuncesToLitersPage;
