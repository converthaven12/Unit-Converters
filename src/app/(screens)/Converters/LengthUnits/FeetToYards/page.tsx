"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for feet to yards

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
    heading: "Yard",
    content: [
      "Definition: A yard is a unit of length in the Imperial system, equal to 3 feet or 36 inches.",
      "History/origin: The yard has been used since the Middle Ages in England and has been standardized over time. It is now officially defined as exactly 0.9144 meters.",
      "Current use: Yards are commonly used in the United States, United Kingdom, and other countries for measuring distances in sports, construction, and land measurement.",
    ],
  },
];

const FeetToYardsPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Feet to Yards"
      fromUnit="Feet"
      toUnit="Yards"
      convertFunction={(val) => val / 3} // 1 yard = 3 feet
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 yard = 3 feet
          <br />
          1 foot = 1 / 3 yards ≈ 0.3333 yards
          <br />
          <strong>Example:</strong> convert 30 feet to yards:
          <br />
          30 ÷ 3 = 10 yards
        </>
      }
      reversePath="/Converters/LengthUnits/YardsToFeet"
    />
  );
};

export default FeetToYardsPage;
