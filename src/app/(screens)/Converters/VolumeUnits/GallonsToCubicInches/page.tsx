"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for gallons to cubic inches

const definitions = [
  {
    heading: "Gallon (US gal)",
    content: [
      "Definition: A US gallon is a unit of volume equal to 231 cubic inches, or about 3.785 liters.",
      "History/origin: The gallon originated in England as a system of measuring wine and beer. The US adopted its own version based on the wine gallon.",
      "Current use: The US gallon is used primarily in the United States to measure liquid volumes like fuel, milk, and other beverages.",
    ],
  },
  {
    heading: "Cubic Inch (in³)",
    content: [
      "Definition: A cubic inch (in³) is a unit of volume that corresponds to the volume of a cube with each side measuring one inch.",
      "History/origin: The cubic inch is part of the imperial and US customary systems and has historically been used in engineering and automotive fields.",
      "Current use: Cubic inches are used primarily in the United States, especially for measuring engine displacement in automobiles and motorcycles.",
    ],
  },
];

const GallonsToCubicInchesPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Gallons to Cubic Inches"
      fromUnit="Gallons (US gal)"
      toUnit="Cubic Inches (in³)"
      convertFunction={(val) => val * 231} // 1 gallon = 231 cubic inches
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 gallon (US) = 231 cubic inches
          <br />
          <strong>Example:</strong> convert 2 gallons to cubic inches:
          <br />2 × 231 = 462 cubic inches
        </>
      }
      reversePath="/Converters/VolumeUnits/CubicInchesToGallons"
    />
  );
};

export default GallonsToCubicInchesPage;
