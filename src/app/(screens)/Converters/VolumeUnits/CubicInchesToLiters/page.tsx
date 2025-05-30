"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for cubic inches to liters

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
    heading: "Liter (L)",
    content: [
      "Definition: A liter is a metric unit of volume equal to 1,000 cubic centimeters (cm³) or approximately 61.024 cubic inches.",
      "History/origin: The liter was introduced in France in 1795 as a metric unit derived from the cubic decimeter.",
      "Current use: The liter is commonly used around the world for measuring volumes of liquids such as water, beverages, and fuel.",
    ],
  },
];

const CubicInchesToLitersPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Cubic Inches to Liters"
      fromUnit="Cubic Inches (in³)"
      toUnit="Liters (L)"
      convertFunction={(val) => val * 0.0163871} // 1 in³ ≈ 0.0163871 liters
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 cubic inch ≈ 0.0163871 liters
          <br />
          1 liter ≈ 61.024 cubic inches
          <br />
          <strong>Example:</strong> convert 100 cubic inches to liters:
          <br />
          100 × 0.0163871 = 1.63871 liters
        </>
      }
      reversePath="/Converters/VolumeUnits/LitersToCubicInches"
    />
  );
};

export default CubicInchesToLitersPage;
