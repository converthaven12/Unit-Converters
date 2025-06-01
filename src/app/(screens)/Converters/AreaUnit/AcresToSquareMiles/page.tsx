"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for Acres to Square Miles

const definitions = [
  {
    heading: "Acre",
    content: [
      "Definition: An acre is a unit of area commonly used in the imperial and US customary systems. It is defined as exactly 43,560 square feet or about 4,047 square meters.",
      "History/origin: The acre originated in medieval England as a measure of land that could be plowed by one man with a team of oxen in one day. Its size was standardized over time to the current definition.",
      "Current use: Acres are widely used today in the United States, the United Kingdom, and other countries that follow the imperial measurement system. It is frequently used in agriculture, land planning, and real estate.",
    ],
  },
  {
    heading: "Square Mile",
    content: [
      "Definition: A square mile is a unit of area equal to the area of a square measuring one mile on each side.",
      "History/origin: The square mile is part of the imperial and US customary systems and is often used for measuring large areas of land.",
      "Current use: Square miles are commonly used in the US and UK for measuring large tracts of land, such as cities, counties, and rural areas.",
    ],
  },
];

const AcresToSquareMilesPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Acres to Square Miles"
      fromUnit="Acres"
      toUnit="Square Miles"
      convertFunction={(val) => val / 640} // 1 square mile = 640 acres
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 acre = 0.0015625 square miles
          <br />
          1 square mile = 640 acres
          <br />
          <strong>Example:</strong> convert 1280 acres to square miles:
          <br />
          1280 ÷ 640 = 2 square miles
        </>
      }
      reversePath="/Converters/AreaUnit/SquareMilesToAcres"
    />
  );
};

export default AcresToSquareMilesPage;
