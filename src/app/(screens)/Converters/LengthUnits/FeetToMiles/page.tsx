"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for feet to miles

const definitions = [
  {
    heading: "Foot",
    content: [
      "Definition: A foot is a unit of length in the Imperial system, equal to 12 inches or 0.3048 meters.",
      "History/origin: The foot was historically based on the length of a human foot. It has been used since ancient civilizations and is now standardized in the Imperial and US customary systems.",
      "Current use: Feet are commonly used in the United States and a few other countries for measuring height, length, and distances, especially in construction and aviation.",
    ],
  },
  {
    heading: "Mile",
    content: [
      "Definition: A mile is a unit of length in the Imperial system, equal to 5,280 feet or approximately 1,609.344 meters.",
      "History/origin: The mile originated from the Roman 'mille passus', meaning a thousand paces. It was standardized over time, especially in English-speaking countries, to its current definition.",
      "Current use: The mile is primarily used in the United States and the United Kingdom to measure long distances, especially in transportation and road signs.",
    ],
  },
];

const FeetToMilesPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Feet to Miles"
      fromUnit="Feet"
      toUnit="Miles"
      convertFunction={(val) => val / 5280} // 1 mile = 5280 feet
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 mile = 5,280 feet
          <br />
          1 foot = 1 / 5280 miles ≈ 0.000189 miles
          <br />
          <strong>Example:</strong> convert 10,560 feet to miles:
          <br />
          10,560 ÷ 5,280 = 2 miles
        </>
      }
      reversePath="/Converters/LengthUnits/MilesToFeet"
    />
  );
};

export default FeetToMilesPage;
