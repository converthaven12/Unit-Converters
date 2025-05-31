"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for Square Feet to Square Yards

const definitions = [
  {
    heading: "Square Foot (sq ft)",
    content: [
      "Definition: A square foot is a unit of area equal to the area of a square with sides one foot in length.",
      "History/origin: The foot as a unit dates back to ancient times and was standardized in the imperial and US customary measurement systems.",
      "Current use: Square feet are widely used in the United States and other countries that use imperial units for measuring area, especially in real estate and construction.",
    ],
  },
  {
    heading: "Square Yard (sq yd)",
    content: [
      "Definition: A square yard is a unit of area equal to the area of a square with sides one yard (3 feet) in length.",
      "History/origin: The square yard is part of the imperial and US customary systems, often used for measuring larger areas than square feet.",
      "Current use: Square yards are used in the US, UK, and other countries for land measurement, textiles, and flooring.",
    ],
  },
];

const SquareFeetToSquareYardsPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Square Feet to Square Yards"
      fromUnit="Square Feet (sq ft)"
      toUnit="Square Yards (sq yd)"
      convertFunction={(val) => val / 9} // 1 square yard = 9 square feet
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 square yard = 9 square feet
          <br />
          1 square foot = 0.111111 square yards
          <br />
          <strong>Example:</strong> convert 90 square feet to square yards:
          <br />
          90 ÷ 9 = 10 square yards
        </>
      }
      reversePath="/Converters/AreaUnits/SquareYardsToSquareFeet"
    />
  );
};

export default SquareFeetToSquareYardsPage;
