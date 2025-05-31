"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for Square Yards to Square Feet

const definitions = [
  {
    heading: "Square Yard (sq yd)",
    content: [
      "Definition: A square yard is a unit of area equal to the area of a square with sides one yard (3 feet) in length.",
      "History/origin: The square yard is part of the imperial and US customary systems, often used for measuring larger areas than square feet.",
      "Current use: Square yards are used in the US, UK, and other countries for land measurement, textiles, and flooring.",
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

const SquareYardsToSquareFeetPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Square Yards to Square Feet"
      fromUnit="Square Yards (sq yd)"
      toUnit="Square Feet (sq ft)"
      convertFunction={(val) => val * 9} // 1 square yard = 9 square feet
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 square yard = 9 square feet
          <br />
          1 square foot = 0.111111 square yards
          <br />
          <strong>Example:</strong> convert 10 square yards to square feet:
          <br />
          10 × 9 = 90 square feet
        </>
      }
      reversePath="/Converters/AreaUnits/SquareFeetToSquareYards"
    />
  );
};

export default SquareYardsToSquareFeetPage;
