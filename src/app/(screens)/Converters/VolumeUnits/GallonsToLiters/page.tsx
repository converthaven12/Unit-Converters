"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for gallons to liters

const definitions = [
  {
    heading: "Gallon",
    content: [
      "Definition: A gallon is a unit of volume commonly used in the US customary and imperial systems. The US liquid gallon is equal to 128 fluid ounces or approximately 3.785 liters.",
      "History/origin: The gallon originated from different regional measures of volume in England and was standardized over time.",
      "Current use: Gallons are widely used in the United States for measuring liquid volumes, especially for fuel and beverages.",
    ],
  },
  {
    heading: "Liter",
    content: [
      "Definition: A liter is a metric unit of volume equal to 1,000 cubic centimeters or 1 cubic decimeter.",
      "History/origin: The liter was introduced in France in the late 18th century as part of the metric system.",
      "Current use: Liters are used worldwide for measuring liquid volumes in scientific, commercial, and everyday contexts.",
    ],
  },
];

const GallonsToLitersPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Gallons to Liters"
      fromUnit="Gallons"
      toUnit="Liters"
      convertFunction={(val) => val * 3.78541} // 1 gallon = 3.78541 liters
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 gallon = 3.78541 liters
          <br />
          1 liter = 0.26417 gallons
          <br />
          <strong>Example:</strong> convert 2 gallons to liters:
          <br />2 × 3.78541 = 7.57082 liters
        </>
      }
      reversePath="/Converters/VolumeUnits/LitersToGallons"
    />
  );
};

export default GallonsToLitersPage;
