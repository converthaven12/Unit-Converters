"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // You will create a table adjusted for Liters to Cubic Inches

const definitions = [
  {
    heading: "Liter (L)",
    content: [
      "Definition: A liter is a metric unit of volume equal to 1,000 cubic centimeters (cm³) or approximately 61.024 cubic inches.",
      "History/origin: The liter was introduced in France in 1795 as a metric unit derived from the cubic decimeter.",
      "Current use: The liter is commonly used around the world for measuring volumes of liquids such as water, beverages, and fuel.",
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

const LitersToCubicInchesPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Liters to Cubic Inches"
      fromUnit="Liters (L)"
      toUnit="Cubic Inches (in³)"
      convertFunction={(val) => val / 0.0163871} // 1 liter ≈ 61.024 cubic inches
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 liter ≈ 61.024 cubic inches
          <br />
          1 cubic inch ≈ 0.0163871 liters
          <br />
          <strong>Example:</strong> convert 5 liters to cubic inches:
          <br />5 ÷ 0.0163871 ≈ 305.12 cubic inches
        </>
      }
      reversePath="/Converters/VolumeUnits/CubicInchesToLiters"
    />
  );
};

export default LitersToCubicInchesPage;
