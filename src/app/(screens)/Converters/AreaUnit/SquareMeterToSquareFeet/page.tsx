"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for Square Meters to Square Feet

const definitions = [
  {
    heading: "Square Meter (sq m)",
    content: [
      "Definition: A square meter is the SI unit of area defined as the area of a square with sides one meter in length.",
      "History/origin: The square meter is part of the metric system, introduced during the French Revolution in the late 18th century.",
      "Current use: Square meters are the standard unit of area in most countries worldwide and are commonly used in science, engineering, and everyday measurements.",
    ],
  },
  {
    heading: "Square Foot (sq ft)",
    content: [
      "Definition: A square foot is a unit of area equal to the area of a square with sides one foot in length.",
      "History/origin: The foot as a unit dates back to ancient times and was standardized in the imperial and US customary measurement systems.",
      "Current use: Square feet are widely used in the United States and other countries that use imperial units for measuring area, especially in real estate and construction.",
    ],
  },
];

const SquareMeterToSquareFeetPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Square Meters to Square Feet"
      fromUnit="Square Meters (sq m)"
      toUnit="Square Feet (sq ft)"
      convertFunction={(val) => val * 10.7639} // 1 sq m = 10.7639 sq ft
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 square meter = 10.7639 square feet
          <br />
          1 square foot = 0.092903 square meters
          <br />
          <strong>Example:</strong> convert 50 square meters to square feet:
          <br />
          50 × 10.7639 = 538.195 square feet
        </>
      }
      reversePath="/Converters/AreaUnits/SquareFeetToSquareMeter"
    />
  );
};

export default SquareMeterToSquareFeetPage;
