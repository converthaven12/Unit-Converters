"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjusted for Liters to Ounces

const definitions = [
  {
    heading: "Liter (L)",
    content: [
      "Definition: A liter is a metric unit of volume equal to 1,000 milliliters or approximately 33.814 US fluid ounces.",
      "History/origin: The liter was originally defined in France in 1795 and is widely used internationally.",
      "Current use: Liters are commonly used worldwide for measuring liquid volumes in science, cooking, and everyday use.",
    ],
  },
  {
    heading: "Fluid Ounce (US fl oz)",
    content: [
      "Definition: A US fluid ounce is a unit of volume equal to 1/128th of a US gallon, approximately 29.5735 milliliters.",
      "History/origin: The fluid ounce is part of the US customary system of measurement.",
      "Current use: Fluid ounces are commonly used in the United States for measuring liquid volumes in recipes, beverages, and packaging.",
    ],
  },
];

const LiterToOuncesPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Liters to Fluid Ounces"
      fromUnit="Liters (L)"
      toUnit="Fluid Ounces (US fl oz)"
      convertFunction={(val) => val * 33.814} // 1 liter ≈ 33.814 US fluid ounces
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 liter ≈ 33.814 US fluid ounces
          <br />
          <strong>Example:</strong> convert 2 liters to fluid ounces:
          <br />2 × 33.814 = 67.628 US fluid ounces
        </>
      }
      reversePath="/Converters/VolumeUnits/OuncesToLiters"
    />
  );
};

export default LiterToOuncesPage;
