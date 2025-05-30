"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this ConversionTable for Gallons to Pints

const definitions = [
  {
    heading: "Gallon (US gal)",
    content: [
      "Definition: A US gallon is a unit of volume equal to 128 US fluid ounces, or approximately 3.785 liters.",
      "History/origin: The gallon is a traditional unit of measurement used primarily in the United States.",
      "Current use: Gallons are commonly used for measuring large liquid volumes such as gasoline, milk, and other liquids in the US.",
    ],
  },
  {
    heading: "Pint (US pt)",
    content: [
      "Definition: A US pint is a unit of volume equal to 1/8th of a US gallon, or approximately 473.176 milliliters.",
      "History/origin: The pint has origins in English measurements and varies between US and UK systems.",
      "Current use: Pints are commonly used in the United States for measuring liquid volumes such as beverages and cooking ingredients.",
    ],
  },
];

const GallonsToPintsPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Gallons to Pints"
      fromUnit="Gallons (US gal)"
      toUnit="Pints (US pt)"
      convertFunction={(val) => val * 8} // 1 gallon = 8 pints
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 gallon = 8 pints
          <br />
          <strong>Example:</strong> convert 2 gallons to pints:
          <br />2 × 8 = 16 pints
        </>
      }
      reversePath="/Converters/VolumeUnits/PintsToGallons"
    />
  );
};

export default GallonsToPintsPage;
