"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for cubic inches to gallons

const definitions = [
  {
    heading: "Cubic Inch (in³)",
    content: [
      "Definition: A cubic inch (in³) is a unit of volume that corresponds to the volume of a cube with each side measuring one inch.",
      "History/origin: The cubic inch is part of the imperial and US customary systems and has historically been used in engineering and automotive fields.",
      "Current use: Cubic inches are used primarily in the United States, especially for measuring engine displacement in automobiles and motorcycles.",
    ],
  },
  {
    heading: "Gallon (US gal)",
    content: [
      "Definition: A US gallon is a unit of volume equal to 231 cubic inches, or about 3.785 liters.",
      "History/origin: The gallon originated in England as a system of measuring wine and beer. The US adopted its own version based on the wine gallon.",
      "Current use: The US gallon is used primarily in the United States to measure liquid volumes like fuel, milk, and other beverages.",
    ],
  },
];

const CubicInchesToGallonsPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Cubic Inches to Gallons"
      fromUnit="Cubic Inches (in³)"
      toUnit="Gallons (US gal)"
      convertFunction={(val) => val / 231} // 1 gallon = 231 cubic inches
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 gallon (US) = 231 cubic inches
          <br />
          1 cubic inch ≈ 0.004329 gallons
          <br />
          <strong>Example:</strong> convert 462 cubic inches to gallons:
          <br />
          462 ÷ 231 = 2 gallons
        </>
      }
      reversePath="/Converters/VolumeUnits/GallonsToCubicInches"
    />
  );
};

export default CubicInchesToGallonsPage;
